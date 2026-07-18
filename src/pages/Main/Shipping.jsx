import  'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Shipping = () => {
    return (
        <div>
             <section className='bg-[url("/frontend/images/banner/shop.png")] h-55 mt-6 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute z-0 pointer-events-none left-0 top-0 w-full h-full bg-black/50"></div>
        <div className="w-[85%]  max-md-custom:w-[80%] max-sm-custom:w-[90%] max-lg-custom:w-[90%] h-full mx-auto relative z-999 ">
          <div className="flex flex-col text-white justify-center items-center gap-1 w-full z-999 h-full relative">
            <h2 className="text-3xl font-bold ">Card Page</h2>
            <div className="flex justify-center items-center gap-2 text-2xl w-full">
              <Link to={"/"}>Home</Link>
              <span className="pt-1">
                <IoIosArrowForward />
              </span>
              <span>Cart</span>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Shipping;