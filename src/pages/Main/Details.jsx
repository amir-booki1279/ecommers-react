import "react";
import { IoIosArrowForward } from "react-icons/io";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import Ratings from "../../components/home/Ratings";
import {
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { Pagination as SwPaginaion } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import RatingTemp from "../../components/product/RatingTemp";
import Pagination from "../../components/layout/Pagination";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";

const Slider = Carousel?.default || Carousel;

const Details = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 102 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mdTablet: {
      breakpoint: { max: 991, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
    smMobile: {
      breakpoint: { max: 640, min: 464 },
      items: 2,
    },
    xsMobile: {
      breakpoint: { max: 440, min: 464 },
      items: 1,
    },
  };

  const [image, setImage] = useState("");
  const [state, setState] = useState("reviews");
  // eslint-disable-next-line no-unused-vars
  const [parPage, setParPAge] = useState(1);
  const [pageNumber, setPageNumber] = useState(10);
  const [rat, setRat] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [rev, setRe] = useState("");

  const userInfo = true;

  const discount = 5;
  const stock = 3;

  return (
    <div>
      <section className='bg-[url("/frontend/images/banner/shop.png")] h-55 mt-6 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute z-0 pointer-events-none left-0 top-0 w-full h-full bg-black/50"></div>
        <div className="w-[85%]  max-md-custom:w-[80%] max-sm-custom:w-[90%] max-lg-custom:w-[90%] h-full mx-auto relative z-999 ">
          <div className="flex flex-col text-white justify-center items-center gap-1 w-full z-999 h-full relative">
            <h2 className="text-3xl font-bold ">Details Page</h2>
            <div className="flex justify-center items-center gap-2 text-2xl w-full">
              <Link to={"/"}>Home</Link>
              <span className="pt-1">
                <IoIosArrowForward />
              </span>
              <span>Details</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Links */}
      <section className="bg-slate-100 ">
        <div className="w-[85%] max-lg-custom:w-[90%] max-md-custom:w-[90%] max-sm-custom:w-[90%] mx-auto ">
          <div className="h-15 text-slate-600 text-lg flex justify-start items-center gap-2">
            <Link className="text-slate-600 ">Home</Link>
            <span>
              <IoIosArrowForward />
            </span>
            <Link className="text-slate-600 ">Category</Link>
            <span>
              <IoIosArrowForward />
            </span>
            <span>Product Name</span>
          </div>
        </div>
      </section>

      {/* Image And Information */}
      <section>
        <div className="w-[85%] max-lg-custom:w-[90%] max-md-custom:w-[90%] max-sm-custom:w-[90%] mx-auto ">
          <div className="flex flex-wrap py-7">
            <div className="w-full grid grid-cols-2 max-md-lg-custom:grid-cols-1">
              {/* Image Section */}
              <div className="flex w-full flex-col  border border-slate-200">
                <div className="w-full flex justify-center  p-4 items-center">
                  <img
                    className="w-full h-100 "
                    src={`/frontend/images/products/${image ? image : "3"}.webp`}
                    alt=""
                  />
                </div>
                {/* Slider */}
                <div className="py-5">
                  <Slider
                    autoPlay={true}
                    infinite={true}
                    arrows={true}
                    responsive={responsive}
                    transitionDuration={500}
                  >
                    {[1, 2, 3, 4, 5, 6].map((img, i) => (
                      <div key={i} onClick={() => setImage(img)}>
                        <img
                          className="h-30 cursor-pointer object-cover"
                          src={`/frontend/images/products/${img}.webp`}
                          alt=""
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              {/* Information Section */}
              <div className="w-full flex flex-col gap-8 pl-10 max-md-lg-custom:pl-0 ">
                <div className="flex flex-col gap-5 text-slate-600 border-b border-slate-200 pb-16">
                  <h2 className="text-2xl font-bold">Product Name</h2>
                  <div className="flex justify-start items-center gap-4">
                    <div className="flex text-xl">
                      <Ratings ratings={4} />
                    </div>
                    <span className="text-green-500 text-sm font-medium pt-1">
                      (23 reviews)
                    </span>
                  </div>
                  <div className="flex justify-start items-center gap-5  text-lg font-semibold">
                    {!discount ? (
                      <div>
                        Price :{" "}
                        <span className="text-red-500">500$</span>
                      </div>
                    ) : (
                      <div className="flex justify-start items-center gap-3 text-2xl font-semibold text-red-500">
                        <span className="line-through">$500</span>
                        <span>
                          ${500 - Math.floor(500 * discount) / 100}
                        </span>
                        <span>({discount}%)</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="">
                      Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Optio placeat aperiam dolorem
                      neque sapiente tempora voluptatum accusantium
                      veniam assumenda iste, tempore debitis nisi,
                      sunt itaque cumque natus ipsam? Perferendis
                      harum, cupiditate nobis fugit officiis in aut
                      necessitatibus labore a, enim deserunt nesciunt.
                      Corrupti error natus repellat enim doloremque
                      accusamus maiores.
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-5">
                    {stock ? (
                      <div className="flex items-center justify-start gap-5">
                        <div className="flex items-center justify-between bg-slate-200 gap-x-10 px-9 py-6 h-10 rounded-sm ">
                          <div className="text-lg cursor-pointer">
                            {" "}
                            -{" "}
                          </div>
                          <div className="text-lg "> 2 </div>
                          <div className="text-lg cursor-pointer">
                            {" "}
                            +{" "}
                          </div>
                        </div>
                        <button className="bg-[#059473] cursor-pointer flex justify-center items-center text-white px-10 py-6 h-10 rounded-sm ">
                          Add To Cart
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                    <button className="bg-indigo-500 text-white flex justify-center items-center h-10 py-6 px-4 rounded-sm">
                      <span>
                        <FaHeart />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Share On */}
                <div className="flex flex-col gap-y-4 mt-7">
                  <div className="flex justify-start items-center gap-x-15">
                    <h2 className="text-black text-xl font-bold">
                      Availability
                    </h2>
                    {stock ? (
                      <span className="text-green-500 text-base font-semibold">
                        in stock ({stock})
                      </span>
                    ) : (
                      <span className="text-red-500 text-base font-semibold">
                        Out Of Stock
                      </span>
                    )}
                  </div>

                  <div className="flex justify-start items-center gap-x-15">
                    <h2 className="text-black text-xl font-bold">
                      share On
                    </h2>
                    <ul className="flex justify-center items-center gap-4">
                      <li className="flex justify-center items-center text-white h-9.5 w-9.5 cursor-pointer bg-[#059473] rounded-full">
                        <a href="">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li className="flex justify-center items-center text-white h-9.5 w-9.5 cursor-pointer bg-indigo-500 rounded-full">
                        <a href="">
                          <FaTwitter />
                        </a>
                      </li>
                      <li className="flex justify-center items-center text-white h-9.5 w-9.5 cursor-pointer bg-purple-500 rounded-full">
                        <a href="">
                          <FaLinkedin />
                        </a>
                      </li>
                      <li className="flex justify-center items-center text-white h-9.5 w-9.5 cursor-pointer bg-blue-500 rounded-full">
                        <a href="">
                          <FaGithub />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-start items-center gap-5 mt-3">
                    <button className="bg-[#059473] cursor-pointer flex justify-center items-center text-white px-10 py-6 h-10 rounded-sm ">
                      Buy Now
                    </button>
                    <button className="bg-red-500 cursor-pointer flex justify-center items-center text-white px-10 py-6 h-10 rounded-sm ">
                      Chat Seller
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review & Decription */}
      <section>
        <div className="w-[85%] max-lg-custom:w-[90%] max-md-custom:w-[90%] max-sm-custom:w-[90%] mx-auto ">
          <div className="flex  flex-wrap py-18">
            <div className="w-[72%] max-md-lg-custom:w-full">
              {/* Buttons */}
              <div className="flex justify-start items-center transition-all duration-200">
                <button
                  onClick={() => setState("reviews")}
                  className={`w-full flex justify-center items-center ${state === "reviews" ? "text-white bg-[#059473] " : "text-slate-800 bg-slate-200 "} py-1 rounded-sm font-semibold cursor-pointer`}
                >
                  Reviews
                </button>

                <button
                  onClick={() => setState("description")}
                  className={`w-full flex justify-center items-center ${state === "description" ? "text-white bg-[#059473] " : "text-slate-800 bg-slate-200 "} py-1 rounded-sm font-semibold cursor-pointer`}
                >
                  Description
                </button>
              </div>
              {/*End Buttons */}
              {/* Reviews Part */}
              {state === "reviews" ? (
                <>
                  <div className="flex justify-start items-start flex-wrap gap-10 mt-15">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center">
                        <h2 className="text-7xl font-bold">4.5</h2>
                        <span className="text-slate-600 text-4xl pt-3 font-bold">
                          /5
                        </span>
                      </div>
                      <div className="flex text-4xl">
                        <Ratings ratings={4} />
                      </div>
                      <p className="text-xl text-slate-600 font-semibold">
                        22 Rewiew
                      </p>
                    </div>
                    <div className="flex flex-col  items-center gap-5">
                      <div className="flex items-center gap-4">
                        <div className="flex gap-3">
                          <RatingTemp rating={5} />
                        </div>
                        <div className="">
                          <span className="w-55 py-2 h-3.5 bg-slate-200 relative block">
                            <span className="block h-full w-[80%] absolute left-0 top-0 bg-[#Edbb0E]"></span>
                          </span>
                        </div>
                        <p className="text-slate-600">20</p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex gap-3">
                          <RatingTemp rating={4} />
                        </div>
                        <div className="">
                          <span className="w-55 py-2 h-3.5 bg-slate-200 relative block">
                            <span className="block h-full w-[70%] absolute left-0 top-0 bg-[#Edbb0E]"></span>
                          </span>
                        </div>
                        <p className="text-slate-600">18</p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex gap-3">
                          <RatingTemp rating={3} />
                        </div>
                        <div className="">
                          <span className="w-55 py-2 h-3.5 bg-slate-200 relative block">
                            <span className="block h-full w-[50%] absolute left-0 top-0 bg-[#Edbb0E]"></span>
                          </span>
                        </div>
                        <p className="text-slate-600">15</p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex gap-3">
                          <RatingTemp rating={2} />
                        </div>
                        <div className="">
                          <span className="w-55 py-2 h-3.5 bg-slate-200 relative block">
                            <span className="block h-full w-[30%] absolute left-0 top-0 bg-[#Edbb0E]"></span>
                          </span>
                        </div>
                        <p className="text-slate-600">10</p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex gap-3">
                          <RatingTemp rating={1} />
                        </div>
                        <div className="">
                          <span className="w-55 py-2 h-3.5 bg-slate-200 relative block">
                            <span className="block h-full w-[15%] absolute left-0 top-0 bg-[#Edbb0E]"></span>
                          </span>
                        </div>
                        <p className="text-slate-600">8</p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex gap-3">
                          <RatingTemp rating={0} />
                        </div>
                        <div className="">
                          <span className="w-55 py-2 h-3.5 bg-slate-200 relative block">
                            <span className="block h-full w-[0%] absolute left-0 top-0 bg-[#Edbb0E]"></span>
                          </span>
                        </div>
                        <p className="text-slate-600">0</p>
                      </div>
                    </div>
                  </div>
                  {/* Comments Part */}
                  <div className="">
                    <h2 className="text-slate-600 text-2xl my-15 font-bold">
                      Products Review 25
                    </h2>
                    {[1, 2, 3, 4, 5].map((c) => (
                      <div
                        className="flex flex-col gap-3 mb-7"
                        key={c}
                      >
                        <div className="flex gap-1">
                          <RatingTemp rating={4} />
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 text-lg font-semibold">
                            Amir Booki
                          </span>
                          <span className="text-slate-600 text-lg font-semibold">
                            2 Dec 2000
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm font-semibold">
                          orem ipsum dolor, sit amet consectetur
                          adipisicing elit. Optio placeat aperiam
                          dolorem neque sapiente tempora voluptatum
                          accusantium veniam assumenda iste, tempore
                          debitis nisi, sunt itaque cumque natus
                          ipsam? Perferendis harum, cupiditate nobis
                          fugit offic
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* End Comments Part */}

                  {/* Pagination */}
                  <div className="flex justify-end items-center ">
                    <Pagination
                      pageNumber={pageNumber}
                      setPageNumber={setPageNumber}
                      totalItem={10}
                      parPage={parPage}
                      showItem={Math.floor(10 / 3)}
                    />
                  </div>
                  {/* End Pagination */}

                  {/* Send Comment */}

                  {userInfo ? (
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-1">
                        <Rating
                          onChange={(e) => setRat(e)}
                          initialRating={rat}
                          emptySymbol={
                            <span className="text-slate-600 text-4xl">
                              <CiStar />
                            </span>
                          }
                          fullSymbol={
                            <span className="text-[#Edbb0E] text-4xl">
                              <FaStar />
                            </span>
                          }
                        />
                      </div>
                      <form>
                        <textarea
                          className="w-full border border-slate-300 p-2"
                          name=""
                          id=""
                          cols="30"
                          rows="5"
                          placeholder="Write Your Comment"
                        ></textarea>
                        <div>
                          <button className="py-2 px-5 bg-indigo-500 text-white font-semibold rounded-sm ">Submit</button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div className="mt-15">
                      <Link className="py-2 px-4 bg-red-500 text-white rounded-sm">
                        Login Now
                      </Link>
                    </div>
                  )}

                  {/* End Send Comment */}
                </>
              ) : (
                <p className="text-slate-600 py-5 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Accusantium perferendis incidunt, in quo,
                  molestias placeat rerum ab aut illum ut dolorem,
                  provident cumque dicta reprehenderit alias neque
                  porro fugit! Enim rem assumenda ex non culpa
                  reprehenderit asperiores mollitia aperiam vel,
                  facilis, fuga alias ut nostrum, harum doloribus
                  quam. Maxime, possimus modi in enim laboriosam hic,
                  repellat sapiente nemo optio nobis pariatur quidem
                  iste porro ipsum libero impedit natus voluptatibus
                  exercitationem ut sed dignissimos! Facere maiores ut
                  minus sapiente perferendis ad.
                </p>
              )}

              {/* End Reviews Part */}
            </div>

            {/* from easy shop */}
            <div className="w-[28%] max-md-lg-custom:w-full -mt-3.5 max-md-lg-custom:mt-0">
              <div className="pl-7 max-md-lg-custom:pl-0">
                <div className="flex flex-col gap-5 p-4">
                  <div className="px-3 py-2 text-slate-600 bg-slate-200">
                    <h2 className="text-lg ">From Easy Shop</h2>
                  </div>

                  <div className="p-3 border border-slate-200 flex-col flex gap-10 ">
                    {[1, 2, 3].map((p, i) => (
                      <div
                        key={i}
                        className="relative flex flex-col justify-start gap-y-2"
                      >
                        <div className="w-full h-67.5">
                          <img
                            className="w-full h-full"
                            src={`/frontend/images/products/${p}.webp`}
                            alt=""
                          />
                        </div>
                        <div className="flex justify-center items-center absolute text-white w-9.5 h-9.5 rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                          8%
                        </div>
                        <div>
                          <h2 className="text-slate-600 text-lg">
                            Product Name
                          </h2>
                        </div>
                        <div className="flex justify-start items-center gap-4">
                          <span className="text-xl font-bold text-blue-700">
                            $244
                          </span>
                          <div className="flex items-center gap-2">
                            <Ratings ratings={4.5} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* end from easy shop */}
          </div>
        </div>
      </section>

      {/* Related Product  */}
      <section>
        <div className="w-[85%] max-lg-custom:w-[90%] max-md-custom:w-[90%] max-sm-custom:w-[90%] mx-auto ">
          <div className="py-16">
            <h2 className="text-2xl text-slate-600 font-bold mb-10">
              Related Product{" "}
            </h2>
            {/* Swiper */}
            <div>
              <Swiper
                slidesPerView="auto"
                breakpoints={{
                  1280: {
                    slidesPerView: 3,
                  },
                  565: {
                    slidesPerView: 2,
                  },
                }}
                spaceBetween={25}
                loop={true}
                pagination={{
                  clickable: true,
                  el: ".custom_bullet",
                }}
                modules={[SwPaginaion]}
                className="mySwiper"
              >
                {[1, 2, 3, 4, 5, 6].map((p, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <Link className="block">
                        <div className="relative h-67.5">
                          <div className="w-full h-full">
                            <img
                              className="w-full h-full"
                              src={`/frontend/images/products/${p}.webp`}
                              alt=""
                            />
                            <div className="absolute h-full w-full top-0 left-0 bg-black opacity-25 hover:opacity-50 transition-all duration-500"></div>
                          </div>
                          {discount !== 0 && (
                            <div className="flex justify-center items-center absolute text-white w-9.5 h-9.5 rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                              {discount}%
                            </div>
                          )}
                        </div>

                        <div className="p-4 flex flex-col gap-1">
                          <h2 className="text-slate-600 text-lg font-bold">
                            Product Name
                          </h2>
                          <div className="flex justify-start items-center gap-3">
                            <h2 className="text-lg font-bold text-slate-600">
                              $280
                            </h2>
                            <div className="flex">
                              <Ratings ratings={4.5} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div className="w-full flex justify-center items-center py-8">
              <div className="custom_bullet justify-center gap-3 w-auto!"></div>
            </div>
          </div>
        </div>
      </section>
      {/* end Related Product  */}
    </div>
  );
};

export default Details;
