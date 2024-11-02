"use client";

import React from "react";
import Link from "next/link";
import Sidebar from "../../components/SIDEBAR/SIDEBAR";
const AuditingConsulting = () => {
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
            <h1 className="breadcumb-title">Auditing & Consulting</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Auditing & Consulting</li>
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
                    src="assets/img/AITphoto/AUDIT.jpeg"
                    alt="Service Image"
                  />
                </div>
                <div className="page-content">
                  <h2 className="h3 page-title">Auditing & Consulting</h2>
                  <p>
                    Identification of the risk of material in a specialized
                    industry should be approached in the same was as in any
                    other audit – by obtaining appropriate understanding of the
                    business and its environment.
                  </p>
<br></br>
                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <div className="checklist style3">
                        <ul>
                          <li>
                            <i className="fas fa-octagon-check" /> Feasibility
                            Audit
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Vendor
                            Assessment / Approval Audit
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Third Party
                            Audit
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Second Party
                            Audit
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Management
                            System Audit
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Quality
                            Assurance Audit
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Solar plant
                            audit
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Consultancy
                            for NSIC etc.
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

export default AuditingConsulting;
