import "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Shipping = () => {
  const [state, setState] = useState({
    name: "",
    address: "",
    phone: "",
    post: "",
    province: "",
    city: "",
    area: "",
  });
  const [res, setRes] = useState(false);

  const inputHanle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const save = (e) => {
    e.preventDefault();
    const { name, address, phone, post, province, city, area } =
      state;

    if (
      name &&
      address &&
      phone &&
      post &&
      province &&
      city &&
      area
    ) {
      setRes(true);
    }
  };

  return (
    <div>
      <section className='bg-[url("/frontend/images/banner/shop.png")] h-55 mt-6 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute z-0 pointer-events-none left-0 top-0 w-full h-full bg-black/50"></div>
        <div className="w-[85%]  max-md-custom:w-[80%] max-sm-custom:w-[90%] max-lg-custom:w-[90%] h-full mx-auto relative z-999 ">
          <div className="flex flex-col text-white justify-center items-center gap-1 w-full z-999 h-full relative">
            <h2 className="text-3xl font-bold ">Shipping Page</h2>
            <div className="flex justify-center items-center gap-2 text-2xl w-full">
              <Link to={"/"}>Home</Link>
              <span className="pt-1">
                <IoIosArrowForward />
              </span>
              <span>Shipping</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eeeeee]">
        <div className="w-[85%] max-lg-custom:w-[90%] max-md-custom:w-[90%] max-sm-custom:w-[90%] mx-auto py-16">
          <div className="w-full flex flex-wrap">
            <div className="w-[67%] max-md-lg-custom:w-full">
              <div className="flex flex-col gap-3">
                {/* Information */}
                <div className="bg-white p-6 shadow-sm rounded-md">
                  <h2 className="text-slate-600 font-bold pb-3">
                    Shipping Information
                  </h2>

                  {!res && (
                    <>
                      <form onSubmit={save} action="">
                        <div className="flex max-md-custom:flex-col max-md-custom:gap-2 w-full gap-5 text-slate-600">
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="name">Name</label>
                            <input
                              onChange={inputHanle}
                              value={state.name}
                              type="text"
                              name="name"
                              id="name"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                              placeholder="Name"
                            />
                          </div>
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="Addres">Addres</label>
                            <input
                              onChange={inputHanle}
                              value={state.address}
                              type="text"
                              name="address"
                              id="Addres"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                              placeholder="Addres"
                            />
                          </div>
                        </div>
                        <div className="flex max-md-custom:flex-col max-md-custom:gap-2 w-full gap-5 text-slate-600">
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="Phone">Phone</label>
                            <input
                              onChange={inputHanle}
                              value={state.phone}
                              type="text"
                              name="phone"
                              id="Phone"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                              placeholder="Phone"
                            />
                          </div>
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="post">Post</label>
                            <input
                              onChange={inputHanle}
                              value={state.post}
                              type="text"
                              name="post"
                              id="post"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                              placeholder="Post"
                            />
                          </div>
                        </div>
                        <div className="flex max-md-custom:flex-col max-md-custom:gap-2 w-full gap-5 text-slate-600">
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="Province">Province</label>
                            <input
                              onChange={inputHanle}
                              value={state.province}
                              type="text"
                              name="province"
                              id="Province"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                              placeholder="Province"
                            />
                          </div>
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="City">City</label>
                            <input
                              onChange={inputHanle}
                              value={state.city}
                              type="text"
                              name="city"
                              id="City"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                              placeholder="City"
                            />
                          </div>
                        </div>
                        <div className="flex max-md-custom:flex-col max-md-custom:gap-2 w-full gap-5 text-slate-600">
                          <div className="flex flex-col gap-1 mb-2 w-full">
                            <label htmlFor="Area">Area</label>
                            <input
                              onChange={inputHanle}
                              value={state.area}
                              type="text"
                              name="area"
                              id="Area"
                              className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                              placeholder="Area"
                            />
                          </div>
                          <div className="flex flex-col gap-1 mt-7.25 w-full">
                            <button className="px-3 py-2 rounded-sm hover:shadow-green-500/50 hover:shadow-lg bg-green-500 text-white font-semibold">
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </form>
                    </>
                  )}

                  {res && (
                    <div className="flex flex-col gap-1">
                      <h2 className="text-slate-600 font-semibold pb-2">
                        Deliver To {state.name}
                      </h2>
                      <p>
                        <span className="bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2 py-1 rounded">
                          Home
                        </span>
                        <span>
                          {state.phone} {state.address}{" "}
                          {state.province} {state.city}{" "}
                          {state.area}{" "}
                        </span>
                        <span
                          onClick={() => setRes(false)}
                          className="text-indigo-500 cursor-pointer"
                        >
                          Change
                        </span>
                      </p>
                      <p className="text-slate-600 text-sm">
                        Email To Amir@Gmail.com
                      </p>
                    </div>
                  )}
                </div>
                {/* Cards */}
                {[1, 2].map((p, i) => (
                  <div
                    key={i}
                    className="flex bg-white p-4 flex-col gap-2"
                  >
                    <div className="flex justify-start items-center">
                      <h2 className="text-base font-bold text-slate-600">
                        Shop Name{" "}
                      </h2>
                    </div>
                    {[1, 2].map((p, i) => (
                      <div key={i} className="w-full flex flex-wrap">
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
                ))}
              </div>
            </div>

            {/* Left section */}
                  <div className=" w-[33%] max-md-lg-custom:w-full">
                      <div className="pl-3 max-md-lg-custom:pl-0 max-md-lg-custom:mt-5">
                           <div className="bg-white p-3 text-slate-600 flex flex-col gap-3">
                                    <h2 className="text-xl font-bold">Order Summary</h2>
                                    <div className="flex justify-between items-center">
                                          <span> Items Total (5)</span>
                                          <span>$450</span>
                                    </div>
                                     <div className="flex justify-between items-center">
                                          <span>Delevery Fee</span>
                                          <span>$40</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                          <span>Total Payment</span>
                                          <span>$40</span>
                                    </div>
                                   
                                    <div className="flex justify-between items-center">
                                          <span>Total</span>
                                          <span className="text-lg text-[#059473]">$40</span>
                                    </div>
                                    <button disabled={res?false:true} className={`px-5 py-1.5 rounded-sm hover:shadow-yellow-500/50 hover:shadow-lg ${res ? 'bg-yellow-500': 'bg-yellow-200'}  text-white cursor-pointer uppercase`}>Place Order</button>

                              </div>
                            
                      </div>
                  </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shipping;
