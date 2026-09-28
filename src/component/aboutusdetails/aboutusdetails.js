import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../aboutusdetails/aboutusdetails.css";
import aboutmyImage from "../../assets/images/aboutme.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Aboutusdetails() {
   const containerRef = useRef(null);
   const imageRef = useRef(null);

   useGSAP(
      () => {
         // 1. Master Entrance Timeline tied to Lenis ScrollTrigger
         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: ".bioSection",
               start: "top 75%",
               end: "top 25%",
               toggleActions: "play none none reverse",
            },
            defaults: { ease: "power3.out" },
         });

         tl.fromTo(".bioSection .headingSection h1", { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
            .fromTo(
               ".bioSection .headingBar",
               { scaleX: 0, opacity: 0, transformOrigin: "left center" },
               { scaleX: 1, opacity: 1, duration: 0.6 },
               "-=0.4",
            )
            .fromTo(".bioSection .headingSection label", { x: 25, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 }, "-=0.4")
            .fromTo(
               ".mainPara p",
               { y: 30, opacity: 0, filter: "blur(4px)" },
               {
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  duration: 0.7,
                  stagger: 0.15,
                  ease: "power2.out",
               },
               "-=0.3",
            )
            .fromTo(".buttonSection", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.5)" }, "-=0.2")
            .fromTo(
               ".myImage img",
               { scale: 0.9, opacity: 0, y: 40 },
               { scale: 1, opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
               "-=0.7",
            );

         // 2. Parallax drift on desktop for the sticky portrait image
         gsap.to(".myImage img", {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
               trigger: ".bioSection",
               start: "top bottom",
               end: "bottom top",
               scrub: 1,
            },
         });
      },
      { scope: containerRef },
   );

   return (
      <div ref={containerRef}>
         <section className="bioSection section-gap">
            <div className="WrapperContainer">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-12 headingSection">
                        <h1>
                           Crafting Exceptional Websites
                           <br /> Since 2021.
                        </h1>
                        <div className="headingBar"></div>
                        <label>About me</label>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="mainPara">
                           <p>
                              Your website is the <span>first impression of your business</span>, and I help you make it count. I’m{" "}
                              <span>Harsh Lalwala</span>, a <span>Front-End Developer</span> with <span>4+ years of experience</span>{" "}
                              building <span>responsive, high-performance websites</span> tailored to your goals.
                           </p>

                           <p>
                              Using <span>React, HTML, CSS, Bootstrap, JavaScript, and jQuery</span>. I create websites that are{" "}
                              <span>clean, fast, scalable, and fully responsive</span>. Every project is developed with{" "}
                              <span>cross-browser compatibility</span> and a strong focus on user experience.
                           </p>

                           <p>
                              I also provide <span>basic SEO optimization</span>, <span>performance improvements</span>, and{" "}
                              <span>Google Analytics integration</span> to help you{" "}
                              <span>track growth and build a strong online presence</span>. My goal is to deliver a website that supports
                              your <span>business success</span>.
                           </p>
                        </div>

                        <div className="buttonSection">
                           <a
                              href="https://drive.google.com/file/d/1THAQjPUHFKY2tcv8K2SJg_a8-O82QSCT/view"
                              rel="noreferrer"
                              target="_blank"
                           >
                              Get My Resume <i className="fas fa-arrow-up"></i>
                              <div className="ButtonBar"></div>
                           </a>
                        </div>
                     </div>

                     <div className="col-lg-6">
                        <div className="myImage">
                           <img ref={imageRef} src={aboutmyImage} alt="Harsh Lalwala About" className="img-fluid" loading="lazy" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}