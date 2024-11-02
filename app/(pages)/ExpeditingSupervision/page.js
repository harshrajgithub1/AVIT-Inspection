"use client";

import React from "react";
import Link from "next/link";
import Sidebar from "@/app/components/sidebar";

const ExpeditingSupervision = () => {
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
            <h1 className="breadcumb-title">Expediting & Supervision</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Expediting & Supervision</li>
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
                    src="assets/img/AITphoto/EXPEDITING.jpeg"
                    alt="Service Image"
                  />
                </div>
                <div className="page-content">
                  <h2 className="h3 page-title">Expediting & Supervision</h2>

                  <p>
                    AIT Group Specializing in Expediting as
                    manufacturing and supply chain processes become more complex
                    and competitive, procurement, management and coordination of
                    international projects prove to be increasingly challenging.
                    Our expediting service adds value to your projects through
                    the inspection of manufacturers and assessment of
                    manufacturing production plans and capacity. We are
                    monitoring and expediting project timeline , maintaining
                    Quality control and overseeing the efficient execution of
                    engineering assignments to meet deadlines and deliver
                    top-notch results.
                  </p>

                

                  <div className="checklist style3">
                    <ul>
                      <li>
                      <b>Quality Audits:</b> Evaluation of supplier production potential and quality before an order is placed.
                      </li>
                      <li>
                      <b>Project support and monitoring:</b> Comprehensive support along the entire supply chain, including follow up on major project milestones and deadlines.

                      </li>
                      <li>
                      <b>Production control:</b> Monitoring production progress, manufacturing schedule, supplier workload, and identifying areas of concern.
                      </li>
                      <li>
                      <b>Progress reporting:</b> Verification of contractual conditions and actual project status.
                      </li>
                      <li>
                      <b>Field expediting& Desk Expediting:</b> On-site third-party& second-party inspection, project support and expediter review of actual order status. Offsite monitoring of order progress at specific milestone points
                      </li>
                     
                    
                    </ul>
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

export default ExpeditingSupervision;
