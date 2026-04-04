import { useEffect, useState, useRef } from "react";

const CustomScrollbar = ({ scrollRef }) => {
  // Définis ici ta hauteur fixe en pixels
  const FIXED_THUMB_HEIGHT = 25; 

  const [thumbTop, setThumbTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef(null);
  const scrollInterval = useRef(null);
  const dragStartY = useRef(0);
  const dragStartScrollTop = useRef(0);

  const updateThumb = () => {
    if (scrollRef.current && trackRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const trackHeight = trackRef.current.clientHeight;
      
      // Si pas de scroll possible, on cache ou on bloque en haut
      if (scrollHeight <= clientHeight) {
        setThumbTop(0);
        return;
      }

      // On calcule la position en fonction de la hauteur fixe du thumb
      const maxThumbTop = trackHeight - FIXED_THUMB_HEIGHT;
      const scrollRatio = scrollTop / (scrollHeight - clientHeight);
      setThumbTop(scrollRatio * maxThumbTop);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartY.current = e.clientY;
    dragStartScrollTop.current = scrollRef.current.scrollTop;
    document.body.style.userSelect = "none";
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || !scrollRef.current || !trackRef.current) return;
      const { scrollHeight, clientHeight } = scrollRef.current;
      const trackHeight = trackRef.current.clientHeight;
      const deltaY = e.clientY - dragStartY.current;
      
      const maxThumbTop = trackHeight - FIXED_THUMB_HEIGHT;
      if (maxThumbTop <= 0) return;

      const scrollAmount = (deltaY / maxThumbTop) * (scrollHeight - clientHeight);
      scrollRef.current.scrollTop = dragStartScrollTop.current + scrollAmount;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = "";
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, scrollRef]);

  const handleScrollAction = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ top: direction === "up" ? -60 : 60, behavior: "auto" });
  };

  const startContinuousScroll = (direction) => {
    scrollInterval.current = setInterval(() => handleScrollAction(direction), 50);
  };

  const stopContinuousScroll = () => clearInterval(scrollInterval.current);

  useEffect(() => {
    const grid = scrollRef.current;
    if (grid) {
      grid.addEventListener("scroll", updateThumb);
      const resizeObserver = new ResizeObserver(updateThumb);
      resizeObserver.observe(grid);
      updateThumb();
      return () => {
        grid.removeEventListener("scroll", updateThumb);
        resizeObserver.disconnect();
      };
    }
  }, [scrollRef]);

  return (
    <div className="custom-scrollbar flex flex-col h-full w-full bg-white">
      {/* Chevron Haut */}
      <button 
        onMouseDown={() => startContinuousScroll("up")}
        onMouseUp={stopContinuousScroll}
        onMouseLeave={stopContinuousScroll}
        onClick={() => handleScrollAction("up")}
        className="w-full h-[25px] flex items-center justify-center text-brand border-b-2 border-brand hover:text-accent flex-shrink-0"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 14l5-5 5 5" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
        </svg>
      </button>

      {/* Track & Thumb */}
      <div ref={trackRef} className="flex-1 w-full relative overflow-hidden bg-white">
        <div
          onMouseDown={handleMouseDown}
          style={{ 
            height: `${FIXED_THUMB_HEIGHT}px`, 
            top: `${thumbTop}px`,
            position: 'absolute'
          }}
          className="left-0 right-0 bg-brand w-full"
        />
      </div>

      {/* Chevron Bas */}
      <button 
        onMouseDown={() => startContinuousScroll("down")}
        onMouseUp={stopContinuousScroll}
        onMouseLeave={stopContinuousScroll}
        onClick={() => handleScrollAction("down")}
        className="w-full h-[25px] flex items-center justify-center text-brand border-t-2 border-brand hover:text-accent flex-shrink-0"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
        </svg>
      </button>
    </div>
  );
};

export default CustomScrollbar;