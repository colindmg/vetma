import PropTypes from "prop-types";
import { useState } from "react";
import Tilt from "react-parallax-tilt";

export const ProductCard = ({
  firstImg,
  hoverImg,
  url = "#",
  productName,
  productPrice,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mr-10 max-md:mr-0">
      <Tilt>
        <a href={url} target="_blank" rel="noreferrer">
          <div
            className={`w-[300px] h-[300px] max-lg:w-[250px] max-lg:h-[250px] flex items-center justify-center rounded-lg cursor-pointer  mt-5 ${
              isHovered ? "bg-gray-100" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={isHovered ? hoverImg : firstImg}
              alt=""
              className="w-full h-full object-cover transition-opacity duration-200 rounded-lg "
            />
          </div>
        </a>
      </Tilt>
      <div className="flex flex-col items-center mt-3">
        <h3 className="text-lg uppercase ">{productName}</h3>
        <p>{productPrice}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  firstImg: PropTypes.string.isRequired,
  hoverImg: PropTypes.string.isRequired,
  url: PropTypes.string,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
};
