const MobileFooter = ({ currentTheme }) => {
  return (
    <div className="md:hidden w-full h-[9vh] border-t-2 border-brand flex items-center justify-between px-6 bg-white overflow-hidden">

      {/* CONTENEUR MIROIR VERTICAL */}
      <div className="w-full flex items-center justify-between scale-y-[-1]">

        {/* ⚠️ ON INVERSE GAUCHE / DROITE */}

        {/* ÉTOILE GAUCHE = ancienne droite */}
        <img 
          src={currentTheme === "dark" ? "/Etoile_mobile_dark.svg" : "/Etoile_mobile.svg"} 
          alt=""
          className="h-[4vh] object-contain pointer-events-none scale-y-[-1]"
        />

        {/* LOGO CENTRAL */}
        <img 
          src={currentTheme === "dark" ? "/illu-header-dark.svg" : "/illu-header-main.svg"} 
          alt=""
          className="h-[2.5vh] object-contain pointer-events-none scale-y-[-1] opacity-90"
        />

        {/* ÉTOILE DROITE = ancienne gauche */}
        <img 
          src={currentTheme === "dark" ? "/Etoile_mobile_2_dark.svg" : "/Etoile_mobile_2.svg"} 
          alt=""
          className="h-[4vh] object-contain pointer-events-none scale-y-[-1]"
        />

      </div>
    </div>
  );
};

export default MobileFooter;