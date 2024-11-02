"use client";
import React from "react";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
  return (
    <>
      <div className="th-hero-wrapper hero-4" id="hero">
        <div className="body-particle" id="body-particle" />
        <div className="hero-img tilt-active">
          <img src="assets/img/hero/hero_img_4_1.png" alt="Hero Image" />
        </div>
        <div className="container">
          <div className="hero-style4">
            <div className="ripple-shape">
              <span className="ripple-1" />
              <span className="ripple-2" />
              <span className="ripple-3" />
              <span className="ripple-4" />
              <span className="ripple-5" />
              <span className="ripple-6" />
            </div>
            <span className="hero-subtitle">Best Inspection Services</span>
            <h1 className="hero-title">Make The Easiest</h1>
            <h1 className="hero-title">Solution For You</h1>
            <p className="hero-text">
              American Inspection and Testing Group is a certified company and
              one of the leading Service providers based in Delhi NCR.
              We are offering a wide range of services such as Manpower
              Recruitment Services Placement Services, Verification Services and
              Inspection Service, Analysis service and Technical Testing We have
              also emerged as one of the top companies, providing a wide range
              of manpower solutions in the country.
            </p>
            <div className="btn-group">
              <Link href="/About" className="th-btn">
                ABOUT US
                <i className="fa-regular fa-arrow-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="triangle-1" />
        <div className="triangle-2" />
        <div className="hero-shape2">
          <img src="assets/img/hero/hero_shape_2_2.png" alt="shape" />
        </div>
        <div className="hero-shape3">
          <img src="assets/img/hero/hero_shape_2_3.png" alt="shape" />
        </div>
      </div>
      <section
        className="bg-top-center z-index-common space-top"
        id="service-sec"
        style={{
          backgroundImage: 'url("/assets/img/bg/service_bg_2.jpg")',
        }}
      >
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-6 col-sm-9 pe-xl-5">
              <div className="title-area text-center text-lg-start">
                <div className="shadow-title color2">SERVICES</div>
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <span
                      className="mask-icon"
                      data-mask-src="assets/img/theme-img/title_shape_2.svg"
                    />{" "}
                    <img
                      src="assets/img/theme-img/title_shape_2.svg"
                      alt="shape"
                    />
                  </div>
                  WHAT WE DO
                </span>
                <h2 className="sec-title text-white">
                  We Provide Exclusive Service For{" "}
                  <span className="text-theme">Your Business</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider has-shadow"
              id="serviceSlider1"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'
            >
              <div className="swiper-wrapper">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  breakpoints={{
                    0: { slidesPerView: 1 },       // Full width on small screens
                    768: { slidesPerView: 2 },     // 2 slides on medium screens
                    992: { slidesPerView: 3 },     // 3 slides on larger screens
                    1200: { slidesPerView: 3 },    // 4 slides on extra large screens
                  }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div className="swiper-slide  sm:w-full md:w-auto">
                      <div className="service-grid">
                        <div className="service-grid_icon">
                          <img
                            src="assets/img/icon/service_card_1.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="service-grid_content">
                          <h3 className="box-title">
                            <Link href="/Inspection">Inspection</Link>
                          </h3>
                          <p className="service-grid_text">
                            When we make promise to our customer and it’s become
                            vital to keep it. It means we must have right
                            processes, procedures and systems to ensure
                            committed
                          </p>
                          <Link href="/Inspection" className="th-btn">
                            Read More
                            <i className="fas fa-arrow-right ms-2" />
                          </Link>
                          <div className="bg-shape">
                            <img
                              src="assets/img/bg/service_grid_bg.png"
                              alt="bg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="service-grid">
                        <div className="service-grid_icon">
                          <img
                            src="assets/img/icon/service_card_2.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="service-grid_content">
                          <h3 className="box-title">
                            <Link href="/ExpeditingSupervision">
                              Expediting & Supervision
                            </Link>
                          </h3>
                          <p className="service-grid_text">
                            American Inspection and Testing Group Specializing in Expediting As
                            manufacturing and supply chain processes become more
                            complex and competitive, procurement
                          </p>
                          <Link
                            href="/ExpeditingSupervision"
                            className="th-btn"
                          >
                            Read More
                            <i className="fas fa-arrow-right ms-2" />
                          </Link>
                          <div className="bg-shape">
                            <img
                              src="assets/img/bg/service_grid_bg.png"
                              alt="bg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="service-grid">
                        <div className="service-grid_icon">
                          <img
                            src="assets/img/icon/service_card_3.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="service-grid_content">
                          <h3 className="box-title">
                            <Link href="/AuditingConsulting">
                              Auditing & Consulting
                            </Link>
                          </h3>
                          <p className="service-grid_text">
                            Identification of the risk of material in a
                            specialized industry should be approached in the
                            same was as in any other audit – by obtaining
                            appropriate understanding of the business
                          </p>
                          <Link href="/AuditingConsulting" className="th-btn">
                            Read More
                            <i className="fas fa-arrow-right ms-2" />
                          </Link>
                          <div className="bg-shape">
                            <img
                              src="assets/img/bg/service_grid_bg.png"
                              alt="bg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="service-grid">
                        <div className="service-grid_icon">
                          <img
                            src="assets/img/icon/service_card_3.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="service-grid_content">
                          <h3 className="box-title">
                            <Link href="/FactoryEvaluation">
                              FACTORY EVALUATION
                            </Link>
                          </h3>
                          <p className="service-grid_text">
                            We at American Inspection and Testing Group are evaluating a current
                            or potential supplier. Our Factory Evaluation
                            services will provide you the assurance that you are
                            protecting
                          </p>
                          <Link href="/FactoryEvaluation" className="th-btn">
                            Read More
                            <i className="fas fa-arrow-right ms-2" />
                          </Link>
                          <div className="bg-shape">
                            <img
                              src="assets/img/bg/service_grid_bg.png"
                              alt="bg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="service-grid">
                        <div className="service-grid_icon">
                          <img
                            src="assets/img/icon/service_card_5.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="service-grid_content">
                          <h3 className="box-title">
                            <Link href="/ExpertsStaffingTrainings">
                              Experts Staffing & Trainings
                            </Link>
                          </h3>
                          <p className="service-grid_text">
                            From meeting tight deadlines to managing peak
                            seasons, staffing needs can be unpredictable 
                            flexible service options.
                          </p>
                          <Link
                            href="/ExpertsStaffingTrainings"
                            className="th-btn"
                          >
                            Read More
                            <i className="fas fa-arrow-right ms-2" />
                          </Link>
                          <div className="bg-shape">
                            <img
                              src="assets/img/bg/service_grid_bg.png"
                              alt="bg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="why-sec-v2"
        style={{
          backgroundImage: 'url("/assets/img/bg/why_bg_2.jpg")',
        }}
      >
        <div className="container space">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-xl-6 mb-30 mb-xl-0">
              <div className="img-box5">
                <img
                  className="tilt-active"
                  src="assets/img/normal/why_2_1.png"
                  alt="Why"
                />
                <div className="year-counter">
                  <h3 className="year-counter_number">
                    <span className="counter-number">10</span>k+
                  </h3>
                  <p className="year-counter_text">Clients Active</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-35">
                <div className="shadow-title color3">Choose US</div>
                <span className="sub-title">
                  <div className="icon-masking me-2">
                    <span
                      className="mask-icon"
                      data-mask-src="assets/img/theme-img/title_shape_2.svg"
                    />{" "}
                    <img
                      src="assets/img/theme-img/title_shape_2.svg"
                      alt="shape"
                    />
                  </div>
                  WHY CHOOSE US
                </span>
                <h2 className="sec-title">
                  Brilliant Minds With Excellent{" "}
                  <span className="text-theme">Work Ideas</span>
                </h2>
              </div>
              <p className="mt-n2 mb-30">
                Our leadership team boasts extensive experience, with members
                drawn from prestigious engineering and consultancy firms. Their
                expertise and diverse backgrounds enable us to tackle complex
                challenges with innovative solutions and a strategic
                perspective.
              </p>
              <div className="feature-circle-wrap">
                <div className="feature-circle">
                  <div className="progressbar" data-path-color="#684DF4">
                    <div className="circle" data-percent={90}>
                      <div className="circle-num" />
                    </div>
                  </div>
                </div>
                <div className="feature-circle">
                  <div className="progressbar" data-path-color="#684DF4">
                    <div className="circle" data-percent={95}>
                      <div className="circle-num" />
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/About" className="th-btn">
                LEARN MORE
                <i className="fa-regular fa-arrow-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section
        className="bg-top-center space"
        style={{
          backgroundImage: 'url("/assets/img/bg/testi_bg_3.jpg")',
        }}
      >
        <div className="container">
          <div className="title-area text-center">
            <div className="shadow-title color2">TESTIMONIALS</div>
            <span className="sub-title">
              <div className="icon-masking me-2">
                <span
                  className="mask-icon"
                  style={{
                    backgroundImage:
                      'url("/assets/img/theme-img/title_shape_2.svg")',
                  }}
                />
                <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
              </div>
              CUSTOMER FEEDBACK
            </span>
            <h2 className="sec-title text-white">
              What Happy Clients Says
              <br />
              <span className="text-theme">About Us?</span>
            </h2>
          </div>
          <div className="slider-area">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              breakpoints={{
                0: { slidesPerView: 1 },       // Full width on small screens
                768: { slidesPerView: 2 },     // 2 slides on medium screens
                992: { slidesPerView: 3 },     // 3 slides on larger screens
                1200: { slidesPerView: 3 },    // 4 slides on extra large screens
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className="testi-grid">
                  <div className="testi-grid_img">
                    <img
                      src="assets/img/testimonial/testi_3_1.jpg"
                      alt="Avatar"
                    />
                    <div className="testi-grid_quote">
                      <img src="assets/img/icon/quote_left_3.svg" alt="quote" />
                    </div>
                  </div>
                  <div className="testi-grid_review">
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                  </div>
                  <div className="testi-grid_content">
                    <p className="testi-grid_text">
                      Objectively visualize error-free technology for B2B
                      alignment. Monotonectally harness an expanded array of
                      models via effective collaboration. Globally synergize
                      resource sucking value via cutting-edge.
                    </p>
                    <h3 className="box-title">David Farnandes</h3>
                    <p className="testi-grid_desig">CEO at Anaton</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testi-grid">
                  <div className="testi-grid_img">
                    <img
                      src="assets/img/testimonial/testi_3_2.jpg"
                      alt="Avatar"
                    />
                    <div className="testi-grid_quote">
                      <img src="assets/img/icon/quote_left_3.svg" alt="quote" />
                    </div>
                  </div>
                  <div className="testi-grid_review">
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                  </div>
                  <div className="testi-grid_content">
                    <p className="testi-grid_text">
                      Objectively visualize error-free technology for B2B
                      alignment. Monotonectally harness an expanded array of
                      models via effective collaboration. Globally synergize
                      resource sucking value via cutting-edge.
                    </p>
                    <h3 className="box-title">Jackline Techie</h3>
                    <p className="testi-grid_desig">CEO at Kormola</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testi-grid">
                  <div className="testi-grid_img">
                    <img
                      src="assets/img/testimonial/testi_3_3.jpg"
                      alt="Avatar"
                    />
                    <div className="testi-grid_quote">
                      <img src="assets/img/icon/quote_left_3.svg" alt="quote" />
                    </div>
                  </div>
                  <div className="testi-grid_review">
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                  </div>
                  <div className="testi-grid_content">
                    <p className="testi-grid_text">
                      Objectively visualize error-free technology for B2B
                      alignment. Monotonectally harness an expanded array of
                      models via effective collaboration. Globally synergize
                      resource sucking value via cutting-edge.
                    </p>
                    <h3 className="box-title">Abraham Khalil</h3>
                    <p className="testi-grid_desig">CEO at Anatora</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testi-grid">
                  <div className="testi-grid_img">
                    <img
                      src="assets/img/testimonial/testi_3_4.jpg"
                      alt="Avatar"
                    />
                    <div className="testi-grid_quote">
                      <img src="assets/img/icon/quote_left_3.svg" alt="quote" />
                    </div>
                  </div>
                  <div className="testi-grid_review">
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                    <i className="fa-solid fa-star-sharp" />
                  </div>
                  <div className="testi-grid_content">
                    <p className="testi-grid_text">
                      Objectively visualize error-free technology for B2B
                      alignment. Monotonectally harness an expanded array of
                      models via effective collaboration. Globally synergize
                      resource sucking value via cutting-edge.
                    </p>
                    <h3 className="box-title">Md Sumon Mia</h3>
                    <p className="testi-grid_desig">CEO at Rimasu</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <button
              data-slider-prev="#testiSlider3"
              className="slider-arrow style3 slider-prev"
            >
              <i className="far fa-arrow-left" />
            </button>
            <button
              data-slider-next="#testiSlider3"
              className="slider-arrow style3 slider-next"
            >
              <i className="far fa-arrow-right" />
            </button>
          </div>
        </div>
      </section>

      {/* <div className="scroll-top">
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            transition: "stroke-dashoffset 10ms linear 0s",
            strokeDasharray: "307.919, 307.919",
            strokeDashoffset: "307.919"
          }}
        />
      </svg>
    </div> */}
    </>
  );
};
export default Home;
