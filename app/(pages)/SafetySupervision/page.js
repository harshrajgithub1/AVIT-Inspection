"use client";

import React from "react";
import Link from "next/link";
import Sidebar from "../../components/SIDEBAR/SIDEBAR";
const SafetySupervision = () => {
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
            <h1 className="breadcumb-title">Safety Supervision</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Safety Supervisions</li>
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
                  <h2 className="h3 page-title">Safety Supervisions</h2>
                  <p>
                    Total Safety’s supervisory capabilities include turnaround
                    safety planning, review safety plans for high-risk work,
                    atmospheric monitoring, daily field auditing of personnel
                    and equipment, conducting safety meetings, investigating all
                    accidents, incidents and near-misses, managing injury cases,
                    training contractors on safety plans.
                  </p>
                  <p>
                    <strong>
                      Our Safety Supervisors can provide solutions supporting
                      turnaround projects including:
                    </strong>
                  </p>
                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <div className="checklist style3">
                        <ul>
                          <li>
                            <i className="fas fa-octagon-check" />
                            Start-up and turnaround safety training
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" />
                            Electrical Safety
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" />
                            Crane & rigging safety
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" />
                            Atmospheric monitoring
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" />
                            Daily ﬁeld auditing of personnel and equipment
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" />
                            Conducting safety meetings
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" />
                            Investigating all accidents, incidents and near
                            misses
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" />
                            Managing injury cases
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" />
                            General Safety OSHA 1910
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p>
                    <strong>Safety Supervisor Qualifications</strong>
                  </p>
                  <p>
                    We personally hand pick the industry’s best qualified and
                    most experienced safety supervisors specialized for each
                    specific job assignment.
                  </p>
                  <p>
                    All full-time Safety Supervisors are tenured employees and
                    have completed supervisor training, conﬁned space rescue
                    training, Certiﬁed Occupational Safety Specialist (COSS),
                    OSHA 7300, OSHA 7115 and OSHA 30, customer service training,
                    conﬂict and confrontation resolution training, and training
                    on dealing with difficult people. They utilize our exclusive
                    field procedures to ensure your project runs safely and
                    efficiently. Here are some benefits of using our
                    professionals:
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-4">
            <Sidebar />
            </div>

            <div className="row">
                    <div className="col-md-12 mb-30">
                      <div className="checklist style3">
                        <ul>
                          <li>
                            <i className="fas fa-octagon-check" />
                            Dedicated management oversight of each project and personnel
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" />
                            Client and project-specific training and credentials are obtained
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" />
                            Creates a strong focus on field worker safety on a specific project
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" />
                            Allows other plant safety personnel to maintain focus on their respective duties
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" />
                            Brings new ideas along with industry best practices to a given location or project
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SafetySupervision;
