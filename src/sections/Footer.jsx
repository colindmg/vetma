import { FooterLogo } from "../assets/img";

export const Footer = () => {
  return (
    <div className="w-full relative z-50 flex items-end justify-between px-24 py-16 bg-white text-darkgray">
      <div>
        <h4 className="hover:text-darkgray/70 cursor-pointer transition-colors duration-100">
          Twitter / X
        </h4>
        <h4 className="hover:text-darkgray/70 cursor-pointer transition-colors duration-100">
          Instagram
        </h4>
        <h4 className="hover:text-darkgray/70 cursor-pointer transition-colors duration-100">
          Tiktok
        </h4>
        <h4 className="hover:text-darkgray/70 cursor-pointer transition-colors duration-100">
          Contact
        </h4>
        <h4 className="hover:text-darkgray/70 cursor-pointer transition-colors duration-100">
          Shop merchandising
        </h4>
      </div>

      <div className="flex flex-col items-end">
        <img
          src={FooterLogo}
          alt="Vetma Logo"
          className="w-16 cursor-pointer"
        />
        <p>Vetma - 2024 </p>
        <div className="flex items-center text-sm space-x-3">
          <p className="hover:text-darkgray/70 cursor-pointer transition-colors duration-100">
            Legal
          </p>
          <p className="hover:text-darkgray/70 cursor-pointer transition-colors duration-100">
            Privacy Policy
          </p>
          <p className="hover:text-darkgray/70 cursor-pointer transition-colors duration-100">
            Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
};
