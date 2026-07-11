import  'react';

const Search = ({setParPage}) => {
    return (
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
    );
};

export default Search;