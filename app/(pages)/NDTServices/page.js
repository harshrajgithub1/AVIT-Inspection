"use client";

import React from "react";
import Link from "next/link";
import Sidebar from "@/app/components/SIDEBAR/SIDEBAR";
const NDTServices = () => {
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
            <h1 className="breadcumb-title">NDT Services</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>NDT Services</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="page-single">
                <div className="page-img">
                  <img
                    src="assets/img/AITphoto/MPT PROCEDURE.jpeg"
                    alt="Service Image"
                  />
                </div>
                <div className="page-content">
                  <h2 className="h3 page-title">NDT Services</h2>
                  <p>
                    <strong>
                      We at AIT Group provides non-destructive
                      testing (ndt), materials test and welding quality (WPS.
                      PQR & WQT)
                    </strong>
                  </p>

                  <p>
                    We help you ensure the reliability and safety of your
                    products, equipment or plant assets with our world-class
                    services in non-destructive testing (NDT), materials testing
                    and welding quality. We understand the processes involved
                    throughout the entire product cycle – from design and
                    manufacture to operation and maintenance – and the frequent
                    need for rapid turnaround times. Our Total Quality Assurance
                    services can support production processes, quality control,
                    and regulatory compliance as well as new construction,
                    pipelines, plant maintenance and scheduled shutdown
                    inspection.
                  </p>

                  <p>
                    Our vast expertise and knowledge in NDT and materials
                    testing means we can select the right techniques and
                    procedures to detect defects and irregularities in your
                    products, equipment, production facilities or plant assets
                    and provide you with necessary data to assist you in making
                    informed decisions.
                  </p>

                  <p>
                    In addition to our non-destructive testing and materials
                    testing, we provide a complete welding support service to
                    help you with your welding requirements, comply with
                    international and national codes and standards, and to enter
                    new markets with our welder training and welder
                    qualification.
                  </p>
                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <div className="checklist style3">
                        <ul>
                          <li>
                            <i className="fas fa-octagon-check" /> Materials
                            testing
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Specialist
                            NDT services
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Welding
                            Services
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" />{" "}
                            Non-destructive consulting
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-4">
            <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NDTServices;
