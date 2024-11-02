"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header
        className="header-wrapper header-layout3"
        
        style={{
          backgroundImage: 'url("/assets/img/bg/header.jpg")'}}
      >
      </header>
      <div className="sticky-wrapper">
        <div className="menu-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <Link href="/" className="icon-masking">
                    {/* <span
                      data-mask-src="assets/img/logo.svg"
                      className="mask-icon"
                    ></span> */}
                    {/* American Inspection */}
                    {/* <img src="assets/img/logo.svg" alt="Webteck" /> */}
                    <img src="assets/img/AITLogo.png" style={{ height: '65px' }} /> 
                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/About">About Us</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/Inspection">Services</Link>
                      <ul className="sub-menu">
                        
                        <li>
                          <Link href="/Inspection">Inspection</Link>
                        </li>
                        <li>
                          <Link href="/ExpeditingSupervision">Expediting & Supervision</Link>
                        </li>
                        <li>
                          <Link href="/AuditingConsulting">Auditing & Consulting</Link>
                        </li>
                        <li>
                          <Link href="/FactoryEvaluation">Factory Evaluation</Link>
                        </li>
                        <li>
                          <Link href="/ExpertsStaffingTrainings">Experts Staffing & Trainings</Link>
                        </li>
                        <li>
                          <Link href="/NDTServices">NDT Services</Link>
                        </li>
                        <li>
                          <Link href="/SafetySupervision">Safety Supervision</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/Gallery">Gallery</Link>
                    </li>
                    {/* 
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="#">Shop</a>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/shop">Shop</Link>
                            </li>
                            <li>
                              <Link href="/shop-details">Shop Details</Link>
                            </li>
                            <li>
                              <Link href="/cart">Cart Page</Link>
                            </li>
                            <li>
                              <Link href="/checkout">Checkout</Link>
                            </li>
                            <li>
                              <Link href="/wishlist">Wishlist</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/team">Team</Link>
                        </li>
                        <li>
                          <Link href="/team-details">Team Details</Link>
                        </li>
                        <li>
                          <Link href="/project">Project</Link>
                        </li>
                        <li>
                          <Link href="/project-details">Project Details</Link>
                        </li>
                        <li>
                          <Link href="/gallery">Gallery</Link>
                        </li>
                        <li>
                          <Link href="/pricing">Pricing</Link>
                        </li>
                        <li>
                          <Link href="/faq">FAQ Page</Link>
                        </li>
                        <li>
                          <Link href="/error">Error Page</Link>
                        </li>
                      </ul>
                    </li>
                    */}
                    <li>
                      <Link href="/Contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
