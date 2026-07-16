import 'react';
import {FaEye, FaRegHeart, FaShoppingCart} from 'react-icons/fa'
import Ratings from './Ratings';


const FeatureProduct = () => {
    return (
        <div className='w-[85%] flex flex-wrap mx-auto py-11.5'>
            <div className='w-full'>
                 <div className='text-center flex justify-center items-center flex-col text-3xl text-slate-600 font-bold relative pb-11.25'>
                    <h2>Feature Products</h2>
                    <div className='w-25 h-0.5 bg-[#059473] mt-4'></div>
                 </div>
            </div>
            <div className='w-full grid grid-cols-4 max-md-lg-custom:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6'>
                {
                    [1,2,3,4,5,6].map((p,i)=>(
                        <div key={i} className='border border-slate-300 group transition-all duration-300 hover:shadow-md hover:-mt-3'>
                            <div className='overflow-hidden py-3 relative'>
                                <div className='flex justify-center items-center absolute text-white w-9.5 h-9.5 rounded-full bg-red-500 font-semibold text-xs left-2 top-2'>
                                    8%
                                </div>
                                <img className='max-sm:w-full w-[90%] mx-auto  h-60' src={`/frontend/images/products/${i+1}.webp`} alt="" />
                                <ul className='flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3'>
                                    <li className='w-9.5 h-9.5 cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-720 transition-all'>
                                        <FaRegHeart/>
                                    </li>
                                     <li className='w-9.5 h-9.5 cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-720 transition-all'>
                                        <FaEye/>
                                    </li>
                                     <li className='w-9.5 h-9.5 cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-720 transition-all'>
                                        <FaShoppingCart/>
                                    </li>
                                </ul>
                            </div>

                            <div className='py-3 text-slate-600 px-2'>
                                <h2 className='font-bold mb-2'>ProductName</h2>
                                <div className='flex justify-start items-start gap-3'>
                                    <span className='text-md font-semibold'>$666</span>
                                    <div className='flex'>
                                            <Ratings ratings={4.5}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FeatureProduct;