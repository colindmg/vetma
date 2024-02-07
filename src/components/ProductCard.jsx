import PropTypes from "prop-types";
import { useState } from "react";
import Tilt from "react-parallax-tilt";

export const ProductCard = ({ firstImg, hoverImg }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tilt>
      <div
        className={`w-[300px] h-[300px] flex items-center justify-center rounded-lg cursor-pointer mr-10 mt-5 ${
          isHovered ? "bg-gray-100" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? hoverImg : firstImg}
          alt=""
          className={`w-full h-full object-cover transition-opacity duration-200 rounded-lg ${
            isHovered ? "w-[300px] h-[300px]" : ""
          }`}
        />
      </div>
    </Tilt>
  );
};

ProductCard.propTypes = {
  firstImg: PropTypes.string.isRequired,
  hoverImg: PropTypes.string.isRequired,
};
