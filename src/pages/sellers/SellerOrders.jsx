/* eslint-disable no-unused-vars */
import "react";
import Search from "../../components/Admin/Search";
import { useState } from "react";
import { FaEdit, FaEye, FaImage, FaTrash } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import Img1 from "../../assets/shirt/shirt2.png";
import Pagination from "../../components/layout/Pagination";


const SellerOrders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);


  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="w-full text-xl font-semibold text-start mb-3 ">
        Orders
      </h1>

      <div className="w-full bg-[#6a5fdf] p-4 rounded-md">
        <Search setParPage={setParPage} />
           <div className="relative overflow-x-auto mt-5">
            <table className="w-full text-sm text-left ">
              <thead className="text-sm uppercase text-[#d0d2d6] border-b border-slate-700">
                <tr>
                <th scope='col' className="py-3 px-4"> OrderId </th>
                <th scope='col' className="py-3 px-4"> Price </th>
                <th scope='col' className="py-3 px-4"> PaymentStatus </th>
                <th scope='col' className="py-3 px-4"> OrderStatus </th>
                <th scope='col' className="py-3 px-4">Actions</th>
               </tr>
              </thead>
              <tbody className="text-[#d0d2d6] ">
               
                 {
                  [1,2,3,4,5].map((d,i)=>(
                      <tr key={i}>

                      <td scope="row" className="py-1 px-4 font-normal whitespace-nowrap">#1557</td>
                      <td scope="row" className="py-1 px-4 font-normal whitespace-nowrap">$780</td>
                      <td scope="row" className="py-1 px-4 font-normal whitespace-nowrap">Pending</td>
                      <td scope="row" className="py-1 px-4 font-normal whitespace-nowrap">Pending</td>
                      <td scope="row" className="py-1 px-4 font-normal whitespace-nowrap">
                       <div className="flex  items-center gap-4">
                        
                        <Link to={`/seller-dashboard/order-details/5`} className="p-1.5 bg-green-600 rounded-md 
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

export default SellerOrders;
