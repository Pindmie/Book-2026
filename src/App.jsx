import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import CustomCursor from "./components/layout/CustomCursor";
import BurgerMenu from "./pages/BurgerMenu";
import ContactForm from "./pages/ContactForm";
import BurgerLottie from "./components/ui/BurgerLottie";

function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentTheme, setCurrentTheme] = useState("light");

  const isMenuOpen = location.pathname === "/a-propos";

  useEffect(() => {
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
      setCurrentTheme(theme);
    };
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    updateTheme();
    return () => observer.disconnect();
  }, []);

  const handleBurgerClick = () => {
    if (isMenuOpen) {
      // On ferme : on demande au navigateur de revenir exactement là où on était
      navigate(-1);
    } else {
      // On ouvre : on va sur la page à-propos
      navigate("/a-propos");
    }
  };

  return (
    <div className="relative">
      {/* Bouton persistant qui ne bouge jamais */}
      <div className="md:hidden fixed top-[1.5vh] right-4 z-[300] flex items-center gap-2 pointer-events-auto">
        <span className="text-xs italic text-brand pointer-events-none">
          {isMenuOpen ? "Fermer" : "À propos"}
        </span>
        <button onClick={handleBurgerClick} className="cursor-pointer">
          <BurgerLottie isMenuOpen={isMenuOpen} currentTheme={currentTheme} />
        </button>
      </div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          {/* Tes projets ont maintenant leur propre route */}
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/a-propos" element={<BurgerMenu />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <Router>
      <CustomCursor />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;