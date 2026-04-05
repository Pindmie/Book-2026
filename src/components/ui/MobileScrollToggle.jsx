import { useEffect, useState } from "react";

const MobileScrollToggle = ({ scrollRef, bottomOffset = "2rem" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const el = scrollRef?.current;
    if (!el || !isMobile) return;

    const updateState = () => {
      const hasScroll = el.scrollHeight > el.clientHeight + 20;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 10;

      setIsVisible(hasScroll);
      setIsAtBottom(atBottom);
    };

    updateState();

    const handleLoad = () => updateState();

    el.addEventListener("scroll", updateState);
    window.addEventListener("resize", updateState);
    window.addEventListener("load", handleLoad);

    const resizeObserver = new ResizeObserver(() => {
      updateState();
    });
    resizeObserver.observe(el);

    const mutationObserver = new MutationObserver(() => {
      updateState();
    });
    mutationObserver.observe(el, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    const timeouts = [100, 300, 600, 1000].map((delay) =>
      setTimeout(updateState, delay)
    );

    return () => {
      el.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
      window.removeEventListener("load", handleLoad);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, [scrollRef, isMobile]);

  const handleClick = () => {
    const el = scrollRef?.current;
    if (!el) return;

    el.scrollTo({
      top: isAtBottom ? 0 : el.scrollHeight,
      behavior: "smooth",
    });
  };

  if (!isMobile || !isVisible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isAtBottom ? "Revenir en haut" : "Aller en bas"}
      className="md:hidden fixed right-5 z-[100] w-10 h-10 rounded-full border border-current bg-white/30 backdrop-blur-xs shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center transition-all"
      style={{ bottom: bottomOffset }}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        className={`transition-transform duration-300 ${
          isAtBottom ? "rotate-180" : ""
        }`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 10L12 15L17 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
    </button>
  );
};

export default MobileScrollToggle;