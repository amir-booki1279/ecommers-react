import "react";
import {
  MdCurrencyExchange,
  MdProductionQuantityLimits,
} from "react-icons/md";

import { FaCartShopping } from "react-icons/fa6";

import { forwardRef } from "react";

import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const Payment = () => {
  const Row = ({ index, style }) => {
    return (
      <div
        style={style}
        className="flex text-sm text-white font-medium"
      >
        <div className="w-[25%] p-2 whitespace-nowrap">
          {index + 1}
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap">$555</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <span className="p-1 bg-slate-300 text-blue-500 rounded-md text-sm">
            Pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          25 Dec 2026
        </div>
        
      </div>
    );
  };

  return (
    <div className="px-2 md:px-7 py-5">
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        lg:grid-cols-4 gap-7 mb-5"
      >
        <div className="flex justify-between items-center p-7 bg-[#fae8e8] rounded-md gap-3">
          <div className="flex flex-col justify-start items-center text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">$3435</h2>
            <span className="text-base font-medium">Total Sales</span>
          </div>
          <div
            className="w-10 h-11.5 rounded-full bg-[#fa0305] 
                            flex justify-center items-center text-xl "
          >
            <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-7 bg-[#fde2ff] rounded-md gap-3">
          <div className="flex flex-col justify-start items-center text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">$600</h2>
            <span className="text-base font-medium">
              Availble Amount
            </span>
          </div>
          <div
            className="w-10 h-11.5 rounded-full bg-[#760077] 
                            flex justify-center items-center text-xl "
          >
            <MdProductionQuantityLimits className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-7 bg-[#e9feea] rounded-md gap-3">
          <div className="flex flex-col justify-start items-center text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">$0</h2>
            <span className="text-base font-medium">
              Withdrawal Amount
            </span>
          </div>
          <div
            className="w-10 h-11.5 rounded-full bg-[#038000] 
                            flex justify-center items-center text-xl "
          >
            <FaCartShopping className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-7 bg-[#ecebff] rounded-md gap-3">
          <div className="flex flex-col justify-start items-center text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">1</h2>
            <span className="text-base font-medium">
              Pending Account
            </span>
          </div>
          <div
            className="w-10 h-11.5 rounded-full bg-[#0200f8] 
                            flex justify-center items-center text-xl "
          >
            <FaCartShopping className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 pb-5">
        <div className="w-full p-4 rounded-md  text-[#d0d2d6] bg-[#6a5fdf] ">
          <h2 className="text-lg font-bold">Send Request</h2>
          <div className="pt-5 mb-5">
            <form>
              <div className="flex gap-3 flex-wrap">
                <input
                  min="0"
                  type="number"
                  className="px-4 py-2 bg-[#6a5fdf] outline-none focus:border-indigo-200 border md:w-[79%]
                border-slate-700 rounded-md text-[#]"
                  name="amount"
                  placeholder="0"
                />
                <div className="flex">
                  <button className=" bg-red-500 hover:shadow-orange-500/40 hover:shadow-md text-white rounded-md px-7 py-2  cursor-pointer">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div>
            <h2 className="text-lg font-bold pb-4">Pending Request</h2>
            <div className="w-full">
              <div className="w-full overflow-x-auto">
                <div className="flex bg-[#a7a3de] text-sm min-w-85 font-bold rounded-md">
                  <div className="w-[25%] p-2">No</div>
                  <div className="w-[25%] p-2">Amount</div>
                  <div className="w-[25%] p-2">Status</div>
                  <div className="w-[25%] p-2">Date</div>
                 
                </div>

                {
                  <List
                    style={{ minWidth: "340px" }}
                    className="List"
                    height={350}
                    itemCount={50}
                    itemSize={35}
                    outerElementType={outerElementType}
                  >
                    {Row}
                  </List>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-4 rounded-md  text-[#d0d2d6] bg-[#6a5fdf] ">
            <div>
            <h2 className="text-lg pb-4 font-bold">Seccess Withdrawal</h2>
            <div className="w-full">
              <div className="w-full overflow-x-auto">
                <div className="flex bg-[#a7a3de] text-sm min-w-85 font-bold rounded-md">
                  <div className="w-[25%] p-2">No</div>
                  <div className="w-[25%] p-2">Amount</div>
                  <div className="w-[25%] p-2">Status</div>
                  <div className="w-[25%] p-2">Date</div>
                 
                </div>

                {
                  <List
                    style={{ minWidth: "340px" }}
                    className="List"
                    height={350}
                    itemCount={50}
                    itemSize={35}
                    outerElementType={outerElementType}
                  >
                    {Row}
                  </List>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
