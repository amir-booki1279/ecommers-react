import "react";

const SellerOrderDetails = () => {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full bg-[#6a5fdf] p-4 rounded-md">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl text-[#d0d2d6]">Order Details</h2>
          <select
            className="py-2 px-4 rounded-md bg-[#6a5fdf] 
                border border-slate-700 focus:border-indigo-500 outline-none text-[#d0d2d6]"
          >
            <option value="">Pending</option>
            <option value="">Processing</option>
            <option value="">WareHouse</option>
            <option value="">Placed</option>
            <option value="">Cancelled</option>
          </select>
        </div>
        <div className="p-4">
          <div className="flex gap-2 text-lg text-[#d0d2d6]">
            <h2>#3454</h2>
            <span>3 Jan 2026</span>
          </div>

          <div className="flex flex-wrap">
            <div className="w-[30%]">
              <div className="pr-3 text-lg">
                <div className="flex flex-col gap-1 text-[#d0d2d6]">
                  <h2 className="pb-2 font-semibold">
                    Deliver To : WareHouse
                  </h2>
                  
                </div>
                <div className="flex justify-start items-center gap-3 text-[#d0d2d6]">
                  <h2>PayMent Status</h2>
                  <span className="text-base">Payd</span>
                </div>
                <span className="text-[#d0d2d6]">Price : $223</span>

                <div className="mt-4 flex flex-col gap-4 bg-[#8288ed] rounded-md p-2">
                  <div className="text-[#d0d2d6]">
                    <div className="flex gap-3 text-base">
                      <img
                        className="w-12.5 h-12.5 bg-white"
                        src="/Group 15.png"
                        alt=""
                      />
                      <div>
                        <h2>Product Name Here</h2>
                        <p>
                          <span>Brand :</span>
                          <span>Easy</span>
                          <span className="text-lg pl-2">
                            Quantity : 5
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-4 bg-[#8288ed] rounded-md p-2">
                  <div className="text-[#d0d2d6]">
                    <div className="flex gap-3 text-base">
                      <img
                        className="w-12.5 h-12.5 bg-white"
                        src="/Group 15.png"
                        alt=""
                      />
                      <div>
                        <h2>Product Name Here</h2>
                        <p>
                          <span>Brand :</span>
                          <span>Easy</span>
                          <span className="text-lg pl-2">
                            Quantity : 5
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-4 bg-[#8288ed] rounded-md p-2">
                  <div className="text-[#d0d2d6]">
                    <div className="flex gap-3 text-base">
                      <img
                        className="w-12.5 h-12.5 bg-white"
                        src="/Group 15.png"
                        alt=""
                      />
                      <div>
                        <h2>Product Name Here</h2>
                        <p>
                          <span>Brand :</span>
                          <span>Easy</span>
                          <span className="text-lg pl-2">
                            Quantity : 5
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerOrderDetails;
