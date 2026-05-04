import { useEffect, useRef } from "react";

type ScrollData = { previousScrollTop: number; currentScrollTop: number };

function useDocumentScrollThrottled(callback: (data: ScrollData) => void) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    let previousScrollTop = 0;
    let ticking = false;

    function handleScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const { scrollTop: currentScrollTop } =
          document.documentElement || document.body;
        callbackRef.current({ previousScrollTop, currentScrollTop });
        previousScrollTop = currentScrollTop;
        ticking = false;
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

export default useDocumentScrollThrottled;
