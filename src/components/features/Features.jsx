import './Features.scss'


const Features = () => {
    
    const features = [
        {
            id: 1,
            name: "Free shipping",
            desc: "Get your products delivered straight to your doorstep without any additional costs.",
            icon: <i class="ri-shopping-cart-line"></i>
        },
        {
            id: 2,
            name: "100% Original product",
            desc: "Rest assured that all products on our website are 100% original and sourced directly from the manufacturer.",
            icon: <i class="ri-award-line"></i>  
        },
    
        {
            id: 3,
            name: "Gift cards",
            desc: "Choose from a variety of denominations and let your loved ones choose their own perfect gift.",
            icon: <i class="ri-gift-line"></i>
        },
        
        {
            id: 4,
            name: "Tracking & delivery",
            desc: " Know exactly when your package will arrive and enjoy peace of mind knowing it's on its way.",
            icon: <i class="ri-truck-line"></i>  
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