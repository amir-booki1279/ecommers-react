import "react";
import { FaEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";

const ShopProduct = ({ style }) => {
  return (
    <div
      className={`w-full grid ${style === "grid" ? "grid-cols-3 max-md-lg-custom:grid-cols-2 max-md-custom:grid-cols-2" : "grid-cols-1 max-md-lg-custom:grid-cols-2 max-md-custom:grid-cols-2"} gap-3`}>
      {[1, 2, 3, 4, 5, 6].map((p, i) => (
        <div
          key={i}
          className={`flex transition-all w-full bg-white p-1 rounded-md duration-1000 hover:shadow-md hover:-translate-y-3 ${style === "grid" ? "flex-col justify-start items-start" : "justify-start items-center max-md-lg-custom:flex-col max-md-lg-custom:justify-start max-md-lg-custom:items-start"}`} >
          <div
            className={
              style === "grid"
                ? "w-full relative group h-52.5 max-md-custom:h-67.5 max-xs-custom:h-42.5 overflow-hidden"
                : "max-md-lg-custom:w-full relative group h-52.5 max-md-custom:h-67.5 overflow-hidden"
            }>
            <img src={`/frontend/images/products/${p}.webp`} alt="" className="h-60 rounded-md max-md-custom:h-67.5 max-xs-custom:h-42.5 w-full " />

            <ul className="flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
              <li className="w-9.5 h-9.5 cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-720 transition-all">
                <FaRegHeart />
              </li>
              <li className="w-9.5 h-9.5 cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-720 transition-all">
                <FaEye />
              </li>
              <li className="w-9.5 h-9.5 cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-720 transition-all">
                <FaShoppingCart />
              </li>
            </ul>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProduct;
