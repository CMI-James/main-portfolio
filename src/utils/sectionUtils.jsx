export const getSectionClasses = (section) => {
  const isEvenSection = section % 2 === 0;

  return {
    transitionColor: isEvenSection ? "bg-brown-1000" : "bg-beige",
    mainColor: isEvenSection
      ? "text-brown-1000 selection:bg-brown-1000 selection:text-beige"
      : "text-beige selection:bg-beige selection:text-brown-1000",
    backgroundColor: isEvenSection ? "#f5f5dc" : "#0f0500",
    color: isEvenSection ? "#0f0500" : "#f5f5dc",
    buttonClass: isEvenSection
      ? "bg-brown-1000 border-brown-1000 text-beige hover:border-brown-1000 hover:bg-beige hover:text-brown-1000"
      : "bg-beige border-beige text-brown-1000 hover:border-beige hover:bg-brown-1000 hover:text-beige",
    harmburgerClass: isEvenSection ? "bg-brown-1000" : "bg-beige",
    burgerLineColor: isEvenSection ? "#0f0500" : "#f5f5dc",
    dotColor: isEvenSection ? "bg-beige" : "bg-brown-1000",
    navColor: isEvenSection
      ? "bg-brown-1000 text-beige"
      : "bg-beige text-brown-1000",
    curveColor: isEvenSection ? "fill-brown-1000" : "fill-beige",
  };
};
