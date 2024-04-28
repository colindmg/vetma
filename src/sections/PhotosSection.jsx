import ImageCarousel from "../components/ImageCarousel";
import { slider1Images, slider2Images } from "../constants";

export const PhotosSection = () => {
  return (
    <div className="relative z-[100] w-full bg-white flex flex-col items-center px-24 py-20">
      <h2 className="text-5xl mb-20 text-center font-avec uppercase text-darkgray">
        Spreading independent brands
        <br />
        <span className="font-bold">worldwide</span>
      </h2>

      <ImageCarousel images={slider1Images} direction={"left"} />
      <div className="h-[1px]"></div>
      <ImageCarousel images={slider2Images} direction={"right"} />
      <div className="text-darkgray font-medium w-full flex justify-end items-center mb-1">
        @v3tma
      </div>
    </div>
  );
};
