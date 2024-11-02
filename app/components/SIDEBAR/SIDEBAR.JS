

"use client";
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar-area">
                <div className="widget widget_nav_menu">
                  <h3 className="widget_title">All Services</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link href="/Inspection">Inspection</Link>
                      </li>
                      <li>
                        <Link href="/ExpeditingSupervision">
                          Expediting & Supervision
                        </Link>
                      </li>
                      <li>
                        <Link href="/AuditingConsulting">
                          Auditing & Consulting
                        </Link>
                      </li>
                      <li>
                        <Link href="/FactoryEvaluation">
                          Factory Evaluation
                        </Link>
                      </li>
                      <li>
                        <Link href="/ExpertsStaffingTrainings">
                          Experts Staffing & Trainings
                        </Link>
                      </li>
                      <li>
                        <Link href="/NDTServices">NDT Services</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="widget widget_banner"
                  data-bg-src="assets/img/bg/widget_banner.jpg"
                >
                  <div className="widget-banner">
                    <span className="text">CONTACT US NOW</span>
                    <h2 className="title">You Need Help?</h2>
                    <Link href="/Contact" className="th-btn style3">
                      GET A QUOTE
                      <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </aside>
    </>
  );
};

export default Sidebar;
