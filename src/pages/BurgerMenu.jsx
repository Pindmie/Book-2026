import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ThemeSwitch from "../components/ui/ThemeSwitch";
import HeaderSimple from "../components/ui/HeaderSimple";
import MobileScrollToggle from "../components/ui/MobileScrollToggle";
import MobileFooter from "../components/ui/MobileFooter";
import BurgerLottie from "../components/ui/BurgerLottie";

const BurgerMenu = ({ onClose }) => {
  const navigate = useNavigate();
  const [currentTheme, setCurrentTheme] = useState("light");
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
              {/* MODIFICATION ICI : Lien vers la nouvelle route /contact */}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/contact");
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

              <a href="/CV - LOPES Léa-Anna 2026.pdf" target="_blank" rel="noreferrer" className="mt-2 flex items-center justify-center gap-2 border border-brand px-3 py-1 rounded-full text-brand bg-white hover:bg-brand hover:text-white transition-colors duration-300">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.94077 0H6.95384L6.95384 10.9612H4.96691V12.9316H6.95384V14.902H8.94077V12.9316H10.9277V10.9612L8.94077 10.9612L8.94077 0ZM12.9146 8.99085V10.9612H10.9277V8.99085H12.9146ZM12.9146 8.99085V7.02048H14.9016V8.99085H12.9146ZM2.97998 8.99085V10.9612H4.96691V8.99085H2.97998ZM2.97998 8.99085L2.97998 7.02048H0.993056L0.993056 8.99085H2.97998Z" fill="currentColor"/>
                  <path d="M6.95384 0H8.94077L8.94077 10.9612L10.9277 10.9612V8.99085H12.9146V7.02048H14.9016V8.99085H12.9146V10.9612H10.9277L8.94077 10.9612L8.94077 0H6.95384L6.95384 10.9612H4.96691H2.97998V8.99085H0.993056L0.993056 7.02048H2.97998L2.97998 8.99085H4.96691V10.9612H6.95384L6.95384 0Z" fill="currentColor"/>
                  <path d="M0 14.9019H15.8954V16.8888H0V14.9019Z" fill="currentColor"/>
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

      <MobileScrollToggle scrollRef={scrollAreaRef} />
    </div>
  );
};

export default BurgerMenu;