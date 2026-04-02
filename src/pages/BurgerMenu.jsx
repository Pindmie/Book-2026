import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ThemeSwitch from "../components/ui/ThemeSwitch";
import HeaderSimple from "../components/ui/HeaderSimple";
import ContactForm from "./ContactForm";
import MobileScrollToggle from "../components/ui/MobileScrollToggle";
import MobileFooter from "../components/ui/MobileFooter";

const BurgerMenu = () => {
  const navigate = useNavigate();
  const [currentTheme, setCurrentTheme] = useState("light");
  const [showContact, setShowContact] = useState(false);
  const scrollAreaRef = useRef(null);

  useEffect(() => {
    const updateTheme = () => {
      const theme =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "dark"
          : "light";
      setCurrentTheme(theme);
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 z-[200] bg-white flex flex-col font-inter text-brand">
      {/* HEADER FIXE */}
      <div className="md:hidden sticky top-0 z-[30] w-full bg-white border-b-2 border-brand px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase text-brand">
            Portfolio
          </span>
          <div className="scale-50 origin-left">
            <ThemeSwitch />
          </div>
        </div>

        <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 group cursor-pointer"
      >
        <span className="text-xs italic text-brand">Fermer</span>

        <motion.span
          layoutId="mobile-menu-icon-wrap"
          className="w-5 h-5 flex items-center justify-center"
          initial={false}
          transition={{
            layout: {
              type: "spring",
              stiffness: 320,
              damping: 28
            }
          }}
        >
          <motion.img
            layoutId="mobile-menu-icon"
            src={
              currentTheme === "dark"
                ? "/Picto_burger_1_dark.svg"
                : "/Picto_burger_1.svg"
            }
            alt="Menu"
            className="w-5 h-5 object-contain origin-center"
            style={{ rotate: "45deg", scale: 1.12 }}
            transition={{
              layout: {
                type: "spring",
                stiffness: 320,
                damping: 28
              }
            }}
          />
        </motion.span>
      </button>
      </div>

      <HeaderSimple currentTheme={currentTheme} />

      {/* CONTENU SEULEMENT ANIMÉ */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="flex-1 flex flex-col min-h-0"
      >
        <div
          ref={scrollAreaRef}
          className="flex-1 overflow-y-auto px-8 pt-10 pb-4"
        >
          <div className="mb-10">
            <h1 className="text-[clamp(1rem,3vh,1.3rem)] font-bold leading-none">
              LOPES Léa-Anna
            </h1>
            <h2 className="text-[clamp(0.85rem,2vh,1.125rem)] text-accent text-right">
              Bordeaux, France
            </h2>
          </div>

          {/* SECTION À PROPOS */}
          <section className="mb-12">
            <div className="relative pl-[3.5rem] mb-2">
              <img
                src={
                  currentTheme === "dark"
                    ? "/illu-propos-dark.svg"
                    : "/illu-propos.svg"
                }
                alt=""
                className="absolute -left-[-25px] -translate-y-2/3 w-[4vh] h-[4vh] object-contain"
              />
              <h3 className="text-[clamp(0.875rem,1.8vh,1rem)] font-bold">
                À propos...
              </h3>
            </div>
            <p className="text-[clamp(0.85rem,1.8vh,1rem)] leading-tight text-justify whitespace-pre-line">
              Je travaille sur des projets numériques et artistiques, allant de la
              direction artistique, à l’UI, au design graphique jusqu'au level et
              game design, tout en pratiquant des techniques traditionnelles comme
              la sérigraphie, la gravure, la peinture et la sculpture.
              {"\n\n"}
              Formée à l’École des Gobelins et au CNAM-ENJMIN en Interactive
              Design, et titulaire d’un Bachelor en Direction Artistique
              Multimédia ainsi que d’un Master en Arts plastiques, j’articule mon
              travail entre création numérique et recherche plastique.
            </p>
          </section>

          {/* SECTION EXPÉRIENCES */}
          <section className="mb-12">
            <div className="relative pl-[3rem] mb-2">
              <img
                src={
                  currentTheme === "dark" ? "/illu-exp-dark.svg" : "/illu-exp.svg"
                }
                alt=""
                className="absolute left-5 -translate-y-2/3 w-6 h-6 object-contain"
              />
              <h3 className="text-[clamp(0.875rem,1.8vh,1rem)] font-bold">
                Expériences professionnelles...
              </h3>
            </div>
            <p className="text-[clamp(0.85rem,1.8vh,1rem)] leading-tight text-justify whitespace-pre-line">
              Avec près de 3 ans d’expérience en communication et marketing, j’ai
              travaillé en direction artistique 360°, design graphique, web design
              et community management.
              {"\n\u00A0"}
              J’ai également animé des activités ludopédagogiques autour des TCG et
              enseigné les arts plastiques en écoles primaires et secondaires.
            </p>
          </section>

          {/* SECTION CONTACTS */}
          <section className="pl-[3rem]">
            <h3 className="text-[clamp(0.85rem,2vh,1.125rem)] mb-4 uppercase font-bold">
              Mes contacts
            </h3>

            <div className="flex flex-col gap-4 text-[clamp(0.85rem,1.8vh,1.125rem)]">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setShowContact(true);
                }}
                className="flex items-center gap-[12px] hover:text-accent transition-colors no-underline cursor-pointer"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.167429 11.3864L1.24679 13.2559L12.2164 6.92261L13.2958 8.79212L15.1241 7.73657L14.0447 5.86705L15.873 4.8115L14.7936 2.94198L12.9654 3.99754L11.886 2.12802L10.0577 3.18358L11.1371 5.05309L0.167429 11.3864ZM7.15008 2.36962L8.97835 1.31406L10.0577 3.18358L8.22944 4.23913L7.15008 2.36962ZM7.15008 2.36962L5.3218 3.42517L4.24244 1.55566L6.07071 0.500102L7.15008 2.36962ZM12.5469 11.7172L14.3752 10.6616L13.2958 8.79212L11.4675 9.84768L12.5469 11.7172ZM12.5469 11.7172L10.7186 12.7727L11.798 14.6423L13.6263 13.5867L12.5469 11.7172Z"
                    fill="currentColor"
                  />
                </svg>
                M’écrire !
              </a>

              <a
                href="https://pindmie.itch.io/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.167429 11.3864L1.24679 13.2559L12.2164 6.92261L13.2958 8.79212L15.1241 7.73657L14.0447 5.86705L15.873 4.8115L14.7936 2.94198L12.9654 3.99754L11.886 2.12802L10.0577 3.18358L11.1371 5.05309L0.167429 11.3864ZM7.15008 2.36962L8.97835 1.31406L10.0577 3.18358L8.22944 4.23913L7.15008 2.36962ZM7.15008 2.36962L5.3218 3.42517L4.24244 1.55566L6.07071 0.500102L7.15008 2.36962ZM12.5469 11.7172L14.3752 10.6616L13.2958 8.79212L11.4675 9.84768L12.5469 11.7172ZM12.5469 11.7172L10.7186 12.7727L11.798 14.6423L13.6263 13.5867L12.5469 11.7172Z"
                    fill="currentColor"
                  />
                </svg>
                Itch.io
              </a>

              <a
                href="/CV - LOPES Léa-Anna 2026.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center justify-center gap-2 border border-brand px-6 py-2 rounded-full font-bold uppercase text-sm text-brand bg-white hover:bg-brand hover:text-white transition-colors duration-300 w-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-[2vh] h-[2vh] transition-colors duration-300"
                >
                  <g clipPath="url(#clip0_1_107)">
                    <path d="M0.167429 11.3864L1.24679 13.2559L12.2164 6.92261L13.2958 8.79212L15.1241 7.73657L14.0447 5.86705L15.873 4.8115L14.7936 2.94198L12.9654 3.99754L11.886 2.12802L10.0577 3.18358L11.1371 5.05309L0.167429 11.3864ZM7.15008 2.36962L8.97835 1.31406L10.0577 3.18358L8.22944 4.23913L7.15008 2.36962ZM7.15008 2.36962L5.3218 3.42517L4.24244 1.55566L6.07071 0.500102L7.15008 2.36962ZM12.5469 11.7172L14.3752 10.6616L13.2958 8.79212L11.4675 9.84768L12.5469 11.7172ZM12.5469 11.7172L10.7186 12.7727L11.798 14.6423L13.6263 13.5867L12.5469 11.7172Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_107">
                      <rect width="16" height="15.1111" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Télécharger mon CV
              </a>
            </div>
              </section>
                <div className="md:hidden mt-8 -mb-4 -mx-8">
                <MobileFooter currentTheme={currentTheme} />
              </div>
        </div>
      </motion.div>

      <MobileScrollToggle scrollRef={scrollAreaRef}/>

      <AnimatePresence>
        {showContact && (
          <ContactForm
            onClose={() => setShowContact(false)}
            sharedTransition={{ duration: 0.6 }}
          />
        )}
      </AnimatePresence>
    </div>
    
  );
};

export default BurgerMenu;