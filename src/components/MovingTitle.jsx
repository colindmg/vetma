import { useState } from "react";
import { bigTitle } from "../constants";

export const MovingTitle = () => {
  const [headerBigTitle, setHeaderBigTitle] = useState(bigTitle);
  const [isAnimating, setIsAnimating] = useState(false);

  const reverseTitle = () => {
    const array = [...headerBigTitle];
    return array.reverse();
  };

  const randomImageChange = (setBasicImage = false) => {
    const array = [...headerBigTitle];
    array.forEach((item) => {
      setBasicImage
        ? (item.currentImage = 0)
        : (item.currentImage = Math.floor(Math.random() * item.image.length));
    });
    return array;
  };

  const sortTitle = async () => {
    setIsAnimating(true);
    let array = [...headerBigTitle];
    for (let i = array.length - 1; i >= 0; i--) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      array = [
        ...bigTitle.slice(0, array.length - i),
        ...array.slice(array.length - i).reverse(),
      ];
      setHeaderBigTitle(randomImageChange());
      setHeaderBigTitle(array);
    }
    setHeaderBigTitle(randomImageChange(true));
    setIsAnimating(false);
  };

  const handleMouseEnter = () => {
    if (!isAnimating) {
      setHeaderBigTitle(reverseTitle());
      sortTitle();
    }
  };

  return (
    <div className="flex" onMouseEnter={handleMouseEnter}>
      {headerBigTitle.map((item, index) => (
        <img
          className="pr-1"
          key={index}
          src={item.image[item.currentImage]}
          alt={item.letter}
        />
      ))}
    </div>
  );
};
