"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="footer-wrapper footer-layout3"
      
        style={{
          backgroundImage: 'url("/assets/img/bg/footer_bg_2.jpg")'}}
      >
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xxl-3 col-xl-4">
                <div className="widget footer-widget">
                  <h3 className="widget_title">About Company</h3>
                  <div className="th-widget-about">
                    <p className="about-text">
                      Professionally redefine transparent ROI through low-risk
                      high-yield imperatives. Progressively create empowered, cost
                      effective users via team driven.
                    </p>
                    <div className="th-social">
                      <Link href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link href="https://www.twitter.com/">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Quick Links</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link href="/About">About Us</Link>
                      </li>
                      <li>
                        <Link href="/Gallery">Gallery</Link>
                      </li>
                      {/* <li>
                        <Link href="/project">Our Projects</Link>
                      </li> */}
                      {/* <li>
                        <Link href="/faq">Help &amp; FAQs</Link>
                      </li> */}
                      <li>
                        <Link href="/Contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">SERVICES</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link href="/Inspection">Inspection</Link>
                      </li>
                      <li>
                        <Link href="/ExpeditingSupervision">Expediting & Supervision</Link>
                      </li>
                      <li>
                        <Link href="/AuditingConsulting">Auditing & Consulting</Link>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <p className="copyright-text">
                  Copyright <i className="fal fa-copyright" /> 2024{" "}
                  <a href="https://themeforest.net/user/themeholy">Themeholy</a>.
                  All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-6 text-lg-end text-center">
                <div className="footer-links">
                  <ul>
                    <li>
                      <Link href="/About">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link href="/About">Careers</Link>
                    </li>
                    <li>
                      <Link href="/About">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
