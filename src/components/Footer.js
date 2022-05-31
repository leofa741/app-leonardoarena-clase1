import React,{Component} from 'react';
import {Link} from "react-router-dom";

const Footer = () => {

    return(
	
        <footer className="footer-distributed">





			<div className="footer-left">



				<h3>App<span>Store</span></h3>

				<p className="footer-links">

				<Link to="/home">Home  </Link>

<Link to="/about">About</Link>

<Link to="/ItemListContainer">Productos  </Link>

<Link to="/shop">Carrito</Link>
				</p>



				<p className="footer-company-name">Company Name © 2015</p>




				
			</div>

			<div className="footer-center">

				<div>
			<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-shop" viewBox="0 0 20 15">
  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
</svg>
					<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
				</div>

				<div>
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-telephone-outbound-fill" viewBox="0 0 20 15">
  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/>
</svg>
					
					<p>+1.555.555.5555</p>
				</div>

				<div>
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 20 6">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

			

			</div>
			<div className="menuredes">
			<div className="label">Follow Me</div>
			<div className="spacer"></div>
			<div className="item"><span>Twitter</span></div>
			<div className="item"><span>Instagram</span></div>
			<div className="item"><span>Flickr</span></div>
			<div className="item"><span>Behance</span></div>
			
		  </div>
		</footer>
		
       
		  
    );

}

export default Footer;