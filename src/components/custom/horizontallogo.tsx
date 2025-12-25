import LogoPng from "@/assets/docuisine-no-base-color.png";
import LogoTypographyPng from "@/assets/docuisine-typography-color-on-light.png";

const HorizontalLogo = () => {
  return (
    <div className="flex flex-row gap-4 align-middle justify-center items-center">
      <img src={LogoPng} alt="Docuisine Logo" className="h-[1.8em] w-auto" />
      <img
        src={LogoTypographyPng}
        alt="Docuisine Typography"
        className="h-[1.2em] w-auto"
      />
    </div>
  );
};
export default HorizontalLogo;
