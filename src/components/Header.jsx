import { CrayText } from "./CrayText";
import { MovingTitle } from "./MovingTitle";

export const Header = () => {
  return (
    <header className="header relative flex flex-col justify-center items-center">
      <div className="grain z-40"></div>
      <div className="flex flex-col justify-center items-center">
        <MovingTitle />
        <h2 className="font-avec text-white text-2xl mt-3 tracking-[3px]">
          ✦ EMERGING BRAND MEDIA ✦
        </h2>
      </div>

      <CrayText textContent="Scroll" />
    </header>
  );
};
