import { AlignTextIcon, BasketIcon, SearchIcon, Star } from "../assets/img";

export const NavBar = () => {
  return (
    <div className="z-[999] fixed top-0 w-screen flex justify-between px-24 py-7 items-center">
      <div>
        <img src={Star} alt="Vetma Star" className="w-6" />
      </div>
      <div className="flex space-x-3">
        <img
          src={AlignTextIcon}
          alt="Align Text Icon"
          className="w-6 cursor-pointer"
        />
        <img
          src={SearchIcon}
          alt="Search Icon"
          className="w-6 cursor-pointer"
        />
        <img
          src={BasketIcon}
          alt="Basket Icon"
          className="w-6 cursor-pointer"
        />
      </div>
    </div>
  );
};
