/* eslint-disable react-hooks/set-state-in-effect */
import "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../../../services/navigations";
import { BiLogOutCircle } from "react-icons/bi";

function SideBar({showSideBar,setShowSideBar}) {
  const [allNav, setAllNav] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const navs = getNav("seller");
    setAllNav(navs);
  }, []);

  return (
    <div className="">
      <div 
      className={`fixed duration-200 ${!showSideBar?
                        'invisible':
                        'visible'} w-screen h-screen top-0 left-0 bg-[#8cbce780] z-10 `}
      onClick={()=>setShowSideBar(false)}>

      </div>

      <div
        className={`w-65 fixed z-50 top-0 h-screen bg-[#e6e7fb]
      shadow-[0_0_15px_0_rgba(34_41_47_/5%)] transition-all ${showSideBar?'left-0':'-left-65 lg:left-0'}`}>
        <div
          className="h-18 flex justify-center items-center 
        text-xl lg:text-2xl font-bold  text-center">
          <Link to="/admin-dashboard" className="w-45 h-12.5">
            EASY SHOP
          </Link>
        </div>

        <div className="px-4">
          <ul>
            {allNav.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`${
                    pathname === item.path
                      ? "bg-blue-700 shadow-indigo-500/50 text-white duration-500"
                      : "text-[#030811] font-bold duration-200"
                  } px-3 py-2.5 rounded-sm
                                    flex justify-start items-center gap-3 hover:pl-4 transition-all w-full
                                    mb-1 `}>
                  <span>{item.icon}</span>
                  <span className="font-semibold">{item.title}</span>
                </Link>
              </li>
            ))}
                <li>
                    <button className="text-[#030811] font-bold duration-200 px-3 py-2.5 rounded-sm
                                flex justify-start items-center gap-3 hover:pl-4 transition-all w-full
                                mb-1 cursor-pointer">
                        <span><BiLogOutCircle/></span>
                        <span>Logout</span>
                    </button>
                </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
