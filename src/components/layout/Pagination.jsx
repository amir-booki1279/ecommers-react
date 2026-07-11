import "react";

import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";


const Pagination = ({
  pageNumber,
  setPageNumber,
  totalItem,
  parPage,
  showItem,
}) => {
  let totalPage = Math.ceil(totalItem / parPage);
  let startPage = pageNumber;
  let dif = totalPage - pageNumber;

  if (dif <= showItem) {
    startPage = totalPage - showItem;
  }

  let endPage = startPage < 0 ? showItem : showItem + startPage;

  if (startPage <= 0) {
    // eslint-disable-next-line no-useless-assignment
    startPage = 1;
  }

  const createBtn = () => {
    const btns = [];

    for (let i = pageNumber; i < endPage; i++) {
      btns.push(
        <li
        onClick={()=>setPageNumber(i)}
          className={`${
            pageNumber === i
              ? "bg-indigo-300 text-white shadow-lg shadow-indigo-300/50"
              : "bg-slate-600 hover:bg-indigo-400 shadow-lg hover:shadow-indigo-500/50 hover:text-white text-[#d0d2d6]"
          } w-8.25 h-8.25 rounded-full flex justify-center items-center cursor-pointer`}>

            {i}
          </li>,
      );
    }
    return btns
  };

  return (
    <ul className="flex gap-3">
      {pageNumber > 1 && (
        <li
        onClick={()=>setPageNumber(pageNumber - 1)}
          className="w-8.25 h-8.25 rounded-full
                    flex justify-center items-center bg-slate-300 text-black cursor-pointer">
          <MdOutlineKeyboardDoubleArrowLeft />
        </li>
      )}
      {createBtn()}

      {pageNumber < totalPage && (
        <li
        onClick={()=>setPageNumber(pageNumber + 1)}
          className="w-8.25 h-8.25 rounded-full
                    flex justify-center items-center bg-slate-300 text-black cursor-pointer">
          <MdOutlineKeyboardDoubleArrowRight />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
