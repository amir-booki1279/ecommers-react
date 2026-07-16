import  'react';
import Banner from '../../components/home/Banner';
import Category from '../../components/home/Category';
import FeatureProduct from '../../components/home/FeatureProduct';
import Products from '../../components/home/Products';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <FeatureProduct/>
           <div className='w-[85%] flex flex-wrap mx-auto py-11.5'>
            <div className='grid w-full grid-cols-3 max-md-lg-custom:grid-cols-2 max-md:grid-cols-1 gap-7'>
               <div className='overflow-hidden'>
                 <Products title={'Latest Product'}/>
               </div>
               <div className='overflow-hidden'>
                 <Products title={'Top Rated Product'}/>
               </div>
               <div className='overflow-hidden'>
                 <Products title={'Discount Product'}/>
               </div>
            </div>
        </div>
        </div>
    );
};

export default Home;