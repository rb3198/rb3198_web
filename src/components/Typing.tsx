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
  const [activeStrIdx, setActiveStrIdx] = useState(0);
  const [activeWord, setActiveWord] = useState("");
  const [mode, setMode] = useState<"typing" | "erasing">("typing");
  const typeTimeout = useRef<NodeJS.Timeout | null>(null);

  const typeLetter = () => {
    const activeStr = strings[activeStrIdx];
    if (activeWord.length === activeStr.length) {
      // Full word typed. Proceed to erase.
      setMode("erasing");
      return;
    }
    setActiveWord(activeStr.slice(0, activeWord.length + 1));
  };

  const eraseLetter = () => {
    const activeStr = strings[activeStrIdx];
    if (activeWord.length === 0) {
      // word cycle completed. Proceed to the next word.
      setActiveStrIdx((activeStrIdx + 1) % strings.length);
      setMode("typing");
      return;
    }
    setActiveWord(activeStr.slice(0, activeWord.length - 1));
  };

  useEffect(() => {
    const activeStr = strings[activeStrIdx];
    if (mode === "typing") {
      typeTimeout.current = setTimeout(
        typeLetter,
        (typingDuration * 1000) / activeStr.length
      );
    } else {
      typeTimeout.current = setTimeout(() => {
        typeTimeout.current = setTimeout(
          eraseLetter,
          (eraseDuration * 1000) / activeStr.length
        );
      }, displayDuration * 1000);
    }
  }, [mode]);

  useEffect(() => {
    const activeStr = strings[activeStrIdx];
    if (mode === "typing") {
      typeTimeout.current = setTimeout(
        typeLetter,
        (typingDuration * 1000) / activeStr.length
      );
    } else {
      typeTimeout.current = setTimeout(
        eraseLetter,
        (eraseDuration * 1000) / activeStr.length
      );
    }
  }, [activeWord]);

  useEffect(() => {
    // cleanup everything on unmount
    return () => {
      typeTimeout.current && clearTimeout(typeTimeout.current);
    };
  }, []);

  if (strings.length === 0) {
    return null;
  }
  return (
    <span className={classes}>
      {activeWord} <span className={styles.cursor}>|</span>
    </span>
  );
};
