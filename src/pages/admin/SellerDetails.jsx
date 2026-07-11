import 'react';

const SellerDetails = () => {
    return (
        <div className='px-2 lg:px-7 pt-5'>
                <h1 className='text-[20px] font-bold mb-3 '> Seller Details</h1>

            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>

                <div className='w-full flex flex-wrap text-[#d0d2d6]'>
                    <div className='w-3/12 flex justify-center items-center py-3'>
                        <div>
                            <img className='w-full h-57.5' src="/profile.jpeg" alt="" />
                        </div>
                    </div>
                    <div className='w-4/12'>
                        <div className='px-0 md:px-5 py-2'>
                            <div className='py-2 text-lg'>
                               <h2>Basic Info</h2>
                            </div>

                            <div className='flex  justify-between text-sm flex-col gap-2 p-4  bg-[#9e97e9] rounded-md'>
                            <div className="flex gap-2 font-bold text-black">
                                    <span>Name :</span>
                                    <span>Amir</span>
                            </div>
                            <div className="flex gap-2 font-bold text-black">
                                    <span>Email :</span>
                                    <span>Amir@gmail.com</span>
                            </div>
                            <div className="flex gap-2 font-bold text-black">
                                    <span>Role :</span>
                                    <span>Seller</span>
                            </div>
                            <div className="flex gap-2 font-bold text-black">
                                    <span>Status :</span>
                                    <span>Active</span>
                            </div>
                            <div className="flex gap-2 font-bold text-black">
                                    <span>Payment Status :</span>
                                    <span>Active</span>
                            </div>



                            </div>
                        </div>
                    </div>

                     <div className='w-4/12'>
                        <div className='px-0 md:px-5 py-2'>
                            <div className='py-2 text-lg'>
                               <h2>Addres</h2>
                            </div>

                            <div className='flex  justify-between text-sm flex-col gap-2 p-4  bg-[#9e97e9] rounded-md'>
                            <div className="flex gap-2 font-bold text-black">
                                    <span>Shop Name :</span>
                                    <span>Easy Shop</span>
                            </div>
                            <div className="flex gap-2 font-bold text-black">
                                    <span>Division :</span>
                                    <span>Dhaka</span>
                            </div>
                            <div className="flex gap-2 font-bold text-black">
                                    <span>District :</span>
                                    <span>Dhaka</span>
                            </div>
                            <div className="flex gap-2 font-bold text-black">
                                    <span>State :</span>
                                    <span>Palton</span>
                            </div>
                            



                            </div>
                        </div>
                    </div>

                   

                </div>

                <div>
                    <form >
                        <div className='flex gap-4 py-3'>
                            <select className="py-2 px-4 rounded-md bg-[#6a5fdf] 
                border border-slate-700 focus:border-indigo-500 outline-none text-[#d0d2d6]">

                    <option value="">--Select Status---</option>
                    <option value="">Active</option>
                    <option value="">Deactive</option>

                </select>
                <button className="w-42.5 bg-red-500 hover:shadow-orange-500/40 hover:shadow-md text-white rounded-md px-7 py-2  cursor-pointer">
                                Submit
                            </button>
                </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SellerDetails;