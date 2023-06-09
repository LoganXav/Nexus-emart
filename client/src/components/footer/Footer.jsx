import "./Footer.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';

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
        <div className="icons">
          <a href="https://www.twitter.com/Ssegun_?t=Vel2e8qh1flzG&AOn7N7eA&s=09" className="links">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com/ssegun__" className="links">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/in/logan10927" className="links">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/LoganXav?tab=repositories" className="links">
            <GitHubIcon />
          </a>
        </div>
        <p>
          Designed by: <b>Logan</b>
        </p>
        <img
          src="https://emart.wpthemedemos.com/electronic-gadget/wp-content/uploads/sites/13/2023/02/Online-Payment.png"
          className="logos"
        />
      </div>
    </div>
  );
};

export default Footer;
