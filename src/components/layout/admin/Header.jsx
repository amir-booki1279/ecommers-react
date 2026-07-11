import  'react'
import { FaList } from 'react-icons/fa'

function Header({showSideBar,setShowSideBar}) {
  return (
    <div className='fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40'>

      <div className='ml-0 lg:ml-65 rounded-md h-16 flex 
      justify-between items-center bg-[#b1addf] px-5 transition-all'>
         
         <div 
         className='w-8.75 flex lg:hidden h-9 rounded-sm
          bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 justify-center items-center cursor-pointer'
         onClick={()=>setShowSideBar(!showSideBar)}>
          <span><FaList/></span>
         </div>


         <div className='hidden md:block'>
            <input 
            className='px-3 py-2 outline-none border rounded-sm
            bg-transparent border-slate-700 text-slate-700 focus:border-indigo-300 overflow-hidden' 
            type="text" name='search'
            placeholder='Search' />
         </div>

         <div className='flex justify-center items-center gap-4'>
              <div className='text-end'>
                <h2 className='text-base font-bold'>Amir Booki</h2>
                <span className='text-sm w-full font-normal'>Admin</span>
              </div>

              <div>
                <img className='w-11.5 rounded-full bg-cover h-11.5' src='/profile.jpeg' alt="" />
              </div>
         </div>

      </div>
      
    </div>
  )
}

export default Header
