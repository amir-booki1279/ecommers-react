import "react";
import { FaEdit, FaImages } from "react-icons/fa";
import { FadeLoader } from "react-spinners";

const SellerProfile = () => {
  const image = true;
  const loader = true;
  const status = "active";
  const userInfo = true;

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-6/12">
          <div className="w-full p-4 bg-[#6a5fdf] rounded-md text-[#d0d2d6]">
            {/* User Img */}
            <div className="flex justify-center items-center py-3">
              {image ? (
                <label
                  className="h-55 w-65 relative p-3 cursor-pointer overflow-hidden"
                  htmlFor="img"
                >
                  <img
                    className="object-cover w-full h-full"
                    src="/profile.jpeg"
                    alt=""
                  />
                  {!loader && (
                    <div className="bg-slate-500 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              ) : (
                <label
                  className="flex justify-center items-center flex-col h-55 w-65 cursor-pointer border border-dashed hover:border-red-500 border-[#d0d2d6] relative"
                  htmlFor="img"
                >
                  <span>
                    <FaImages />
                  </span>
                  <span>Select Image</span>
                  {loader && (
                    <div className="bg-slate-500 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              )}
              <input
                type="file"
                className="hidden"
                id="img"
                name="img"
              />
            </div>

            {/* User Info */}
            <div className="px-0 md:px-5 py-2">
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md relative">
                <span className="p-1.5 bg-yellow-500 rounded-sm hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2 cursor-pointer">
                  <FaEdit />
                </span>
                <div className="flex gap-2 ">
                  <span className="font-bold">Name :</span>
                  <span className="font-normal">Amir</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Email :</span>
                  <span className="font-normal">Amir@gmail.com</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Role :</span>
                  <span className="font-normal">Seller</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Status :</span>
                  <span className="font-normal">Active</span>
                </div>
                <div className="flex gap-2 items-center text-center">
                  <span className="font-bold">Payment Account :</span>
                  <p>
                    {status === "active" ? (
                      <span className="font-normal bg-green-500 text-white text-xs cursor-pointer ml-2 px-2 py-1 rounded">
                        Pending
                      </span>
                    ) : (
                      <span className="font-normal bg-blue-500 text-white text-xs cursor-pointer ml-2 px-2 py-1 rounded">
                        Click Active
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* inputs for Edit User By Click */}
            <div className="px-0 md:px-5 p-2">
              {!userInfo ? 
                <form>
                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="shop">Shop Name</label>
                    <input
                      placeholder="Shop Name"
                      type="text"
                      name="shop"
                      id="shop"
                      className="px-4 py-2 bg-[#6a5fdf] outline-none focus:border-indigo-200 border
                                border-slate-700 rounded-md text-[#d0d2d6]"/>
                  </div>
                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="division">Division Name</label>
                    <input
                      placeholder="Division Name"
                      type="text"
                      name="division"
                      id="division"
                      className="px-4 py-2 bg-[#6a5fdf] outline-none focus:border-indigo-200 border
                                border-slate-700 rounded-md text-[#d0d2d6]"/>
                  </div>
                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="district">District Name</label>
                    <input
                      placeholder="District Name"
                      type="text"
                      name="district"
                      id="district"
                      className="px-4 py-2 bg-[#6a5fdf] outline-none focus:border-indigo-200 border
                                border-slate-700 rounded-md text-[#d0d2d6]"/>
                  </div>
                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="subdis">Sub District Name</label>
                    <input
                      placeholder="Sub District"
                      type="text"
                      name="subdis"
                      id="subdis"
                      className="px-4 py-2 bg-[#6a5fdf] outline-none focus:border-indigo-200 border
                                border-slate-700 rounded-md text-[#d0d2d6]"/>
                  </div>

                   <div className='flex'>
                            <button className=" bg-red-500 hover:shadow-orange-500/40 hover:shadow-md text-white rounded-md px-7 py-2 mt-3 cursor-pointer">
                                Save Changes
                            </button>
                        </div>
                </form>:

                // Shop Info
                 <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md relative">
                <span className="p-1.5 bg-yellow-500 rounded-sm hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2 cursor-pointer">
                  <FaEdit />
                </span>
                <div className="flex gap-2 ">
                  <span className="font-bold">Shop Name :</span>
                  <span className="font-normal">Easy Shop</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Division :</span>
                  <span className="font-normal">Dhaka</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">District :</span>
                  <span className="font-normal">Rajbary</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Sup District :</span>
                  <span className="font-normal">Vola</span>
                </div>
                
              </div>

              }
            </div>
          </div>
        </div>
        
        {/* Change Pas Form */}
        <div className="w-full md:w-6/12">
            <div className="  w-full  pl-0 md:pl-7 mt-6 md:mt-0  ">
                <div className="bg-[#6a5fdf] rounded-md text-[#d0d2d6] p-4">
                    <h1 className="text-lg mb-3 font-semibold text-[#d0d2d6] ">Change Password</h1>
                 <form>
                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                      placeholder="email"
                      type="text"
                      name="email"
                      id="email"
                      className="px-4 py-2 bg-[#6a5fdf] outline-none focus:border-indigo-200 border
                                border-slate-700 rounded-md text-[#d0d2d6]"/>
                  </div>
                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="o-password">Old Password</label>
                    <input
                      placeholder="Old Passwor"
                      type="password"
                      name="o-password"
                      id="o-password"
                      className="px-4 py-2 bg-[#6a5fdf] outline-none focus:border-indigo-200 border
                                border-slate-700 rounded-md text-[#d0d2d6]"/>
                  </div>
                  <div className="flex flex-col w-full gap-1 mb-2">
                    <label htmlFor="n-password">New Password</label>
                    <input
                      placeholder="New Password"
                      type="password"
                      name="n-password"
                      id="n-password"
                      className="px-4 py-2 bg-[#6a5fdf] outline-none focus:border-indigo-200 border
                                border-slate-700 rounded-md text-[#d0d2d6]"/>
                  </div>
                 

                   <div className='flex'>
                            <button className=" bg-red-500 hover:shadow-orange-500/40 hover:shadow-md text-white rounded-md px-7 py-2 mt-3 cursor-pointer">
                                Save Changes
                            </button>
                        </div>
                </form>
</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
