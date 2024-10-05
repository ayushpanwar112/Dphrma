import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import icons

const Footer = () => {
  return (
    <footer id="contact" className="text-center text-lg-start text-white" style={{ backgroundColor: "#929fba" }}>
      <div className="p-4 pb-0">
        <section>
          <div className="row">
            {/* Company Column */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            {/* Products Column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <Link href="#" className="text-white">MDBootstrap</Link>
              </p>
              <p>
                <Link href="#" className="text-white">MDWordPress</Link>
              </p>
              <p>
                <Link href="#" className="text-white">BrandFlow</Link>
              </p>
              <p>
                <Link href="#" className="text-white">Bootstrap Angular</Link>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            {/* Contact Column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p><FontAwesomeIcon icon="fa-solid fa-home" /> New York, NY 10012, US</p>
              <p><FontAwesomeIcon icon="fa-solid fa-envelope" /> info@gmail.com</p>
              <p><FontAwesomeIcon icon="fa-solid fa-phone" /> + 01 234 567 88</p>
              <p><FontAwesomeIcon icon="fa-solid fa-print" /> + 01 234 567 89</p>
            </div>

            {/* Social Media Column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
              <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#3b5998" }} href="#!" role="button">
              <FontAwesomeIcon icon={faFacebook} bounce />
              </a>
              <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#55acee" }} href="#!" role="button">
              <FontAwesomeIcon icon={faTwitter} bounce />
             
              </a>
              <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#dd4b39" }} href="#!" role="button">
               
                <FontAwesomeIcon icon={faGoogle} bounce />
              </a>
              <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#ac2bac" }} href="#!" role="button">
              <FontAwesomeIcon icon={faInstagram} bounce />
                
              </a>
              <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#0082ca" }} href="#!" role="button">
              <FontAwesomeIcon icon={faLinkedin} bounce />
               
              </a>
              <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#333333" }} href="#!" role="button">
              <FontAwesomeIcon icon={faGithub} bounce />
                
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", width: "100%" }}>
        © 2020 Copyright:
        <Link href="https://mdbootstrap.com" className="text-white">MDBootstrap.com</Link>
      </div>
    </footer>
  );
};

export default Footer;
