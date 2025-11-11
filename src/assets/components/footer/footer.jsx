import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faLinkedin,faXTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <>

            <footer className=''>
             

             <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-4 border-b">
                                <nav className='xl:pl-40'>
                    <h6 className="footer-title">CS-Ticket System</h6>
                    <a className="link link-hover">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br />Ipsum has been the industry's standard <br />dummy text ever since the 1500s, when an <br />unknown printer took a galley of type and <br />scrambled it to make a type specimen book.</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Saled</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <a className="link link-hover"><FontAwesomeIcon icon={faXTwitter}/>@CS — Ticket System</a>
                    <a className="link link-hover"><FontAwesomeIcon icon={faLinkedin}/>@CS — Ticket System</a>
                    <a className="link link-hover"><FontAwesomeIcon icon={faFacebook}/>@CS — Ticket System</a>
                    <a className="link link-hover">support@cst.com</a>
                </nav>
             </div>

  <aside className='bg-neutral p-4 text-white text-center'>
    <p>© {new Date().getFullYear()} CS - Ticket System. All right reserved .</p>
  </aside>
           </footer>
        </>
    );
};

export default Footer;