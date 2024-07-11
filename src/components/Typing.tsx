import React, { useEffect, useRef, useState } from "react";
import styles from "rb3198/styles/scss/typing.scss";

interface TypingProps {
  /**
   * Set of strings to be typed in the animation
   */
  strings: string[];
  /**
   * Time taken to type each string, in secs
   */
  typingDuration: number;
  /**
   * Time taken to erase each string, in secs
   */
  eraseDuration: number;
  /**
   * Time in secs that a fully typed string is displayed, before getting erased.
   */
  displayDuration: number;
  classes?: string;
}

/**
 * Component to render typing animation for a set of strings, cyclically
 * @returns {React.FC<TypingProps>}
 */
export const Typing: React.FC<TypingProps> = (props) => {
  const { strings, typingDuration, eraseDuration, displayDuration, classes } =
    props;
  const containerRef = useRef<HTMLSpanElement>(null);
  const displayAnimationStart = useRef<number>(0);
  const typeAnimationStart = useRef<number>(0);
  const eraseAnimationStart = useRef<number>(0);

  const typeLetter = (
    timestamp: number,
    word: string,
    typedToIdx: number,
    wordIdx: number,
    nWords: number
  ) => {
    if (typedToIdx === word.length) {
      if (!displayAnimationStart.current) {
        displayAnimationStart.current = timestamp;
      }
      const displayElapsed = timestamp - displayAnimationStart.current;
      if (displayElapsed >= displayDuration * 1000) {
        eraseAnimationStart.current = timestamp;
        displayAnimationStart.current = 0;
        requestAnimationFrame((t) =>
          eraseLetter(t, word, typedToIdx - 1, wordIdx, nWords)
        );
      } else {
        requestAnimationFrame((t) =>
          typeLetter(t, word, typedToIdx, wordIdx, nWords)
        );
      }
      return;
    }
    if (containerRef.current) {
      containerRef.current.innerText = word.slice(0, typedToIdx + 1);
    }
    if (
      timestamp - typeAnimationStart.current >=
      (typingDuration * 1000) / word.length
    ) {
      typeAnimationStart.current = timestamp;
      typedToIdx++;
    }
    requestAnimationFrame((t) =>
      typeLetter(t, word, typedToIdx, wordIdx, nWords)
    );
  };

  const eraseLetter = (
    timestamp: number,
    word: string,
    typedToIdx: number,
    wordIdx: number,
    nWords: number
  ) => {
    if (typedToIdx < 0) {
      const newIdx = (wordIdx + 1) % nWords;
      typeAnimationStart.current = timestamp;
      requestAnimationFrame((t) =>
        typeLetter(t, strings[newIdx], 0, newIdx, nWords)
      );
      return;
    }
    if (containerRef.current) {
      containerRef.current.innerText = word.slice(
        0,
        Math.max(0, typedToIdx - 1)
      );
    }
    if (
      timestamp - eraseAnimationStart.current >=
      (eraseDuration * 1000) / word.length
    ) {
      eraseAnimationStart.current = timestamp;
      typedToIdx--;
    }
    requestAnimationFrame((t) =>
      eraseLetter(t, word, typedToIdx, wordIdx, nWords)
    );
  };

  useEffect(() => {
    typeAnimationStart.current = 0;
    typeLetter(0, strings[0], 0, 0, strings.length);
  }, []);

  if (strings.length === 0) {
    return null;
  }
  return (
    <span>
      <span ref={containerRef} className={classes}></span>
      <span className={styles.cursor}>|</span>
    </span>
  );
};
