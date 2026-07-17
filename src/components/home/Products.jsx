import  'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css' 
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
const Slider = Carousel?.default || Carousel;

  
const Products = ({title}) => {
    
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    }
    const products = [
        [1,2,3],
        [4,5,6]
    ]

    const ButtonGroup = ({next,previous}) => {
        return (
            <div className='flex justify-between items-center'>
                <div className='text-xl font-bold text-slate-600'> {title} </div>
                <div className='flex justify-center items-center gap-3 text-slate-600'>
                    <button onClick={()=>previous()} className='w-7.5 h-7.5 flex justify-center items-center bg-slate-300 border border-slate-200'>
                        <IoIosArrowBack />
                    </button>
                    <button onClick={()=>next()} className='w-7.5 h-7.5 flex justify-center items-center bg-slate-300 border border-slate-200'>
                    <IoIosArrowForward /> 

                    </button>
                </div>

            </div>
        )

    }


    return (
        <div className='flex gap-8 flex-col-reverse'>
            <Slider
                    autoPlay={false}
                    infinite={false}
                    arrows={false} 
                    responsive={responsive}
                    transitionDuration={500}
                    renderButtonGroupOutside={true}
                    // eslint-disable-next-line react-hooks/static-components
                    customButtonGroup={<ButtonGroup/>}
                >
       {
        products.map((p,i)=> {
            return(
                <div key={i} className='flex flex-col justify-start gap-2'>
               {
                p.map((pl, j) =>  <Link key={j} className='flex justify-start items-start' to='#'>
                <img className='w-27.5 h-27.5 object-cover' src={`/frontend/images/products/${pl}.webp`} alt="" />
                <div className='px-3 flex justify-start items-start gap-1 flex-col text-slate-600'>
                    <h2>Product </h2>
                    <span className='text-lg font-bold'>$1255</span> 
                </div>  
            </Link>
                 )
               }
            </div>   
            )
        })
       }         
                
                </Slider>   
        </div>
    );
};

export default Products;