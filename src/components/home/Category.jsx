import "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

const Slider = Carousel?.default || Carousel;

const Category = () => {
  const categories = [
    "Mobiles",
    "Laptops",
    "Speakers",
    "Top Wear",
    "FootWear",
    "Watches",
    "Home Decor",
    "Smart Watches",
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 102 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mdTablet: {
      breakpoint: { max: 991, min: 464 },
      items: 4,
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

  return (
    <div className="w-[87%] mx-auto relative">
        <div className='w-full'>
                 <div className='text-center flex justify-center items-center flex-col text-3xl text-slate-600 font-bold relative pb-8.75'>
                    <h2>Top Category</h2>
                    <div className='w-25 h-0.5 bg-[#059473] mt-4'></div>
                 </div>
            </div>
      <Slider
        autoPlay={true}
        infinite={true}
        arrows={true}
        responsive={responsive}
        transitionDuration = {500}
      >
        {categories.map((c, i) => (
          <Link to={'#'}  key={i} className="h-46.25 border border-slate-300 block">
            <div className="w-full h-full  relative p-3">
                <img className="object-cover" src={`/frontend/images/products/${i+1}.webp`} alt="" />
                <div className="absolute bottom-6 mx-auto w-full font-bold mask-linear-from-100% flex justify-center items-center">
                    <span className="py-0.5 px-6 bg-[#3330305d] text-white">{c}</span>
                </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Category;
