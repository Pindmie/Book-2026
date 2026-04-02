import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import CustomCursor from "./components/layout/CustomCursor";
import BurgerMenu from "./pages/BurgerMenu";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    /* On utilise "popLayout" pour que les deux pages s'animent en même temps */
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        {/* AJOUT DE LA ROUTE BURGER MENU */}
        <Route path="/burger-menu" element={<BurgerMenu />} />
        </Routes>
    </AnimatePresence>
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