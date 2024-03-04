import {
  BackMag,
  BlueTee,
  CoverMag1,
  CoverMag2,
  DetailsTee,
  WhiteTee,
  Scratch1,
  Scratch2,
} from "../assets/img";

export const HorizontalSection = () => {
  return (
    <div
      className="flex items-center px-24 z-50 sticky top-0 h-screen w-full min-w-max bg-white"
      id="scrollBelowHeader"
    >
      <div className="relative ml-40">
        <img
          src={CoverMag1}
          className="h-[507px]"
          alt="Cover du magazine Vetma Collector"
        />
        <img
          src={CoverMag2}
          className="h-[258px] absolute -bottom-20 -right-28 "
          alt="Cover du magazine de base"
        />
        <img
          src={BackMag}
          className="h-[258px] absolute top-1/4 -left-32"
          alt="Back du magazine"
        />
      </div>

      <div className="relative flex flex-col w-[630px] ml-48">
        <h2 className="text-[64px] font-avec uppercase text-darkgray tracking-wider">
          Éphéméride
        </h2>
        <h4 className="text-darkgray text-xl absolute top-[75px] font-inter font-normal">
          2023 - Collector Magazine.
        </h4>
        <p className="text-darkgray font-inter text-[16px] tracking-wide leading-tight mt-7">
          In this inaugural issue of <span className="font-medium">Vetma</span>{" "}
          magazine, discover all the brands that have made their mark at the
          start of 2023. Featuring interviews, photos, and deep dives, this
          104-page magazine has it all.
          <br />
          <br />
          Written by @jeuneaki - Typo by @kgmye
        </p>
      </div>

      <div className="relative h-[507px] w-[550px]">
        <img src={WhiteTee} className="w-[381px]" alt="White Magic Tee" />
        <img
          src={BlueTee}
          className="absolute w-[381px] top-1/2 right-0"
          alt="Blue Magic Tee"
        />
        <img
          src={DetailsTee}
          className="absolute w-[100px] top-14 -right-6"
          alt="Details Magic Tee"
        />
      </div>

      <div className="relative flex flex-col w-[630px] ml-48">
        <h2 className="text-[64px] font-avec uppercase text-darkgray tracking-wider">
          Magic tees
        </h2>
        <h4 className="text-darkgray text-xl absolute top-[75px] font-inter font-normal">
          2024 - Merchandising.
        </h4>
        <p className="text-darkgray font-inter text-[16px] tracking-wide leading-tight mt-7">
          SPECIAL MAGIC TEE - 100% COTTON 230 GSM - Screen-Printed
          <br />
          Classic size, take a size up for a wide fit.
          <br />
          Manufactured in China
          <br />
          Ready to ship / Worldwide shipping
          <br />
          <br />
          Design by @jeuneaki with @rocketboy
        </p>
        <p className="text-darkgray font-inter text-[16px] tracking-wide leading-tight mt-6">
          <span className="font-medium">BEHIND THE SCENES : ROCKETBOY</span>
          <br />
          <br />
          For this first Vetma merchandise collection, it was crucial for me to
          collaborate with an artist who shares my vision. A year before the
          creation of the media, I came across the work of{" "}
          <span className="font-medium">Rocketboy</span>, an artist inspired by
          retro and old-school video games.
          <br />
          In February 2023, we began brainstorming a textile project that
          highlights the very essence of Vetma:{" "}
          <span className="font-medium">the creation of clothing</span>. This
          is, the magician who conjures up garments in his cauldron was born.
        </p>
      </div>

      <div className="relative w-[638px] h-[525px] ml-20">
        <img src={Scratch1} className="absolute w-[427px] top-0 left-0" />
        <img src={Scratch2} className="absolute w-[427px] bottom-0 right-0" />
      </div>
    </div>
  );
};
