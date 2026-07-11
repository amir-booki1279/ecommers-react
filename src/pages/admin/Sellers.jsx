import  'react';
import { useState } from 'react'

import { Link } from 'react-router-dom'
import Pagination from '../../components/layout/Pagination'
import { FaEye } from "react-icons/fa";


const Sellers = () => {

    const[currentPage,setCurrentPage]=useState(1)
    // eslint-disable-next-line no-unused-vars
    const[searchValue,setSearchValue]=useState('')
    const[parPage,setParPage]=useState(5)
    // const[show,setShow]=useState(false)

    return (
        <div className='px-4 lg:px-7 pt-5'>
                <h1 className='text-[20px] font-bold mb-3 '> Seller</h1>

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
                <th scope='col' className="py-3 px-4">Shop Name </th>
                <th scope='col' className="py-3 px-4">Payment Status </th>
                <th scope='col' className="py-3 px-4">Email </th>
                <th scope='col' className="py-3 px-4">Division </th>
                <th scope='col' className="py-3 px-4">Discirt </th>
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
                      <td scope="row" className="py-1 px-4 font-normal whitespace-nowrap">Easy Shop</td>
                      <td scope="row" className="py-1 px-4 font-normal whitespace-nowrap">Pending</td>
                      <td scope="row" className="py-1 px-4 font-normal whitespace-nowrap">amir@gmail.com</td>
                      <td scope="row" className="py-1 px-4 font-normal whitespace-nowrap">Dhaka</td>
                      <td scope="row" className="py-1 px-4 font-normal whitespace-nowrap">Balten</td>
                    

                     
                      <td scope="row" className="py-1 px-4 font-normal whitespace-nowrap">
                       <div className="flex justify-start items-center gap-4">
                         <Link className="p-1.5 bg-green-600 rounded 
                          hover:shadow-lg hover:shadow-green-500/50">
                            <FaEye/>
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
    );
};

export default Sellers;