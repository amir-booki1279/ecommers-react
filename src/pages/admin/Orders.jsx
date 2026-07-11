import  'react'
import { useState } from 'react'
import {LuArrowBigDownDash} from 'react-icons/lu'
import { Link } from 'react-router-dom'
import Pagination from '../../components/layout/Pagination'

function Orders() {

    const[currentPage,setCurrentPage]=useState(1)
    // eslint-disable-next-line no-unused-vars
    const[searchValue,setSearchValue]=useState('')
    const[parPage,setParPage]=useState(5)
    const[show,setShow]=useState(false)

    



  return (
    <div className='px-2 lg:px-7 pt-5'>
      <div className='w-full bg-[#6a5fdf] p-4 rounded-md'>
            <div className='flex justify-between items-center'>
                <select onChange={(e)=>setParPage(parseInt(e.target.value))}
                className='py-2 px-4 rounded-md bg-[#6a5fdf] 
                border border-slate-700 focus:border-indigo-500 outline-none text-[#d0d2d6]'>
                    
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                </select>
                <input
                className='px-4 py-2 bg-[#6a5fdf] outline-none focus:border-indigo-500 border
                border-slate-700 rounded-md text-[#]'
                type="text" placeholder='search' />
            </div>

            {/* Table Section */}
            <div className='relative mt-5 overflow-x-auto'>
                <div className='w-full text-sm text-left'>
                    <div className='text-[#d0d2d6] uppercase border-b border-slate-700'>
                        <div className='flex justify-between items-center'>
                            <div className='py-3 w-[25%] font-bold '>Order ID</div>
                            <div className='py-3 w-[13%] font-bold '>Price</div>
                            <div className='py-3 w-[18%] font-bold '>Payment Status</div>
                            <div className='py-3 w-[18%] font-bold '>Order Status</div>
                            <div className='py-3 w-[18%] font-bold '>Action</div>
                            <div className='py-3 w-[8%] font-bold '><LuArrowBigDownDash/></div>

                        </div>
                    </div>


                     <div className='text-[#d0d2d6]'>
                        <div className='flex justify-between items-start border-b border-slate-700'>
                            <div className='py-3 w-[25%] font-medium whitespace-nowrap '>#4</div>
                            <div className='py-3 w-[13%] font-medium whitespace-nowrap  '>$55</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>Pending</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>Pending</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>
                                <Link to={'/admin-dashboard/order-details/:2'}>View</Link>
                            </div>
                            <div 
                            onClick={()=>setShow(!show)}
                            className='py-3 w-[8%] font-medium whitespace-nowrap cursor-pointer  '>
                                <LuArrowBigDownDash/>
                                </div>


                        </div>
                    </div>

                       {/* Children Data */}
                    <div className={show ? 'block border-b border-slate-700 bg-[#8288ed]' : 'hidden'}>
                      <div className='flex justify-start items-start border-b border-slate-700'>
                            <div className='py-3 w-[25%] font-medium whitespace-nowrap pl-3 '>#4</div>
                            <div className='py-3 w-[13%] font-medium whitespace-nowrap  '>$99</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>Pending</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>Pending</div>
                        </div>

                        <div className='flex justify-start items-start border-b border-slate-700'>
                            <div className='py-3 w-[25%] font-medium whitespace-nowrap pl-3 '>#4</div>
                            <div className='py-3 w-[13%] font-medium whitespace-nowrap  '>$99</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>Pending</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>Pending</div>
                            
                        </div>
                    </div>

                         <div className='text-[#d0d2d6]'>
                        <div className='flex justify-between items-start border-b border-slate-700'>
                            <div className='py-3 w-[25%] font-medium whitespace-nowrap '>#4</div>
                            <div className='py-3 w-[13%] font-medium whitespace-nowrap  '>$55</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>Pending</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>Pending</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>
                                <Link to={'/admin-dashboard/order-details/:2'}>View</Link>
                            </div>
                            <div 
                            onClick={()=>setShow(!show)}
                            className='py-3 w-[8%] font-medium whitespace-nowrap cursor-pointer  '>
                                <LuArrowBigDownDash/>
                                </div>


                        </div>
                    </div>

                       {/* Children Data */}
                    <div className={show ? 'block border-b border-slate-700 bg-[#8288ed]' : 'hidden'}>
                      <div className='flex justify-start items-start border-b border-slate-700'>
                            <div className='py-3 w-[25%] font-medium whitespace-nowrap pl-3 '>#4</div>
                            <div className='py-3 w-[13%] font-medium whitespace-nowrap  '>$99</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>Pending</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>Pending</div>
                        </div>

                        <div className='flex justify-start items-start border-b border-slate-700'>
                            <div className='py-3 w-[25%] font-medium whitespace-nowrap pl-3 '>#4</div>
                            <div className='py-3 w-[13%] font-medium whitespace-nowrap  '>$99</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>Pending</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>Pending</div>
                        </div>
                    </div>


                         <div className='text-[#d0d2d6]'>
                        <div className='flex justify-between items-start border-b border-slate-700'>
                            <div className='py-3 w-[25%] font-medium whitespace-nowrap '>#4</div>
                            <div className='py-3 w-[13%] font-medium whitespace-nowrap  '>$55</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>Pending</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>Pending</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>
                                <Link>View</Link>
                            </div>
                            <div 
                            onClick={()=>setShow(!show)}
                            className='py-3 w-[8%] font-medium whitespace-nowrap cursor-pointer  '>
                                <LuArrowBigDownDash/>
                                </div>


                        </div>
                    </div>

                       {/* Children Data */}
                    <div className={show ? 'block border-b border-slate-700 bg-[#8288ed]' : 'hidden'}>
                      <div className='flex justify-start items-start border-b border-slate-700'>
                            <div className='py-3 w-[25%] font-medium whitespace-nowrap pl-3 '>#4</div>
                            <div className='py-3 w-[13%] font-medium whitespace-nowrap  '>$99</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>Pending</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>Pending</div>
                        </div>

                        <div className='flex justify-start items-start border-b border-slate-700'>
                            <div className='py-3 w-[25%] font-medium whitespace-nowrap pl-3 '>#4</div>
                            <div className='py-3 w-[13%] font-medium whitespace-nowrap  '>$99</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>Pending</div>
                            <div className='py-3 w-[18%] font-medium whitespace-nowrap  '>Pending</div>
                        </div>
                    </div>
                    

                    
                </div>
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
  )
}

export default Orders
