import { BigTitle } from "../components/BigTitle";
import { ProductCard } from "../components/ProductCard";
import {
  WTeeFront,
  WTeeDetail,
  BTeeFront,
  BTeeDetail,
} from "../assets/products";

export const Merchandising = () => {
  return (
    <div className="flex flex-col bg-white py-20 px-40 ">
      <BigTitle textContent="Merch" />
      <div className="flex">
        <ProductCard firstImg={WTeeFront} hoverImg={WTeeDetail} />
        <ProductCard firstImg={BTeeFront} hoverImg={BTeeDetail} />
      </div>
    </div>
  );
};
