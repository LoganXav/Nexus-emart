import './Footer.scss'
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="top">
                <h1>Subscribe Newsletter</h1>
                <p>Subscribe now and get more offers</p>
                <div className="input">
                    <input placeholder="Your email address..." type="text" />
                    <button>Subscribe Now</button>
                </div>
            </div>
            <div className="bottom">
                <div className="icons">icons</div>
                <p>Designed by: <b>Logan</b></p>
                <div className="logos">logos</div>
            </div>
        </div>
     );
}
 
export default Footer;