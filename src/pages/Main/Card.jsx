import "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Card = () => {
  const card_Product = [1, 2];
  const outOf_Product = [1, 2];
  const navigate = useNavigate()

  const redirect = ()=>{
        navigate('/shipping',{
          state :{
            products:[],
            price:500,
            Shipping_Fee:40,
            items:2
          }
        })
  }

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
      <section className="bg-[#eeeeee]">
        <div className="w-[85%] max-lg-custom:w-[90%] max-md-custom:w-[90%] max-sm-custom:w-[90%] mx-auto py-16">
          {card_Product.length > 0 || outOf_Product > 0 ? (
            <div className="flex flex-wrap">
              <div className="w-[67%] max-md-lg-custom:w-full">
                <div className="pr-3 max-md-lg-custom:pr-0">
                  <div className="flex flex-col gap-3">
                    <div className="bg-white p-4">
                      <h2 className="text-base font-semibold text-green-500">
                        Stock Product {card_Product.length}
                      </h2>
                    </div>

                    {
                      card_Product.map((p,i)=>(
                         <div key={i} className="flex bg-white p-4 flex-col gap-2">
                        <div className="flex justify-start items-center">
                          <h2 className="text-base font-bold text-slate-600">
                            Shop Name{" "}
                          </h2>
                        </div>
                        {[1, 2].map((p, i) => (
                          <div
                            key={i}
                            className="w-full flex flex-wrap"
                          >
                            <div className="flex max-sm-custom:w-full gap-2 w-7/12">
                              <div className="flex gap-2 justify-start items-center">
                                <img
                                  className="w-20 h-20"
                                  src={`/frontend/images/products/${p}.webp`}
                                  alt=""
                                />
                                <div className="pr-4 text-slate-600">
                                  <h2 className="text-base font-semibold">
                                    Product Name
                                  </h2>
                                  <span className="text-sm">
                                    Brand : Jara
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between w-5/12 max-sm-custom:w-full max-sm-custom:mt-3">
                              <div className="pl-4 max-sm-custom:pl-0">
                                <h2 className="text-lg text-orange-500">
                                  $240
                                </h2>
                                <p className="line-through">$300</p>
                                <p>-15%</p>
                              </div>
                              <div className="flex gap-2 flex-col">
                                <div className="flex bg-slate-200 h-7.5 justify-center items-center text-xl">
                                  <div className="px-3 cursor-pointer">
                                    {" "}
                                    -{" "}
                                  </div>
                                  <div className="px-3 cursor-pointer">
                                    {" "}
                                    2{" "}
                                  </div>
                                  <div className="px-3 cursor-pointer">
                                    {" "}
                                    +{" "}
                                  </div>
                                </div>
                                <button className="px-5 py-0.75 text-white bg-red-500">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      ))
                    }

                    {
                      outOf_Product.length > 0 && <div className="flex flex-col gap-3">
                            <div className="bg-white p-4">
                      <h2 className="text-base font-semibold text-red-500">
                        Out Of Stock {outOf_Product.length}
                      </h2>
                    </div>
                    <div className="bg-white p-4">
                       {[1].map((p, i) => (
                          <div
                            key={i}
                            className="w-full flex flex-wrap"
                          >
                            <div className="flex max-sm-custom:w-full gap-2 w-7/12">
                              <div className="flex gap-2 justify-start items-center">
                                <img
                                  className="w-20 h-20"
                                  src={`/frontend/images/products/${p}.webp`}
                                  alt=""
                                />
                                <div className="pr-4 text-slate-600">
                                  <h2 className="text-base font-semibold">
                                    Product Name
                                  </h2>
                                  <span className="text-sm">
                                    Brand : Jara
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between w-5/12 max-sm-custom:w-full max-sm-custom:mt-3">
                              <div className="pl-4 max-sm-custom:pl-0">
                                <h2 className="text-lg text-orange-500">
                                  $240
                                </h2>
                                <p className="line-through">$300</p>
                                <p>-15%</p>
                              </div>
                              <div className="flex gap-2 flex-col">
                                <div className="flex bg-slate-200 h-7.5 justify-center items-center text-xl">
                                  <div className="px-3 cursor-pointer">
                                    {" "}
                                    -{" "}
                                  </div>
                                  <div className="px-3 cursor-pointer">
                                    {" "}
                                    2{" "}
                                  </div>
                                  <div className="px-3 cursor-pointer">
                                    {" "}
                                    +{" "}
                                  </div>
                                </div>
                                <button className="px-5 py-0.75 text-white bg-red-500">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                      </div>
                    }
                  </div>
                </div>
              
              </div>
                {/* Left section */}
                  <div className=" w-[33%] max-md-lg-custom:w-full">
                      <div className="pl-3 max-md-lg-custom:pl-0 max-md-lg-custom:mt-5">
                            {
                              card_Product.length > 0 && <div className="bg-white p-3 text-slate-600 flex flex-col gap-3">
                                    <h2 className="text-xl font-bold">Order Summary</h2>
                                    <div className="flex justify-between items-center">
                                          <span>2 Items</span>
                                          <span>$450</span>
                                    </div>
                                     <div className="flex justify-between items-center">
                                          <span>Shipping Fee</span>
                                          <span>$40</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <input className="w-full px-3 py-2 border border-slate-200 outline-0 focus:border-green-500 rounded-sm" type="text" placeholder="Input Vaucher Coupon" />
                                        <button className="px-4 py-px bg-[#059473] text-white rounded-sm text-sm uppercase">Apply</button>
                                    </div>
                                    <div className="flex justify-between items-center">
                                          <span>Total</span>
                                          <span className="text-lg text-[#059473]">$40</span>
                                    </div>
                                    <button onClick={redirect} className="px-5 py-1.5 rounded-sm hover:shadow-red-500/50 hover:shadow-lg bg-red-500 text-white cursor-pointer uppercase">Process To CheckOut</button>

                              </div>
                            }
                      </div>
                  </div>
            </div>
          ) : (
            <div>
              <Link
                className="px-4 p-1 bg-indigo-500 text-white"
                to={"/shops"}
              >
                Shop Now
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Card;
