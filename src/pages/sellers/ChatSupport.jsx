import "react";

const ChatSupport = () => {
  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full bg-[#6a5fdf] p-4 rounded-md h-[calc(100vh-140px)]">
        <div className="w-full h-full flex relative">
          <div className="w-full  md:pl-4 ">
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-3 ">
                <div className="relative">
                  <img
                    className="w-11.25 h-11.25 border-green-500 border-3 max-w-11.25 rounded-full object-cover"
                    src="/profile.jpeg"
                    alt=""
                  />
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full absolute right-0 bottom-0 "></div>
                </div>
                <h2 className="text-base text-white font-semibold">
                  Support
                </h2>
              </div>
            </div>

            <div className="py-4">
              <div className="bg-[#475569] h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-center gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%] ">
                    <div>
                      <img
                        className="w-9.5 h-9.5 border-2 object-cover border-white rounded-full max-w-9.5 p-1"
                        src="/profile.jpeg"
                        alt=""
                      />
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
                      <img
                        className="w-9.5 h-9.5 border-2 object-cover border-white rounded-full max-w-9.5 p-1"
                        src="/profile.jpeg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-center gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%] ">
                    <div>
                      <img
                        className="w-9.5 h-9.5 border-2 object-cover border-white rounded-full max-w-9.5 p-1"
                        src="/profile.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-center flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm">
                      <span>How Are You?</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="flex gap-3 items-center">
              <input
                className="w-full flex justify-between px-2 border border-slate-700 items-center py-1.5 focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6]"
                placeholder="Input your message"
                type="text"
              />
              <button className="shadow-lg bg-[#06b6d4] hover:shadow-cyan-500/50 font-semibold w-18.5 rounded-md h-9 text-white flex justify-center items-center">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSupport;
