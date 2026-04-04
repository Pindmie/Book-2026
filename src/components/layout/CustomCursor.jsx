import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [points, setPoints] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const requestRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const trailLength = 12;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      setPoints((prevPoints) => {
        const newPoints = [...prevPoints, mouseRef.current];
        return newPoints.slice(-trailLength);
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isMobile]);

  if (isMobile || points.length < 2) return null;

  const d = points.reduce((acc, point, i) => {
    return i === 0 ? `M ${point.x} ${point.y}` : `${acc} L ${point.x} ${point.y}`;
  }, "");

  return (
    <svg className="fixed inset-0 w-full h-full pointer-events-none z-[9999]">
      <path
        d={d}
        stroke="#D49CFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default CustomCursor;