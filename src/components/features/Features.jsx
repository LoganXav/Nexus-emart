import './Features.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import { TiGift } from 'react-icons/ti';
import { BiCar } from 'react-icons/bi';

const Features = () => {
    
    const features = [
        {
            id: 1,
            name: "Free shipping",
            desc: "Get your products delivered straight to your doorstep without any additional costs.",
            icon: <AiOutlineShoppingCart style={{ fontSize: '4rem', fontWeight: 'lighter' }}/>   
        },
        {
            id: 2,
            name: "100% Original product",
            desc: "Rest assured that all products on our website are 100% original and sourced directly from the manufacturer.",
            icon: <HiOutlineBadgeCheck style={{ fontSize: '4rem', fontWeight: 'lighter' }}/>   
        },
    
        {
            id: 3,
            name: "Gift cards",
            desc: "Choose from a variety of denominations and let your loved ones choose their own perfect gift.",
            icon: <TiGift style={{ fontSize: '4rem', fontWeight: 'lighter' }}/> 
        },
    
        {
            id: 4,
            name: "Tracking & delivery",
            desc: " Know exactly when your package will arrive and enjoy peace of mind knowing it's on its way.",
            icon: <BiCar style={{ fontSize: '4rem', fontWeight: 'lighter' }}/>
        }
    ]
    return ( 
        <div className="features">
            {features.map(feature => (
                <div className="feature" key={feature.id}>
                    {feature.icon}
                    <h2>{feature.name}</h2>
                    <p>{feature.desc}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Features;