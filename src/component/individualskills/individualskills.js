import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../individualskills/individualskills.css";

gsap.registerPlugin(ScrollTrigger);

const SKILLS_DATA = [
  { label: "#React.js Development", value: 90 },
  { label: "#JavaScript (ES6+) / jQuery", value: 90 },
  { label: "#HTML5 / CSS3 / Bootstrap", value: 95 },
  { label: "#Responsive Web Design", value: 95 },
  { label: "#Cross-Browser Compatibility", value: 90 },
  { label: "#Performance Optimization", value: 80 },
  { label: "#SEO Best Practices", value: 75 },
];

export default function Individualskills() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Entrance timeline for Title & Skill rows
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".MYSkillsSection",
          start: "top 78%",
          end: "top 25%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".MYSkillsSection .headingSection h2",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
      )
        .fromTo(
          ".individualSkill",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .fromTo(
          ".skillsBar",
          { scaleX: 0, opacity: 0, transformOrigin: "center center" },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.55"
        );

      // 2. Animated Counter Numbers (0% to target %)
      const counters = containerRef.current.querySelectorAll(".counter-val");
      counters.forEach((counter) => {
        const targetVal = parseInt(counter.getAttribute("data-target"), 10);
        const obj = { val: 0 };

        gsap.to(obj, {
          val: targetVal,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            counter.innerText = `${Math.floor(obj.val)}%`;
          },
        });
      });
    },
    { scope: containerRef }
  );

  // Micro-interaction hover lift
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, { y: -3, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: "power2.out" });
  };

  return (
    <div ref={containerRef}>
      <section className="MYSkillsSection section-gap">
        <div className="WrapperContainer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 headingSection text-center">
                <h2>Technical Expertise</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                {SKILLS_DATA.map((skill, index) => (
                  <div
                    className="individualSkill"
                    key={index}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <label>{skill.label}</label>
                    <div className="skillsBar"></div>
                    <h4 className="counter-val" data-target={skill.value}>
                      0%
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}