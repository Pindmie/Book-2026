import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import CustomCursor from "./components/layout/CustomCursor";
import BurgerMenu from "./pages/BurgerMenu"; // Ce sera maintenant un overlay
import ContactForm from "./pages/ContactForm";
import BurgerLottie from "./components/ui/BurgerLottie";

function AnimatedRoutes() {
  const location = useLocation();
  const [currentTheme, setCurrentTheme] = useState("light");
  
  // NOUVEL ÉTAT : Le menu est géré ici, pas par l'URL
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div className="relative">
      {/* BOUTON BURGER : On change juste l'état au clic */}
      <div className="md:hidden fixed top-[1.5vh] right-4 z-[500] flex items-center gap-2 pointer-events-auto">
        <span className="text-xs italic text-brand pointer-events-none">
          {isMenuOpen ? "Fermer" : "À propos"}
        </span>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer">
          <BurgerLottie isMenuOpen={isMenuOpen} currentTheme={currentTheme} />
        </button>
      </div>

      {/* OVERLAY BURGER : S'affiche par dessus tout */}
      <AnimatePresence>
        {isMenuOpen && (
          <BurgerMenu onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>

      {/* ROUTES STANDARDS : Plus de route /a-propos */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
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