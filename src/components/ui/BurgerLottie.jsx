import Lottie from "lottie-react";
import { useEffect, useRef } from "react";

// Imports depuis src/assets/lottie/
import vertLottie from "../../assets/lottie/vert.json"; 
import darkLottie from "../../assets/lottie/dark.json";

const BurgerLottie = ({ isMenuOpen, currentTheme }) => {
  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef.current) {
      if (isMenuOpen) {
        lottieRef.current.setDirection(1);
        lottieRef.current.play();
      } else {
        lottieRef.current.setDirection(-1);
        lottieRef.current.play();
      }
    }
  }, [isMenuOpen]);

  return (
    <div className="w-5 h-5 flex items-center justify-center cursor-pointer">
      <Lottie
        lottieRef={lottieRef}
        animationData={currentTheme === "dark" ? darkLottie : vertLottie}
        loop={false}
        autoplay={false}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default BurgerLottie;