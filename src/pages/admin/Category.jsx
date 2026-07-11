import "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/layout/Pagination";
import { FaEdit, FaImage, FaTrash } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const Category = () => {
    const[currentPage,setCurrentPage]=useState(1)
    // eslint-disable-next-line no-unused-vars
    const[searchValue,setSearchValue]=useState('')
    const[parPage,setParPage]=useState(5)
    const[show,setShow]=useState(false)
    
    

  return (
    <div className="px-2 lg:px-7 pt-5">

        <div className="flex lg:hidden justify-between items-center mb-3 p-4 bg-[#6a5fdf] rounded-md">
            <h2 className="text-[#d0d2d6] font-semibold text-lg">Category</h2>
            <button onClick={()=>setShow(true)}
             className="bg-red-500 shadow-lg hover:bg-red-500/40 px-4 py-2 cursor-pointer text-white rounded-md text-sm">Add</button>
        </div>


      <div className="flex flex-wrap w-full">
        {/* table */}
        <div className="w-full lg:w-7/12">
          <div className="w-full bg-[#6a5fdf] p-4 rounded-md">

            {/* search top */}
            <div className="flex justify-between items-center">
              <select
                onChange={(e) => setParPage(parseInt(e.target.value))}
                className="py-2 px-4 rounded-md bg-[#6a5fdf] 
                border border-slate-700 focus:border-indigo-500 outline-none text-[#d0d2d6]"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
              <input
                className="px-4 py-2 bg-[#6a5fdf] outline-none focus:border-indigo-500 border
                border-slate-700 rounded-md text-[#d0d2d6]"
                type="text"
                placeholder="search"
              />
            </div>
            {/* table details */}
             <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left ">
              <thead className="text-sm uppercase text-[#d0d2d6] border-b border-slate-700">
                <tr>
                 <th scope='col' className="py-3 px-4">No</th>
                <th scope='col' className="py-3 px-4">Image</th>
                <th scope='col' className="py-3 px-4"> Name </th>
                <th scope='col' className="py-3 px-4">Actions</th>
               </tr>
              </thead>
              <tbody className="text-[#d0d2d6] ">
               
                 {
                  [1,2,3,4,5].map((d,i)=>(
                      <tr key={i}>
                      <td scope="row" className="py-1 px-4 font-normal whitespace-nowrap">{d}</td>
                      <td scope="row" className="py-1 px-4 font-normal whitespace-nowrap">
                        <img className="w-11.25 h-11.25" src="/1.png" alt="" />
                      </td>
                      <td scope="row" className="py-1 px-4 font-normal whitespace-nowrap">Tshirt</td>
                     
                      <td scope="row" className="py-1 px-4 font-normal whitespace-nowrap">
                       <div className="flex justify-start items-center gap-4">
                         <Link className="p-1.5 bg-yellow-600 rounded 
                          hover:shadow-lg hover:shadow-yellow-500/50">
                            <FaEdit/>
                        </Link>
                         <Link className="p-1.5 bg-red-600 rounded 
                          hover:shadow-lg hover:shadow-red-500/50">
                            <FaTrash/>
                        </Link>
                       </div>
                      </td>
                      </tr>
                  ))
                 }
              </tbody>
            </table>
             </div>
           {/* pagination */}
             <div className='flex justify-end w-full mt-4 bottom-4 right-4'>
                 <Pagination
                pageNumber={currentPage}
                setPageNumber={setCurrentPage}
                totalItem={50}
                parPage={parPage}
                showItem={3}
              />
             </div>
          </div>
        </div>

        {/* add category */}
        <div className={` w-85 lg:w-5/12  lg:relative lg:right-0 
        fixed ${show ?'right-0 ':'-right-85 '} z-50 top-0 transition-all duration-500`}>
          <div className="w-full pl-5 ">
            <div className="bg-[#6a5fdf] lg:rounded-md h-screen lg:h-auto px-3 py-2 text-[#d0d2d6]">
                 <div className="flex justify-between items-center mb-4">
                    <h1 className="w-full text-xl font-semibold text-center ">Add Category</h1>
                    
                    <div onClick={()=>setShow(false)} className="block lg:hidden cursor-pointer">
                        <IoMdCloseCircle className="text-3xl"/>
                    </div>
                 </div>

                 <form >
                    <div className="flex flex-col gap-1 mb-3 w-full">
                        <label htmlFor="name">Category Name</label>
                        <input 
                         className="px-4 py-2 bg-white outline-none focus:border-indigo-500 border
                         border-slate-700 rounded-md text-slate-700 placeholder:text-slate-700"
                        type="text" name="category_name" id="name" placeholder="Category Name"/>
                    </div>
                    <div>
                        <label className="flex flex-col justify-center items-center h-59.5 cursor-pointer border border-dashed hover:border-red-500 w-full border-[#d0d2d6]"
                        htmlFor="image" >
                            <span><FaImage/></span>
                            <span>Select Image</span>
                        </label>
                        <input type="file" name="image" id="image" className="hidden" />
                        <div>
                            <button className="w-full bg-red-500 hover:shadow-orange-500/40 hover:shadow-md text-white rounded-md px-7 py-2 mt-3 cursor-pointer">
                                Add Category
                            </button>
                        </div>
                    </div>
                 </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
