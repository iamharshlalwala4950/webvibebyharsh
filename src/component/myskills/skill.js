import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./skill.css";

import react from "../../assets/images/icons/react.png";
import html5 from "../../assets/images/icons/html5.png";
import css3 from "../../assets/images/icons/css3.png";
import js from "../../assets/images/icons/js.png";
import bootstrap from "../../assets/images/icons/bootstrap.png";
import aspnet from "../../assets/images/icons/aspnet.png";
import seo from "../../assets/images/icons/seo.png";
import googleanalytics from "../../assets/images/icons/googleanalytics.png";

gsap.registerPlugin(ScrollTrigger);

export default function Skill() {
  const containerRef = useRef(null);

  const skills = [
    { id: 1, title: "React.js", SkillImage: react, alt: "React.js" },
    { id: 2, title: "HTML 5", SkillImage: html5, alt: "HTML 5" },
    { id: 3, title: "CSS 3", SkillImage: css3, alt: "CSS 3" },
    { id: 4, title: "JavaScript", SkillImage: js, alt: "JavaScript" },
    { id: 5, title: "Bootstrap", SkillImage: bootstrap, alt: "Bootstrap" },
    { id: 6, title: "ASP.NET", SkillImage: aspnet, alt: "ASP.NET" },
    { id: 7, title: "Basic SEO", SkillImage: seo, alt: "Basic SEO" },
    { id: 8, title: "Google Analytics", SkillImage: googleanalytics, alt: "Google Analytics" },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        ".languageContainer",
        {
          y: 35,
          scale: 0.92,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.65,
          stagger: {
            grid: "auto",
            from: "start",
            amount: 0.4,
          },
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".myLanguage",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = -(y / (rect.height / 2)) * 10;
    const rotY = (x / (rect.width / 2)) * 10;

    gsap.to(card, {
      rotateX: rotX,
      rotateY: rotY,
      y: -5,
      transformPerspective: 800,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });

    const img = card.querySelector("img");
    if (img) {
      gsap.to(img, {
        scale: 1.1,
        x: rotY * 0.35,
        y: -rotX * 0.35,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      duration: 0.55,
      ease: "elastic.out(1, 0.4)",
      overwrite: "auto",
    });

    const img = card.querySelector("img");
    if (img) {
      gsap.to(img, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.45,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  return (
    <div ref={containerRef}>
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
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={skill.SkillImage}
                      alt={skill.alt}
                      className="img-fluid"
                      loading="lazy"
                    />
                    <span className="skillTitle">{skill.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}