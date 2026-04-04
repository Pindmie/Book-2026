const HeaderSimple = ({ currentTheme }) => {
  return (
    /* h-[9vh] et px-6 pour matcher exactement le conteneur du premier code */
    <div className="w-full h-[9.3vh] border-b-2 border-brand flex-shrink-0 bg-white relative flex items-center justify-center px-6">
      
      {/* ÉTOILE GAUCHE : Positionnée exactement comme dans le code 1 */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2">
        <img 
          src={currentTheme === "dark" ? "/Etoile_mobile_2_dark.svg" : "/Etoile_mobile_2.svg"} 
          alt="" 
          className="h-[4vh] object-contain pointer-events-none"
        />
      </div>
      
      {/* CENTRE : Reste parfaitement au milieu car les étoiles sont en absolute */}
      <div className="flex items-center justify-center">
        <img 
          src={currentTheme === "dark" ? "/illu-header-dark.svg" : "/illu-header-main.svg"} 
          alt="" 
          className="h-[2.5vh] object-contain pointer-events-none" 
        />
      </div>

      {/* ÉTOILE DROITE : Positionnée en absolute right-4 comme dans le code 1 */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <img 
          src={currentTheme === "dark" ? "/Etoile_mobile_dark.svg" : "/Etoile_mobile.svg"} 
          alt="" 
          className="h-[4vh] object-contain pointer-events-none" 
        />
      </div>
      
    </div>
  );
};

export default HeaderSimple;