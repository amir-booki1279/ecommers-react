import "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const EditProduct = () => {
  const categories = [
    {
      id: 1,
      name: "Sports",
    },
    {
      id: 2,
      name: "T-Shirt",
    },
    {
      id: 3,
      name: "Mobile",
    },
    {
      id: 4,
      name: "Computer",
    },
    {
      id: 5,
      name: "Watch",
    },
    {
      id: 6,
      name: "Pant",
    },
  ];

  const [state, setState] = useState({
    name: "",
    description: "",
    discount: "",
    price: "",
    brand: "",
    stock: "",
  });
  const [cateShow, setCateShow] = useState(false);
  const [allCategory, setAllCategory] = useState(categories);
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");

  const [imageShow, setImageShow] = useState([]);

  const categorySearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value) {
      let searchValue = allCategory.filter(
        (c) => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1,
      );
      setAllCategory(searchValue);
    } else {
      setAllCategory(categories);
    }
  };


  const changeImage = (img, files) => {
    if (files.length > 0) {
      return
  }
  }
  

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    (setState({
      name: "Mens Tshirt",
      description: "flaljofhfijd;sl;vsjjsdhfjsjdflsjdfjjsdjl",
      discount: 10,
      price: 255,
      brand: "Easy",
      stock: 9,
    }),
      setCategory("Tshirt"),
      setImageShow([
        "http://localhost:5173/images/shirt.png",
        "http://localhost:5173/images/shirt2.png",
      ]));
  }, []);

  return (
    <div className="px lg:px-7 pt-5">
      <div className="w-full bg-[#6a5fdf] p-4 rounded-md">
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-xl font-semibold text-[#d0d2d6]">
            Edit Product
          </h2>
          <Link
            to={"/seller-dashboard/all-product"}
            className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2 "
          >
            All Product
          </Link>
        </div>
        <div>
          <form>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6] ">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="name">Product Name</label>
                <input
                  onChange={inputHandle}
                  value={state.name}
                  placeholder="product"
                  type="text"
                  name="name"
                  id="name"
                  className="px-4 py-2 bg-[#6a5fdf] outline-none focus:border-indigo-500 border
                                border-slate-700 rounded-md text-[#d0d2d6]"
                />
              </div>

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="brand">Product Brand</label>
                <input
                  onChange={inputHandle}
                  value={state.brand}
                  placeholder="brand name"
                  type="text"
                  name="brand"
                  id="brand"
                  className="px-4 py-2 bg-[#6a5fdf] outline-none focus:border-indigo-500 border
                                border-slate-700 rounded-md text-[#d0d2d6]"
                />
              </div>
            </div>

            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6] ">
              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="category"> Category</label>
                <input
                  readOnly
                  onClick={() => setCateShow(!cateShow)}
                  onChange={inputHandle}
                  value={category}
                  placeholder="--select category--"
                  type="text"
                  id="category"
                  className="px-4 py-2 bg-[#6a5fdf] outline-none focus:border-indigo-500 border
                                border-slate-700 rounded-md text-[#d0d2d6]"
                />

                <div
                  className={`absolute top-[101%] bg-[#475569] w-full transition-all ${cateShow ? "scale-100" : "scale-0"}`}
                >
                  <div className="w-full px-4 py-2 fixed">
                    <input
                      value={searchValue}
                      onChange={categorySearch}
                      className="px-3 py-1 focus:border-indigo-500 outline-none bg-transparent border border-slate-700 w-full rounded-md overflow-hidden text-[#d0d2d6] "
                      type="text"
                      placeholder="search"
                    />
                  </div>
                  <div className="pt-14"></div>
                  <div className="flex justify-start items-start flex-col h-50 overflow-x-scrool">
                    {allCategory.map((c) => (
                      <span
                        key={c.id}
                        className={`px-4 py-2 hover:bg-indigo-500 hover:text-white hover:shadow-lg w-full cursor-pointer ${category === c.name && "bg-indigo-500"}`}
                        onClick={() => {
                          setCateShow(false);
                          setCategory(c.name);
                          setSearchValue("");
                          setAllCategory(categories);
                        }}
                      >
                        {c.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="stock">Product Stock</label>
                <input
                  onChange={inputHandle}
                  value={state.stock}
                  placeholder="stock name"
                  type="text"
                  name="stock"
                  id="stock"
                  className="px-4 py-2 bg-[#6a5fdf] outline-none focus:border-indigo-500 border
                                border-slate-700 rounded-md text-[#d0d2d6]"
                />
              </div>
            </div>

            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6] ">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="price">Price</label>
                <input
                  onChange={inputHandle}
                  value={state.price}
                  placeholder="price"
                  type="number"
                  name="price"
                  id="price"
                  className="px-4 py-2 bg-[#6a5fdf] outline-none focus:border-indigo-500 border
                                border-slate-700 rounded-md text-[#d0d2d6]"
                />
              </div>

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="discount">Discount</label>
                <input
                  onChange={inputHandle}
                  value={state.discount}
                  placeholder="discount by %"
                  type="number"
                  name="discount"
                  id="discount"
                  className="px-4 py-2 bg-[#6a5fdf] outline-none focus:border-indigo-500 border
                                border-slate-700 rounded-md text-[#d0d2d6]"
                />
              </div>
            </div>

            <div className="flex flex-col w-full gap-1 mb-5">
              <label className="text-[#d0d2d6]" htmlFor="discription">
                Discription
              </label>
              <textarea
                cols="10"
                row="4"
                onChange={inputHandle}
                value={state.description}
                placeholder="discription"
                name="discription"
                id="discription"
                className="px-4 py-2 bg-[#6a5fdf] outline-none focus:border-indigo-500 border
                                border-slate-700 rounded-md text-[#d0d2d6]"
              ></textarea>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full text-[#d0d2d6] mb-4">
              {imageShow.map((img, i) => (
                <div key={i} className="h-45 relative">
                  <label htmlFor={i}>
                    <img className="h-50" src={img} alt="" />
                  </label>
                  <input onChange={(e)=>changeImage(img,e.target.files)} type="file" id={i} className="hidden" />
                </div>
              ))}
            </div>
            <div className="flex">
              <button className=" bg-red-500 hover:shadow-orange-500/40 hover:shadow-md text-white rounded-md px-7 py-2 mt-3 cursor-pointer">
                Edit Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
