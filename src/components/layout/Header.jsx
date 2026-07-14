import "react";
import { useState } from "react";
import { BiMobile } from "react-icons/bi";
import {
  FaArrowDown,
  FaFacebook,
  FaHeart,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
  FaUser,
  FaUserLock,
} from "react-icons/fa";
import { FaCartShopping, FaGithub, FaList } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const user = true;
  const [showSideBar, setShowSideBar] = useState(true);
  const [categoryShow, setCategoryShow] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState("");


  const wishList_count = 5;
  const categories = [
    "Mobiles",
    "Laptops",
    "Speakers",
    "Top Wear",
    "FootWear",
    "Watches",
    "Home Decor",
    "Smart Watches",
  ];

  return (
    <div className="bg-white w-full">
      {/* Header Top */}
      <div className=" bg-[#caddff] max-md-lg-custom:hidden">
        <div className="w-[85%] lg:w-[90%] mx-auto ">
          <div className="flex justify-between items-center text-slate-500  h-12.5">
            {/* Email & Phone Number */}
            <ul className="flex justify-start items-center gap-3 text-black font-semibold">
              <li className="flex justify-start items-center gap-3 after:h-4.5 after:w-px after:bg-[#afafaf]  text-sm">
                <span>
                  <MdEmail />
                </span>
                <span>Amir@gmail.com</span>
              </li>
              <li className="flex justify-start items-center gap-3 ">
                <span>
                  <BiMobile />
                </span>
                <span>+989371414035</span>
              </li>
            </ul>
            <div className="flex justify-center items-center gap-7 ">
              {/* Social Media */}

              <div className="flex justify-start text-black items-center gap-4.5">
                <Link className="text-lg">
                  <FaFacebook />
                </Link>
                <Link className="text-lg">
                  <FaTwitter />
                </Link>
                <Link className="text-lg">
                  <FaLinkedin />
                </Link>
                <Link className="text-lg">
                  <FaGithub />
                </Link>
              </div>
              {/* Language */}
              <div className="flex justify-center items-center group relative">
                <span
                  className=" flex gap-6 justify-center items-center after:h-4.5 after:w-px after:bg-slate-500
                        before:h-4.5 before:w-px before:bg-slate-500 cursor-pointer"
                >
                  <img src="/frontend/images/language.png" alt="" />
                </span>

                {/* Hover Box Show */}
                <div className="bg-black transition-all invisible group-hover:visible text-white absolute top-7 left-0 w-25 justify-center items-center flex flex-col z-20   rounded-md">
                  <span className="hover:bg-red-500 inline-block w-full py-1 text-center hover:text-black cursor-pointer">
                    English
                  </span>
                  <span className="hover:bg-red-500 inline-block w-full py-1 text-center hover:text-black cursor-pointer">
                    Persian
                  </span>
                </div>
              </div>
              {/* User Login & Info */}
              <Link>
                {user ? (
                  <div className="text-black flex justify-center items-center gap-2">
                    <span>
                      <FaUser />
                    </span>
                    <span className="font-bold">Amir</span>
                  </div>
                ) : (
                  <div className="flex text-black justify-center items-center gap-2">
                    <span>
                      <FaUserLock />
                    </span>
                    <span className="font-semibold">Login</span>
                  </div>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Header Bottom */}
      <div className="bg-white">
        <div className="w-[85%] max-lg-custom:w-[90%] mx-auto ">
          <div className="w-full h-20 max-md-lg-custom:h-25 flex justify-between items-center flex-wrap">
            {/* Logo */}
            <div className="w-3/12 max-md-lg-custom:w-full max-md-lg-custom:pt-4">
              <div className="flex w-full justify-between items-center">
                <Link to={"/"}>
                  <img src="/images/logo.png" alt="" />
                </Link>

                <div
                  onClick={() => setShowSideBar(false)}
                  className="justify-center items-center w-7.5 h-7.5 rounded-sm bg-white border border-slate-700 cursor-pointer hidden max-xl-custom:hidden max-lg-custom:hidden max-md-lg-custom:flex"
                >
                  <span>
                    <FaList />
                  </span>
                </div>
              </div>
            </div>

            {/* Menu Section */}
            <div className="w-9/12 max-md-lg-custom:w-full">
              <div className="flex justify-between max-md-lg-custom:justify-center items-center flex-wrap pl-8">
                <ul className="flex justify-start items-start gap-8 text-sm font-bold uppercase max-md-lg-custom:hidden">
                  <li>
                    <Link
                      className={`p-2 block ${pathname === "/" ? "text-[#059473]" : "text-slate-600"}`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${pathname === "/shop" ? "text-[#059473]" : "text-slate-600"}`}
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${pathname === "/blog" ? "text-[#059473]" : "text-slate-600"}`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${pathname === "/about-us" ? "text-[#059473]" : "text-slate-600"}`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${pathname === "/contact-us" ? "text-[#059473]" : "text-slate-600"}`}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>

                {/* WishList And Cart */}
                <div className="flex max-md-lg-custom:hidden justify-center items-center gap-5">
                  <div className="relative flex justify-center items-center cursor-pointer w-8.75 h-8.75 rounded-md bg-[#e2e2e2]">
                    <span className="text-xl text-green-500">
                      <FaHeart />
                    </span>
                    <div className="w-5 h-5 absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-0.75 -right-1.25">
                      {wishList_count}
                    </div>
                  </div>
                  <div className="relative flex justify-center items-center cursor-pointer w-8.75 h-8.75 rounded-md bg-[#e2e2e2]">
                    <span className="text-xl text-green-500">
                      <FaCartShopping />
                    </span>
                    <div className="w-5 h-5 absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-0.75 -right-1.25">
                      {wishList_count}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Mobile Section */}
        <div className="hidden max-md-lg-custom:block">
          <div
            onClick={() => setShowSideBar(true)}
            className={`fixed duration-200 transition-all ${showSideBar ? "invisible" : "visible"} hidden max-md-lg-custom:block w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 z-20`}
          ></div>
          <div
            className={`w-75 z-999 transition-all duration-200 fixed ${showSideBar ? "-left-75" : "left-0 top-0"} overflow-y-auto bg-white h-screen py-6 px-8`}
          >
            <div className="flex justify-start flex-col gap-6">
              {/* Logo */}

              <Link to={"/"}>
                <img src="/images/logo.png" alt="" />
              </Link>
              {/* Language and User Login */}
              <div className="flex justify-start items-center gap-10">
                {/* Language Part */}

                <div className="flex justify-center items-center group relative">
                  <span
                    className=" flex gap-2 justify-center items-center after:h-4.5 after:w-px after:bg-slate-500
                    after:ml-3.5 cursor-pointer"
                  >
                    <img src="/frontend/images/language.png" alt="" />
                    <span className="text-[7px]">
                      <FaArrowDown />
                    </span>
                  </span>

                  {/* Hover Box Show */}
                  <div className="bg-black transition-all invisible group-hover:visible text-white absolute top-7 left-0 w-25 justify-center items-center flex flex-col z-20   rounded-md">
                    <span className="hover:bg-red-500 inline-block w-full py-1 text-center hover:text-black cursor-pointer">
                      English
                    </span>
                    <span className="hover:bg-red-500 inline-block w-full py-1 text-center hover:text-black cursor-pointer">
                      Persian
                    </span>
                  </div>
                </div>
                {/* Login User Part */}
                <Link>
                  {user ? (
                    <div className="text-black flex justify-center items-center gap-2">
                      <span>
                        <FaUser />
                      </span>
                      <span className="font-bold">Amir</span>
                    </div>
                  ) : (
                    <div className="flex text-black justify-center items-center gap-2">
                      <span>
                        <FaUserLock />
                      </span>
                      <span className="font-semibold">Login</span>
                    </div>
                  )}
                </Link>
              </div>
              {/* Menu Part */}
              <ul className="flex flex-col justify-start items-start  text-sm font-bold uppercase ">
                <li>
                  <Link
                    className={`py-2 block ${pathname === "/" ? "text-[#059473]" : "text-slate-600"}`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={`py-2 block ${pathname === "/shop" ? "text-[#059473]" : "text-slate-600"}`}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    className={`py-2 block ${pathname === "/blog" ? "text-[#059473]" : "text-slate-600"}`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className={`py-2 block ${pathname === "/about-us" ? "text-[#059473]" : "text-slate-600"}`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className={`py-2 block ${pathname === "/contact-us" ? "text-[#059473]" : "text-slate-600"}`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              {/* Sotial Icons */}
              <div className="flex justify-start text-black items-center gap-4.5">
                <Link className="text-lg">
                  <FaFacebook />
                </Link>
                <Link className="text-lg">
                  <FaTwitter />
                </Link>
                <Link className="text-lg">
                  <FaLinkedin />
                </Link>
                <Link className="text-lg">
                  <FaGithub />
                </Link>
              </div>
              {/* Email & Phone Number */}
              <div className="w-full flex justify-end max-md-lg-custom:justify-start gap-3 items-center">
                <div className="w-12 h-12 rounded-full flex bg-[#f1eeee] justify-center items-center">
                  <span>
                    <FaPhoneAlt />
                  </span>
                </div>
                <div className="flex justify-end flex-col gap-1">
                  <h2 className="text-sm font-medium text-slate-700">
                    +989371414035
                  </h2>
                  <span className="text-xs">Support 24/7</span>
                </div>
              </div>

              <ul className="flex flex-col justify-start items-start gap-3 text-[#1c1c1c]">
                <li className="flex justify-start items-center gap-2 text-sm">
                  <span>
                    <MdEmail />
                  </span>
                  <span>Amir@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Category And Search Section */}
        <div className="w-[85%] max-lg:w-[90%] mx-auto">
          <div className="flex w-full flex-wrap max-md-lg-custom:gap-8">
            {/* Button Category All Part */}
            <div className="w-3/12 max-md-lg-custom:w-full">
              <div className="bg-white relative">
                <div
                  onClick={() => setCategoryShow(!categoryShow)}
                  className="h-12.5 bg-[#059473] text-white flex justify-center max-md-lg-custom:justify-between max-md-lg-custom:px-6 items-center gap-3 font-bold text-base cursor-pointer"
                >
                  <div className="flex justify-center items-center gap-3">
                    <span>
                      <FaList />
                    </span>
                    <span>All Category</span>
                  </div>
                  <span className="pt-1">
                    <IoIosArrowDown />
                  </span>
                </div>
                {/* Show Categories By onClick */}
                <div
                  className={`${categoryShow ? "h-0" : "h-100"} overflow-hidden transition-all max-md-lg-custom:relative duration-500 absolute z-999 bg-[#dbf3ed] w-full border-x border-[#dbf3ed]`}
                >
                  <ul className="py-2 text-slate-600 font-medium">
                    {categories.map((c, i) => (
                      <li
                        key={i}
                        className="flex justify-start items-center gap-2 px-6 py-1.5"
                      >
                        <Link className="text-sm block">{c}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Search Part */}
            <div className="w-9/12 pl-8 max-md-lg-custom:pl-0 max-md-lg-custom:w-full">
              <div className="flex flex-wrap justify-between w-full items-center max-md-lg-custom:gap-6">
                <div className="w-8/12 max-md-lg-custom:w-full">
                  <div className="flex h-12.5 border border-slate-400 relative items-center gap-6">
                    <div
                      className="relative after:absolute after:h-6.25 after:w-px 
                            after:bg-[#afafaf] after:-right-3.75 max-md-custom:hidden">
                      <select
                        onChange={(e)=>setCategory(e.target.value)}
                        className="w-37.5 text-slate-600 font-semibold bg-transparent px-2 h-full outline-none"
                        name=""
                        id="">
                        <option value="">Select Category</option>
                        {categories.map((c, i) => (
                          <option
                            className="text-sm text-slate-600 font-semibold"
                            key={i}
                            value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                    <input placeholder="What do yor need?" className="w-full bg-transparent relative outline-0 px-3 text-slate-500 h-full" type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
                    <button className="absolute right-0 px-8 h-full text-white uppercase font-semibold bg-[#059473] cursor-pointer">
                        Search
                    </button>
                  </div>
                </div>
                <div  className="w-4/12 pl-2 max-md-lg-custom:pl-0 max-md-lg-custom:hidden block">
                             <div className="w-full flex justify-end max-md-lg-custom:justify-start gap-3 items-center">
                <div className="w-12 h-12 rounded-full flex bg-[#f1eeee] justify-center items-center">
                  <span>
                    <FaPhoneAlt />
                  </span>
                </div>
                <div className="flex justify-end flex-col gap-1">
                  <h2 className="text-md font-medium text-slate-700">
                    +989371414035
                  </h2>
                  <span className="text-sm">Support 24/7</span>
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

export default Header;
