import { fireClickTracking, fireImpTracking } from "rb3198/utils/tracking";
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  MutableRefObject,
  PropsWithChildren,
  RefCallback,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useInView } from "react-intersection-observer";

type MutableRefList<T> = Array<
  RefCallback<T> | MutableRefObject<T> | undefined | null
>;

const mergeRefs = <T,>(...refs: MutableRefList<T>): RefCallback<T> => {
  return (val: T) => {
    setRef(val, ...refs);
  };
};

const setRef = <T,>(val: T, ...refs: MutableRefList<T>): void => {
  refs.forEach((ref) => {
    if (typeof ref === "function") {
      ref(val);
    } else if (ref != null) {
      ref.current = val;
    }
  });
};

type ButtonTrackProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  as: "button";
};

type DivTrackProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  as: "div";
};

type AnchorTrackProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  as: "a";
};

type TrackProps = PropsWithChildren<
  (ButtonTrackProps | DivTrackProps | AnchorTrackProps) & {
    cat: string;
    act: string;
    lab: string;
    threshold?: number;
    trackImp?: boolean;
    trackClick?: boolean;
  }
>;

export const Track: React.FC<TrackProps> = (props) => {
  const {
    as,
    children,
    cat,
    act,
    lab,
    trackClick,
    trackImp,
    threshold,
    ref: passedRef,
    onClick,
  } = props;
  const [impFired, setImpFired] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold });
  const clickHandler = useCallback(
    (
      event:
        | React.MouseEvent<HTMLButtonElement, MouseEvent>
        | React.MouseEvent<HTMLDivElement, MouseEvent>
        | React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      trackClick && fireClickTracking(cat, act, lab);
      if (onClick) {
        switch (as) {
          case "button":
            onClick(event as React.MouseEvent<HTMLButtonElement, MouseEvent>);
            break;
          case "div":
            onClick(event as React.MouseEvent<HTMLDivElement, MouseEvent>);
            break;
          case "a":
            onClick(event as React.MouseEvent<HTMLAnchorElement, MouseEvent>);
            break;
          default:
            break;
        }
      }
      if (as === "a" && props.href) {
        window.open(props.href, props.target);
      }
    },
    [as, cat, act, lab, trackClick, onClick]
  );

  if (trackImp && inView && !impFired) {
    fireImpTracking(cat, act, lab);
    setImpFired(true);
  }

  switch (as) {
    case "button":
      return (
        <button
          {...props}
          onClick={clickHandler}
          ref={mergeRefs(ref, passedRef as MutableRefObject<HTMLButtonElement>)}
        >
          {children}
        </button>
      );
    case "a":
      return (
        <a
          {...props}
          href={undefined}
          onClick={clickHandler}
          ref={mergeRefs(ref, passedRef as MutableRefObject<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    case "div":
      return (
        <div
          {...props}
          onClick={clickHandler}
          ref={mergeRefs(ref, passedRef as MutableRefObject<HTMLDivElement>)}
        >
          {children}
        </div>
      );
    default:
      return null;
  }
};
