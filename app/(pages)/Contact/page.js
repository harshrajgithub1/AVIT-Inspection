"use client";

import React from "react";
import Link from "next/link";
const Contact = () => {
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
            <h1 className="breadcumb-title">Contact Us</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div className="media-body">
                  <h4 className="box-title">Our Office Address</h4>
                  <span className="contact-info_text">
                    678/26, Gali No. 3, West Ram Nagar,
                    <br />
                    Sonipat Sonipat 131001 Haryana, India
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="media-body">
                  <h4 className="box-title">Call Us Anytime</h4>
                  <span className="contact-info_text">
                    <Link href="tel:+91 9812344263">(+91)9812344263</Link> 
                    <Link href="tel:+919555469009">(+91)9555469009</Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="media-body">
                  <h4 className="box-title">Send An Email</h4>
                  <span className="contact-info_text">
                    <Link href="mailto:aitgroup2023@gmail.com">
                    aitgroup2023@gmail.com
                    </Link>{" "}
                    <Link href="mailto:navenduavinash@gmail.com">navenduavinash@gmail.com</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-smoke space"
        style={{
          backgroundImage: 'url("/assets/img/bg/contact_bg_1.png")',
        }}
        id="contact-sec"
      >
        {/* <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="title-area mb-35 text-xl-start text-center">
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <span
                      className="mask-icon"
                      data-mask-src="assets/img/theme-img/title_shape_2.svg"
                    ></span>
                    <img
                      src="assets/img/theme-img/title_shape_2.svg"
                      alt="shape"
                    />
                  </div>
                  Contact with us!
                </span>
                <h2 className="sec-title">Have Any Questions?</h2>
                <p className="sec-text">
                  Enthusiastically disintermediate one-to-one leadership via
                  business e-commerce. Dramatically reintermediate compelling
                  process improvements rather than empowered relationships.
                </p>
              </div>
              <form
                action="http://html.themeholy.com/webteck/demo/mail.php"
                method="POST"
                className="contact-form ajax-contact"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                    />
                    <i className="fal fa-user"></i>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                    />
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="form-group col-md-6">
                    <select name="subject" id="subject" className="form-select">
                      <option value="" disabled selected hidden>
                        Select Subject
                      </option>
                      <option value="Web Development">Web Development</option>
                      <option value="Brand Marketing">Brand Marketing</option>
                      <option value="UI/UX Designing">UI/UX Designing</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                    </select>
                    <i className="fal fa-chevron-down"></i>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="tel"
                      className="form-control"
                      name="number"
                      id="number"
                      placeholder="Phone Number"
                    />
                    <i className="fal fa-phone"></i>
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="3"
                      className="form-control"
                      placeholder="Your Message"
                    ></textarea>
                    <i className="fal fa-comment"></i>
                  </div>
                  <div className="form-btn text-xl-start text-center col-12">
                    <button className="th-btn" type="submit">
                      Send Message
                      <i className="fa-regular fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3"></p>
              </form>
            </div>
          </div>
        </div> */}
      </div>
      {/* https://maps.app.goo.gl/mT4vwTkQG6CzfgJu9 */}
      <div className="map-sec">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sThemeholy!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
          allowFullScreen
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
