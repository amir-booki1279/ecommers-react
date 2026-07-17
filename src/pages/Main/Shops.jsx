import "react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { Range } from "react-range";
import { Link } from "react-router-dom";
import Products from "../../components/home/Products";
import {BsFillGridFill} from 'react-icons/bs'
import { FaThList } from "react-icons/fa";
import ShopProduct from "../../components/product/ShopProduct";

const Shops = () => {
  const [filter, setFilter] = useState(true);
  const [state, setState] = useState({values:[50,1500]});
  
  // eslint-disable-next-line no-unused-vars
  const [rating, setRating] = useState('');
  const [style, setStyle] = useState('grid');



  const categories = [
    "Mobiles",
    "Laptops",
    "Speakers",
    "Top Wear",
    "FootWear",
    "Watches",
    "Home Decor",
    "Smart Watches",
  ]

  return (
    <div>
      <section className='bg-[url("/frontend/images/banner/shop.png")] h-55 mt-6 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute z-0 pointer-events-none left-0 top-0 w-full h-full bg-black/50"></div>
        <div className="w-[85%]  max-md-custom:w-[80%] max-sm-custom:w-[90%] max-lg-custom:w-[90%] h-full mx-auto relative z-999 ">
          <div className="flex flex-col text-white justify-center items-center gap-1 w-full z-999 h-full relative">
            <h2 className="text-3xl font-bold ">Shop Page</h2>
            <div className="flex justify-center items-center gap-2 text-2xl w-full">
              <Link to={"/"}>Home</Link>
              <span className="pt-1">
                <IoIosArrowForward />
              </span>
              <span>Shop</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="w-[85%]  max-md-custom:w-[80%] max-sm-custom:w-[90%] max-lg-custom:w-[90%] h-full mx-auto ">
          <div
            className={`max-md-lg-custom:block hidden ${!filter ? "mb-6" : "mb-0"}`}>
            <button
              onClick={() => setFilter(!filter)}
              className="text-center w-full py-2 px-3 bg-indigo-500 text-white">
              Filter Product
            </button>
          </div>

          <div className="w-full flex flex-wrap ">
            {/* Left Section = Filters */}
            <div
              className={`w-3/12 max-md-lg-custom:w-4/12 max-md-custom:w-full pr-8 ${filter ? "max-md-custom:h-0 max-md-custom:overflow-hidden max-md-custom:mb-6" : "max-md-custom:h-auto max-md-custom:overflow-auto max-md-custom:mb-0"}`}>
              <h2 className="text-3xl font-bold mb-3 text-slate-600">Category</h2>
              <div className="py-2">
                   {
                    categories.map((c,i)=>(
                        <div key={i} className="flex justify-start items-center gap-2 py-1">
                             <input type="checkbox" id={c} />
                             <label className="text-slate-600 block cursor-pointer" htmlFor={c}>{c}</label>
                        </div>
                    ))
                   }
              </div>
                {/* Price */}
               <div className="py-2 flex flex-col gap-5">
              <h2 className="text-3xl font-bold mb-3 text-slate-600">Price</h2>

                 <Range
                  step={5}
                  min={50}
                  max={1500}
                  values={(state.values)}
                  onChange={(values)=>setState({ values})}
                  renderTrack={({props,children})=>(
                    <div {...props} className="w-full h-1.5 bg-slate-200 rounded-full cursor-pointer">
                        {children}
                    </div>
                  )}
                  renderThumb={({props})=>(
                    <div className="w-3.75 h-3.75 bg-[#059473] rounded-full " {...props}>

                    </div>
                  )}
                 />
                  <span className="text-slate-800 font-bold text-lg">${Math.floor(state.values[0])} - ${Math.floor(state.values[1])}</span>
               </div>
               {/* Rating */}
                <div className="py-3 flex flex-col gap-4">
              <h2 className="text-3xl font-bold mb-3 text-slate-600">Rating</h2>
              <div className="flex flex-col gap-3">
                  <div onClick={()=>setRating(5)} className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer">
                        <span><AiFillStar/></span>
                        <span><AiFillStar/></span>
                        <span><AiFillStar/></span>
                        <span><AiFillStar/></span>
                        <span><AiFillStar/></span>
                  </div>
                  <div onClick={()=>setRating(4)} className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer">
                        <span><AiFillStar/></span>
                        <span><AiFillStar/></span>
                        <span><AiFillStar/></span>
                        <span><AiFillStar/></span>
                        <span><CiStar/></span>
                  </div>
                  <div onClick={()=>setRating(3)} className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer">
                        <span><AiFillStar/></span>
                        <span><AiFillStar/></span>
                        <span><AiFillStar/></span>
                        <span><CiStar/></span>
                        <span><CiStar/></span>


                  </div>
                  <div onClick={()=>setRating(2)} className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer">
                        <span><AiFillStar/></span>
                        <span><AiFillStar/></span>
                        <span><CiStar/></span>
                        <span><CiStar/></span>
                        <span><CiStar/></span>
                        
                  </div>
                  <div onClick={()=>setRating(1)} className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer">
                        <span><AiFillStar/></span>
                        <span><CiStar/></span>
                        <span><CiStar/></span>
                        <span><CiStar/></span>
                        <span><CiStar/></span>
                        
                  </div>
                  <div onClick={()=>setRating(5)} className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer">
                        <span><CiStar/></span>
                        <span><CiStar/></span>
                        <span><CiStar/></span>
                        <span><CiStar/></span>
                        <span><CiStar/></span>
                         
                 </div>      
              </div>
             </div>  
             {/* Latest Product*/}
             <div className="py-3 flex flex-col gap-4 max-md-custom:hidden">
              <Products title={'Latest Product'}/>
             </div>

            </div>

            {/* Right Section Show Products */}
            <div className="w-9/12 max-md-lg-custom:w-8/12 max-md-custom:w-full">
                <div className="pl-8 max-md-custom:pl-0">
                    <div className="py-4 bg-white mb-10 px-3 rounded-md flex justify-between items-center border border-slate-200">
                            <h2 className="text-lg font-medium to-slate-600">14 Products</h2>
                            <div className="flex justify-center items-center gap-3">
                                <select className="p-1 border outline-0 text-slate-600 font-semibold border-slate-200" name="" id="">
                                    <option value=''>Sort By</option>
                                    <option value='low-to-high'>Low To High Price</option>
                                    <option value='high-to-low'>High To Low Price </option>

                                </select>
                                <div className="flex justify-center items-start gap-4 max-md-lg-custom:hidden">
                                    <div onClick={()=>setStyle('grid')} className={`p-2 ${style==='grid' && 'bg-slate-300'} text-slate-600 hover:bg-slate-300 rounded-sm cursor-pointer`}>
                                        <BsFillGridFill/>
                                    </div>
                                    <div onClick={()=>setStyle('list')} className={`p-2 ${style==='list' && 'bg-slate-300'} text-slate-600 hover:bg-slate-300 rounded-sm cursor-pointer`}>
                                        <FaThList/>
                                    </div>

                                </div>
                            </div>
                    </div>
                    {/* List Items */}
                    <div className="pb-8">
                        <ShopProduct style={style}/>
                    </div>
                </div>
            </div>


          </div>
        </div>

      </section>
    </div>
  );
};

export default Shops;
