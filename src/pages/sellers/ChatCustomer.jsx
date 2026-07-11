import "react";
import { useState } from "react";
import { FaList } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const ChatCustomer = () => {
  const [show, setShow] = useState(false);
  const customerId = 65;

  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full bg-[#6a5fdf] p-4 rounded-md h-[calc(100vh-140px)]">
        <div className="w-full h-full flex relative">
          <div
            className={`w-70 h-full absolute z-10 ${show ? "-left-4" : "-left-84"} md:left-0 md:relative transition-all `}>
            <div className="w-full h-[calc(100vh-177px)] bg-[#9e97e9] md:bg-transparent overflow-y-auto">
              <div className="flex justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white text-xl">
                <h2>Customers</h2>
                <span
                  onClick={() => setShow(!show)}
                  className="block cursor-pointer md:hidden"
                >
                  <IoMdClose />
                </span>
              </div>
              <div
                className={`h-15 flex justify-start gap-2 items-center text-white p-2 rounded-md cursor-pointer bg-[#8288ed]`}
              >
                <div className="relative">
                  <img
                    className="w-9.5 h-9.5 border-white border-3 max-w-9.5 rounded-full object-cover"
                    src="/profile.jpeg"
                    alt=""
                  />
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-start w-full flex-col">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-base font-semibold">Amir</h2>
                  </div>
                </div>
              </div>

              <div
                className={`h-15 flex justify-start gap-2 items-center text-white p-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    className="w-9.5 h-9.5 border-white border-3 max-w-9.5 rounded-full object-cover"
                    src="/profile.jpeg"
                    alt=""
                  />
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-start w-full flex-col">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-base font-semibold">Mrym</h2>
                  </div>
                </div>
              </div>

              <div
                className={`h-15 flex justify-start gap-2 items-center text-white p-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    className="w-9.5 h-9.5 border-white border-3 max-w-9.5 rounded-full object-cover"
                    src="/profile.jpeg"
                    alt=""
                  />
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>
                <div className="flex justify-center items-start w-full flex-col">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-base font-semibold">Omid</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[calc(100%-200px)] md:pl-4 ">
            <div className="flex justify-between items-center">
              {customerId && (
                <div className="flex justify-start items-center gap-3 ">
                  <div className="relative">
                    <img
                      className="w-11.25 h-11.25 border-green-500 border-3 max-w-11.25 rounded-full object-cover"
                      src="/profile.jpeg"
                      alt=""
                    />
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full absolute right-0 bottom-0 "></div>
                  </div>
                  <h2 className="text-base text-white font-semibold">Amir</h2>
                </div>
              )}
              <div onClick={()=>setShow(!show)} className="w-9 flex md:hidden h-9 rounded-sm bg-blue-500 shadow-lg hover:shadow-blue-500/50 justify-center items-center cursor-pointer text-white">
                <span>
                  <FaList />
                </span>
              </div>
            </div>

           <div className="py-4">
                <div className="bg-[#475569] h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">
                <div className="w-full flex justify-start items-center">
                    <div className="flex justify-start items-center gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%] ">
                        <div>
                            <img className="w-9.5 h-9.5 border-2 object-cover border-white rounded-full max-w-9.5 p-1" src="/profile.jpeg" alt="" />
                        </div>
                        <div className="flex justify-center items-center flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm">
                            <span>How Are You?</span>
                        </div>
                    </div>
                </div>
                 <div className="w-full flex justify-end items-center">
                    <div className="flex justify-start items-center gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%] ">
                        
                        <div className="flex justify-center items-center flex-col w-full bg-red-500 shadow-lg shadow-red-500/50 text-white py-1 px-2 rounded-sm">
                            <span>How Are You?</span>
                        </div>
                        <div>
                            <img className="w-9.5 h-9.5 border-2 object-cover border-white rounded-full max-w-9.5 p-1" src="/profile.jpeg" alt="" />
                        </div>
                    </div>
                </div>
                 <div className="w-full flex justify-start items-center">
                    <div className="flex justify-start items-center gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%] ">
                        <div>
                            <img className="w-9.5 h-9.5 border-2 object-cover border-white rounded-full max-w-9.5 p-1" src="/profile.jpeg" alt="" />
                        </div>
                        <div className="flex justify-center items-center flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm">
                            <span>How Are You?</span>
                        </div>
                    </div>
                </div>
                </div>
           </div>
           <form className= "flex gap-3 items-center">
                <input className="w-full flex justify-between px-2 border border-slate-700 items-center py-1.5 focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6]" placeholder="Input your message" type="text" />
                <button className="shadow-lg bg-[#06b6d4] hover:shadow-cyan-500/50 font-semibold w-18.5 rounded-md h-9 text-white flex justify-center items-center">Send</button>
           </form>




          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCustomer;
