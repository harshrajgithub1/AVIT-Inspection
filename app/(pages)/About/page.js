"use client";

import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: 'url("/assets/img/bg/breadcumb-bg.jpg")',
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">About Us</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="overflow-hidden space" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-30 mb-xl-0">
              <div className="img-box1">
                <div className="img1">
                  <img src="/assets/img/normal/about_1_1.png" alt="About" />
                </div>
                <div className="shape1">
                  <img src="/assets/img/normal/about_shape_1.png" alt="shape" />
                </div>
                {/* <div className="year-counter">
                  <h3 className="year-counter_number">
                    <span className="counter-number">25</span>
                  </h3>
                  <p className="year-counter_text">Years Experience</p>
                </div> */}
              </div>
            </div>
            <div className="col-xl-6">
              <div className="ps-xxl-4 ms-xl-3">
                <div className="title-area mb-35">
                  <span className="sub-title">
                    <div className="icon-masking me-2">
                      {/* <span
                        className="mask-icon"
                        data-mask-src="assets/img/theme-img/title_shape_1.svg"
                      ></span> */}
                      {" "}
                      <img
                        src="assets/img/theme-img/title_shape_1.svg"
                        alt="shape"
                      />
                    </div>
                    About Us
                  </span>
                  <h2 className="sec-title">
                  American Inspection and Testing Group{" "}
                    <span className="text-theme">(AIT GROUP)</span>
                  </h2>
                </div>
                
                <p className="mt-n2 mb-25">
                  AIT Group is a certified company and one of the leading Service
                  providers based in Delhi NCR. We are offering a wide
                  range of services such as Manpower Recruitment Services
                  Placement Services, Verification Services and Inspection
                  Service, Analysis service and Technical Testing We have also
                  emerged as one of the top companies, providing a wide range of
                  manpower solutions in the country. Since the incorporation of
                  the company, maintaining best quality ni our operations while
                  ensuring utmost Efficiency and effectiveness has been our
                  driving force. The heights we have achieved during our service
                  tenure are just because of our client centric attitude. We
                  provide services in Various third party inspection
                  agencies-(Bureau Veritas, TUV-Nord, TUV-Rheinland, TUV- SUD,
                  Intertek and SGS etc. Today we are one of the leading names in
                  the industrial Man Power Solutions. Our approach is to enhance
                  the beauty and environment of the workplace, thus creating a
                  perfect working atmosphere, enhancing the work capacity. We
                  offer our services at reasonable prices, and also ensure that
                  these are executed within the promised time frame. Under the
                  keen guidance of our mentor M.r Ramesh Kumar our services have
                  been designed, in accordance with the set guidelines and rules
                  of the industry. These are highly acknowledged by clients for
                  features like promptness, reliability, and timeliness. We
                  believe very firmly in ethical business practices and in
                  transparency at all levels.
                </p>
                <div className="about-feature-wrap">
                  <div className="about-feature">
                    <div className="about-feature_icon">
                      {/* <img
                        src="assets/img/icon/about_feature_1_1.svg"
                        alt="Icon"
                      /> */}
                    </div>
                    <div className="media-body">
                      <h3 className="about-feature_title">Certified Company</h3>
                      <p className="about-feature_text">
                        Best Provide Skills Services
                      </p>
                    </div>
                  </div>
                  <div className="about-feature">
                    <div className="about-feature_icon">
                      <img
                        src="assets/img/icon/about_feature_1_2.svg"
                        alt="Icon"
                      />
                    </div>
                    <div className="media-body">
                      <h3 className="about-feature_title">Expert Team</h3>
                      <p className="about-feature_text">100% Expert Team</p>
                    </div>
                  </div>
                </div>
                <div className="btn-group">
                  <Link href="/About" className="th-btn">
                    DISCOVER MORE
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                  </Link>
                  <div className="call-btn">
                    <div className="play-btn">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="media-body">
                      <span className="btn-text">Call Us On:</span>{" "}
                      <Link href="tel:+91 9812344263" className="btn-title">
                      +91 9812344263
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div
        className="bg-theme space-extra"
        data-bg-src="assets/img/bg/counter_bg_1.png"
      >
        <div className="container py-2">
          <div className="row gy-40 justify-content-between">
            <div className="col-6 col-lg-auto">
              <div className="counter-card">
                <div className="counter-card_icon">
                  <img src="assets/img/icon/counter_1_1.svg" alt="Icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <span className="counter-number">986</span>+
                  </h2>
                  <p className="counter-card_text">Finished Project</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-auto">
              <div className="counter-card">
                <div className="counter-card_icon">
                  <img src="assets/img/icon/counter_1_2.svg" alt="Icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <span className="counter-number">896</span>+
                  </h2>
                  <p className="counter-card_text">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-auto">
              <div className="counter-card">
                <div className="counter-card_icon">
                  <img src="assets/img/icon/counter_1_3.svg" alt="Icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <span className="counter-number">396</span>+
                  </h2>
                  <p className="counter-card_text">Skilled Experts</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-auto">
              <div className="counter-card">
                <div className="counter-card_icon">
                  <img src="assets/img/icon/counter_1_4.svg" alt="Icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <span className="counter-number">496</span>+
                  </h2>
                  <p className="counter-card_text">Honorable Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
