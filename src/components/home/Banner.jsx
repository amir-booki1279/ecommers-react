import  'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css'

const Slider = Carousel?.default || Carousel;
const Banner = () => {

    const responsive = {
        superLargeDesktop : {
            breakpoint : {max:4000,min:3000},
            items:1
        },
        desktop : {
            breakpoint : {max:3000,min:102},
            items:1
        },
        tablet : {
            breakpoint : {max:1024,min:464},
            items:1
        },
        mobile : {
            breakpoint : {max:464,min:0},
            items:1
        },
    }

    return (
        <div className='w-full max-md-lg-custom:mt-6'>
            <div className='w-[85%] max-xl:w-[90%] mx-auto'>
                <div className='w-full flex flex-wrap max-md-lg-custom:gap-8'>
                    <div className='w-full'>
                            <div className='my-8'>
                                <Slider
                                  autoPlay={true}
                                  infinite = {true}
                                  arrows={true}
                                  showDots={true}
                                  responsive={responsive}
                                >
                                    {
                                        [1,2,3,4,5,6].map((img,i)=>(
                                            <Link key={i}>
                                                <img className='object-cover' src={`/frontend/images/banner/${img}.jpg`} alt="" />
                                            </Link>
                                        ))
                                    }
                                </Slider>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;