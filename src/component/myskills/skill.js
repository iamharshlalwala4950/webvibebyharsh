import React from 'react'
import './skill.css'
import html5 from "../../assets/images/icons/html5.png";
import css3 from "../../assets/images/icons/css3.png";
import js from "../../assets/images/icons/js.png";
import jquery from "../../assets/images/icons/jquery.png";
import bootstrap from "../../assets/images/icons/bootstrap.png";
import aspnet from "../../assets/images/icons/aspnet.png";
import seo from "../../assets/images/icons/seo.png";
import googleanalytics from "../../assets/images/icons/googleanalytics.png";

export default function skill() {
    const skills = [
        {
            id: 1,
            title: "HTML 5",
            SkillImage: html5,
            alt: "HTML 5",
        },
        {
            id: 2,
            title: "CSS 3",
            SkillImage: css3,
            alt: "CSS 3",
        },
        {
            id: 3,
            title: "JavaScript",
            SkillImage: js,
            alt: "JavaScript",
        },
        {
            id: 4,
            title: "jQuery",
            SkillImage: jquery,
            alt: "jQuery",
        },
        {
            id: 5,
            title: "Bootstrap",
            SkillImage: bootstrap,
            alt: "Bootstrap",
        },
        {
            id: 6,
            title: "ASP.NET",
            SkillImage: aspnet,
            alt: "ASP.NET",
        },
        {
            id: 7,
            title: "Basic SEO",
            SkillImage: seo,
            alt: "Basic SEO",
        },
        {
            id: 8,
            title: "Google Analytics",
            SkillImage: googleanalytics,
            alt: "Google Analytics",
        },
    ];

    return (
        <>
            <section className="myLanguage">
                <div className="WrapperContainer">
                    <div className="container-fluid">
                        <div className="row">
                            {skills.map((skill) => (
                                <div key={skill.id} className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div
                                        className="languageContainer"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title={skill.title}
                                    >
                                        <img
                                            src={skill.SkillImage}
                                            alt={skill.alt}
                                            className="img-fluid"
                                        />
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
