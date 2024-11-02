"use client";

import React from "react";
import Link from "next/link";
import Sidebar from "@/app/components/SIDEBAR/SIDEBAR";

const ExpertsStaffingTrainings = () => {
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
            <h1 className="breadcumb-title">Experts Staffing & Trainings</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Experts Staffing & Trainings</li>
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
                    src="assets/img/service/service_details.jpg"
                    alt="Service Image"
                  />
                </div>
                <div className="page-content">
                  <h2 className="h3 page-title">
                    Experts Staffing & Trainings
                  </h2>

                  <p>
                    From meeting tight deadlines to managing peak seasons,
                    staffing needs can be unpredictable. That’s why Expert
                    Staffing provides businesses with flexible service options.
                  </p>

                  <p>
                    Looking for a more effective staffing strategy? A top
                    candidate for a full-time hire? A last minute fill in? Our
                    Technical Expert Staffing can help. We have been providing
                    proven talent in technical, safety, human resources and
                    engineering.
                  </p>

                  <p>
                    We are providing our Expert Staffing temporary,
                    temporary-to-hire and direct hire opportunities with the
                    leading companies in our area in the following types of
                    industries:
                  </p>
                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <div className="checklist style3">
                        <ul>
                          <li>
                            <i className="fas fa-octagon-check" /> Third Party
                            Inspection
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Engineering
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Oil and Gas
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Power sector
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Renewable
                            Energy
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Safety
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

export default ExpertsStaffingTrainings;
