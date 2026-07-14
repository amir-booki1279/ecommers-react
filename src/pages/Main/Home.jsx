import  'react';
import Banner from '../../components/home/Banner';
import Category from '../../components/home/Category';
import FeatureProduct from '../../components/home/FeatureProduct';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <FeatureProduct/>
        </div>
    );
};

export default Home;