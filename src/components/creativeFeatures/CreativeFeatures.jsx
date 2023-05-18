import './creativeFeatures.scss'
import useFetch from "../../hooks/useFetch"



const CreativeFeatures = () => {

  const { data, loading, error } = useFetch("/products?populate=*&[filters][type][$eq]=creative")


    return ( 
        <div className="creative">
            <div className="left">
          {loading ? "loading..." : error ? "Something went wrong" : <img src={import.meta.env.VITE_APP_UPLOAD_URL+data[0]?.attributes?.img.data.attributes.url}  alt="sectionImg" />}
            </div>
            <div className="right">
                <h1>Creative Features</h1>
                <div className="feature">
                    <div className="icon" ><i className="ri-gamepad-line"></i></div>
                    <div className="text">
                        <h2>Best controllers</h2>
                        <p>Lorem ipsum dolor sit amet consectetur beatae sapiente quaerat!</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="icon"><i className="ri-sound-module-line"></i></div>
                    <div className="text">
                        <h2>Customize settings</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, beatae sapiente quaerat!</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="icon"><i className="ri-tv-line"></i></div>
                    <div className="text">
                        <h2>High end display</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, samus beatae sapiente quaerat!</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CreativeFeatures;