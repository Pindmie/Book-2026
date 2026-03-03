import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [points, setPoints] = useState([]);
  const requestRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });
  
  // Nombre de points qui composent la traînée (plus il y en a, plus le trait est long)
  const trailLength = 12; 

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      setPoints((prevPoints) => {
        // On ajoute la position actuelle
        const newPoints = [...prevPoints, mouseRef.current];
        // On ne garde que les X derniers points pour créer l'effet de queue
        return newPoints.slice(-trailLength);
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Si on n'a pas assez de points, on n'affiche rien
  if (points.length < 2) return null;

  // Création du chemin SVG (D-string) qui relie tous les points
  const d = points.reduce((acc, point, i) => {
    return i === 0 ? `M ${point.x} ${point.y}` : `${acc} L ${point.x} ${point.y}`;
  }, "");

  return (
    <svg
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      style={{ fill: "none" }}
    >
      <path
        d={d}
        stroke="#D49CFF" // Ta couleur brand
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transition: "stroke-width 0.2s ease"
        }}
      />
    </svg>
  );
};

export default CustomCursor;