import Categories from '../../components/categories/Categories';
import Features from '../../components/features/Features';
import Hero from '../../components/hero/Hero';
import Deals from '../../components/deals/Deals';
import NewCollection from '../../components/newCollection/NewCollection';
import CreativeFeatures from '../../components/creativeFeatures/CreativeFeatures';
import './Home.scss'
import Goods from '../../components/goods/Goods';
const Home = () => {
    return ( 
        <div className="home">
            <Hero />
            <Categories />
            <Features />
            <Deals />
            <Goods />
            <NewCollection />
            <CreativeFeatures />
        </div>
    );
}
 
export default Home;