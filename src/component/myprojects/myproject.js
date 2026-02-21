import React from 'react'
import './myproject.css';
import onyxpigment from "../../assets/images/projectsHome/OnyxPigment.png";
import BulkFlo from "../../assets/images/projectsHome/BulkFlo.png";
import Fivora from "../../assets/images/projectsHome/Fivora.png";
import Chabildas from "../../assets/images/projectsHome/Chabildas.png";
import jogisafetech from "../../assets/images/projectsHome/jogisafetech2.png";
import RJKapdaaz from "../../assets/images/projectsHome/RJKapdaaz.png";
import atlanticHotel from "../../assets/images/projectsHome/atlanticHotel.png";
import hotelroyal from "../../assets/images/projectsHome/hotelroyal.png";

export default function myproject() {
    const projects = [
        {
            id: 1,
            projectIndustry: "Pigment Manufacturing Industry",
            projectName: "ONYX Pigment PVT. LTD.",
            projectCoverImage: onyxpigment,
            projectDiscription: "A corporate website developed for a leading pigment manufacturer based in Gujarat, India. The website presents product information with a structured, professional layout focused on clarity, global reach, and credibility. Built to be responsive and SEO-ready, it supports international visibility while reflecting the company’s ISO and Chemexcil certifications.",
            projectURL: "https://onyxpigment.com/"
        },
        {
            id: 2,
            projectIndustry: "Industrial Logistics & Chemical Equipment Industry",
            projectName: "Bulk Flo Agencies LLP",
            projectCoverImage: BulkFlo,
            projectDiscription: "A business-focused website developed for a company specializing in spare parts for ISO tanks used in global logistics and chemical transportation. The website clearly presents product offerings, industry expertise, and safety-focused solutions. Designed for performance, accessibility, and clarity, it supports compliance-driven industries and strengthens trust with global clients.",
            projectURL: "https://bulk-flo.com/"
        },
        {
            id: 3,
            projectIndustry: "FINANCIAL SERVICES INDUSTRY",
            projectName: "Fivora Group",
            projectCoverImage: Fivora,
            projectDiscription: "A professional financial services website built to establish credibility and provide clear service information. Designed with a responsive layout, SEO-friendly structure, and fast performance to enhance user trust and online visibility.",
            projectURL: "https://fivoragroup.in/"
        },
        {
            id: 4,
            projectIndustry: "TEXTILE INDUSTRY",
            projectName: "Chhabildas Enterprise",
            projectCoverImage: Chabildas,
            projectDiscription: "A modern textile business website created to showcase product offerings with clarity and consistency. Built for responsiveness, smooth navigation, and SEO readiness to strengthen brand presence across devices.",
            projectURL: "https://chhabildasenterprise.com/"
        },
        {
            id: 5,
            projectIndustry: "process safety Industry",
            projectName: "JOGI SafeTech PVT. LTD.",
            projectCoverImage: jogisafetech,
            projectDiscription: "A professional process safety website built to highlight the company’s commitment to safety, compliance, and operational efficiency. The website features a clean, structured layout with clear navigation for quick access to critical information. Designed to be fast and mobile-friendly, it delivers a smooth and reliable user experience across all devices while reinforcing trust and credibility.",
            projectURL: "https://jogisafetech.com/"
        },
        {
            id: 6,
            projectIndustry: "Textile Industry",
            projectName: "RJ Kapdaaz",
            projectCoverImage: RJKapdaaz,
            projectDiscription: "A modern textile business website created to showcase high-quality linen and uniform products with clarity and professionalism. The website emphasizes quality, affordability, and timely delivery while catering to hospitality and corporate clients. Built with a responsive and performance-focused layout, it ensures seamless browsing across all devices and strengthens brand reliability.",
            projectURL: "https://rjkapdaaz.com/"
        },
        {
            id: 7,
            projectIndustry: "Hospitality Industry",
            projectName: "Hotel Atlantic",
            projectCoverImage: atlanticHotel,
            projectDiscription: "A sleek and modern hospitality website template designed to create a refined digital presence for hotels. The layout highlights services and amenities with elegance and simplicity. Built for speed and mobile responsiveness, the template delivers a smooth browsing experience and has been successfully used by multiple hospitality clients.",
            projectURL: "https://eweb247.com/AtlanticHotel/"
        },
        {
            id: 8,
            projectIndustry: "Hospitality Industry",
            projectName: "Hotel Royal",
            projectCoverImage: hotelroyal,
            projectDiscription: "A sophisticated multi-property hotel website template designed for hotel chains and group properties. The website maintains a consistent brand identity while allowing each property to showcase its unique offerings. Fully responsive and performance-optimized, it provides a seamless user experience and has been adopted by several hospitality businesses to enhance their online presence.",
            projectURL: "https://eweb247.com/HotelRoyal/"
        },
    ];
    return (
        <>
            <section className="MyProjects section-gap" id="workMe">
                <div className="WrapperContainer">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12 headingSection">
                                <h2>Web Wonders I've Built</h2>
                                <div className="headingBar"></div>
                                <label>Projects</label>
                            </div>
                        </div>
                        <div className="row">
                            {projects.map((project) => (
                                <div className="col-md-12 ProjectCard" key={project.id}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="projectImage">
                                                <img
                                                    src={project.projectCoverImage}
                                                    alt={`${project.projectName}`}
                                                    className="img-fluid"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="projectDetails">
                                                <h5>#{project.projectIndustry}</h5>
                                                <h3>{project.projectName}</h3>
                                                <p>{project.projectDiscription}</p>

                                                <div className="buttonSection">
                                                    <a
                                                        href={project.projectURL}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Discover More
                                                        <i className="fas fa-arrow-up" aria-hidden="true"></i>
                                                        <div className="ButtonBar"></div>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
