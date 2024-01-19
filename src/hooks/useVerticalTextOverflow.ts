import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Expects a div with a single, static <p> element as its child to work correctly.
 * Sentences are split by full-stops + spaces (". ")
 *
 * Therefore, make sure to separate your sentences using ". "
 */
export function useVerticalTextOverflow<T extends HTMLDivElement>(): [
  DOMRect | null,
  React.LegacyRef<T>
] {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const sentences = useRef<string[]>();
  const nodeRef = useRef<T>();
  const observerRef = useRef<ResizeObserver>();

  const observerCallback: ResizeObserverCallback = useCallback(
    (resizeEvent) => {
      if (!resizeEvent || resizeEvent.length === 0) {
        return;
      }
      const { contentRect, target } = resizeEvent[0];
      setRect(contentRect);
    },
    []
  );

  useEffect(() => {
    // content box dimensions have changed.
    // Adjust the sentences before delivering the next frame.
    console.info("Given node has been resized.", nodeRef.current);
    window.requestAnimationFrame(() => {
      adjustSentences();
    });
  }, [rect]);

  const adjustSentences = useCallback(() => {
    if (!nodeRef.current) {
      console.warn("Node ref not found");
      return;
    }
    if (!sentences.current) {
      console.warn("Sentences not set in useVerticalOverflow!");
      return;
    }
    let { clientHeight, children } = nodeRef.current;
    if (children.length > 1 || children[0].tagName !== "P") {
      console.error(
        "Invalid children detected while using useVerticalOverflow. The container must contain a single <p> child."
      );
      return;
    }
    const [child] = children;
    child.innerHTML = "";
    let sentenceIdx = 0,
      scrollHeight = 0;
    while (
      scrollHeight <= clientHeight &&
      sentenceIdx < sentences.current.length
    ) {
      const fullStop =
        sentenceIdx === sentences.current.length - 1 ? " " : ". ";
      child.innerHTML += sentences.current[sentenceIdx] + fullStop;
      scrollHeight = nodeRef.current.scrollHeight;
      sentenceIdx++;
    }
    // Shave the last space.
    child.innerHTML = child.innerHTML.substring(0, child.innerHTML.length - 1);
    // re-adjust if scroll height is now greater than client height at the end of the loop.
    if (scrollHeight > clientHeight) {
      child.innerHTML =
        child.innerHTML.substring(0, child.innerHTML.lastIndexOf(". ")) + ".";
    }
  }, []);

  const ref: React.LegacyRef<T> = useCallback((node: T) => {
    if (!node) {
      return;
    }
    const { children } = node;
    if (children.length > 1 || children[0].tagName !== "P") {
      console.error(
        "Invalid children detected while using useVerticalOverflow. The container must contain a single <p> child."
      );
      return;
    }
    const { innerHTML } = children[0];
    sentences.current = innerHTML.split(". ");
    nodeRef.current = node;
    observerRef.current = new ResizeObserver(observerCallback);
    observerRef.current.observe(node);
  }, []);

  return [rect, ref];
}
