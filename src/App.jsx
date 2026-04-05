import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
  const [currentTheme, setCurrentTheme] = useState("light");
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
      <div className="md:hidden fixed top-[1.5vh] right-4 z-[500] flex items-center gap-2 pointer-events-auto">
        <span className="text-xs italic text-brand pointer-events-none">
          {isMenuOpen ? "Fermer" : "À propos"}
        </span>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer">
          <BurgerLottie isMenuOpen={isMenuOpen} currentTheme={currentTheme} />
        </button>
      </div>

    <AnimatePresence>
      {isMenuOpen && (
        <BurgerMenu 
          onClose={() => setIsMenuOpen(false)} 
          onOpenContact={() => {
            setIsMenuOpen(false); // Ferme le menu
            // Si tu veux que ça ouvre le contact sur la Home :
            // Le plus simple est de passer par un paramètre ou de s'assurer 
            // que la Home réagit à l'état.
          }}
        />
      )}
    </AnimatePresence>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* ROUTE HOME : On ajoute :projectName? pour tes liens uniques style /mon-projet */}
          <Route path="/:projectName?" element={<Home />} />
          
          {/* ROUTE CONTACT : Page à part entière */}
          <Route path="/contact" element={<ContactForm />} />
          
          {/* Garde celle-ci si tu l'utilises encore, sinon tu peux l'enlever */}
          <Route path="/project/:id" element={<ProjectDetail />} />
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