"use client";

import React from "react";
import Link from "next/link";
import Sidebar from "@/app/components/SIDEBAR/SIDEBAR";
const FactoryEvaluation = () => {
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
            <h1 className="breadcumb-title">FACTORY EVALUATION</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>FACTORY EVALUATION</li>
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
                    src="assets/img/AITphoto/AUDIT-2.jpeg"
                    alt="Service Image"
                  />
                </div>
                <div className="page-content">
                  <h2 className="h3 page-title">
                    FACTORY EVALUATION / FACTORY AUDIT
                  </h2>
                  <p>
                  <strong>
                    We at AIT Group are evaluating a current or
                    potential supplier. Our Factory Evaluation services will
                    provide you the assurance that you are protecting your brand
                    and reputation.
                  </strong>
</p>

                  <p>
                    We are evaluating manufacturing sites. It is crucial to your
                    business to know that you are sourcing a manufacturing site
                    that employs quality systems and good manufacturing
                    processes. By working with Star Technoyou will gain direct
                    access to well-trained inspectors equipped with the latest
                    evaluation techniques. No matter where your current or
                    potential manufacturing sites are located, our local
                    independent auditors can quickly offer their professional
                    expertise and impartial status to ensure that you are not
                    sacrificing the quality and integrity of your product.
                   </p>
                   <p>
                    During a Factory Evaluation Star Techno will examine your
                    supplier’s capabilities, systems, management, and operating
                    procedures. During the evaluation our trained auditors will
                    inform them of, or reinforce to them, your specific quality
                    requirements. This service ensures that the appropriate
                    suppliers are being selected and that your quality
                    specifications are understood and being met. 
                    </p>
                    <p>
                    Star Techno
                    will work with you to design an evaluation program based on
                    your specific needs and requirements. This could include
                    evaluation of the following aspects:
                  </p>
                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <div className="checklist style3">
                        <ul>
                          <li>
                            <i className="fas fa-octagon-check" /> Quality control system
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Production capability
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Manufacturing process
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Equipment calibration
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Internal training & auditing
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Procurement process
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Raw material management
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Semi-finished and finished product management
                          </li>
                          <li>
                            <i className="fas fa-octagon-check" /> Major markets and customers served
                          </li>
                          <li style={{ listStyleType: 'none', paddingLeft: 0 }}>
        <i className="fas fa-octagon-check" /> Compliance to social code-of-conduct standards:
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
          <li>Management and human resources</li>
          <li>Housekeeping</li>
          <li>Working conditions</li>
        </ul>
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

export default FactoryEvaluation;
