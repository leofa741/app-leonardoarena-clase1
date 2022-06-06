import React from "react";
import { Link } from "react-router-dom";
import StoreIcon from "@mui/icons-material/Store";
import CallIcon from "@mui/icons-material/Call";
import ContactMailIcon from "@mui/icons-material/ContactMail";
const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          App<span>Store</span>
        </h3>

        <p className="footer-links">
          <Link to="/home">Home </Link>

          <Link to="/about">About</Link>

          <Link to="/ItemListContainer">Productos </Link>

          <Link to="/shop">Carrito</Link>
        </p>

        <p className="footer-company-name">Company Name © 2015</p>
      </div>

      <div className="footer-center">
        <div>
		<p> <StoreIcon fontSize="medium"  />
          
          &nbsp;444 S. Cedros Ave 
          </p>
        </div>

        <div>
        <p>  <CallIcon fontSize="medium"  />

          &nbsp;+1.555.555.5555</p>
        </div>

        <div>
		<p> <ContactMailIcon  fontSize="medium" />
        
            <a href="mailto:support@company.com"> &nbsp; support@company.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
      </div>
      <div className="menuredes">
        <div className="label">Follow Me</div>
        <div className="spacer"></div>
        <div className="item">
          <span>Twitter</span>
        </div>
        <div className="item">
          <span>Instagram</span>
        </div>
        <div className="item">
          <span>Flickr</span>
        </div>
        <div className="item">
          <span>Behance</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
