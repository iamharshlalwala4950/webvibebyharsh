import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./aboutus.css";

gsap.registerPlugin(ScrollTrigger);

export default function Aboutus() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Coordinated Entrance Timeline tied to ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".aboutusSection",
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".SocialPara p",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
        .fromTo(
          ".social-profile-divider",
          { scaleY: 0, opacity: 0, transformOrigin: "top center" },
          { scaleY: 1, opacity: 1, duration: 0.45 },
          "-=0.4"
        )
        .fromTo(
          ".social-icon-list-item",
          { scale: 0.75, opacity: 0, y: 15 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )
        .fromTo(
          ".mycontent p",
          { y: 35, opacity: 0, filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .fromTo(
          ".myUSP",
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            ease: "power2.out",
          },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  // Micro-interaction: Magnetic pull effect on individual social pills
  const handleSocialMouseMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(target, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleSocialMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1.1, 0.4)",
      overwrite: "auto",
    });
  };

  return (
    <div ref={containerRef}>
      <section className="aboutusSection" id="aboutME">
        <div className="WrapperContainer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="SocialPara">
                  <p>Available for Work</p>
                  <div className="social-profile-divider"></div>
                  <div className="social-icons-list">
                    <a
                      href="https://www.linkedin.com/in/harsh-lalwala/"
                      target="_blank"
                      className="social-icon-list-item w-inline-block"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="LinkedIn"
                      rel="noreferrer"
                      onMouseMove={handleSocialMouseMove}
                      onMouseLeave={handleSocialMouseLeave}
                    >
                      <p className="social-icon-list-text">LN</p>
                    </a>
                    <a
                      href="https://wa.me/+919904929807"
                      target="_blank"
                      className="social-icon-list-item w-inline-block"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Whatsapp"
                      rel="noreferrer"
                      onMouseMove={handleSocialMouseMove}
                      onMouseLeave={handleSocialMouseLeave}
                    >
                      <p className="social-icon-list-text">WA</p>
                    </a>
                    <a
                      href="https://www.instagram.com/iamharshlalwala/"
                      target="_blank"
                      className="social-icon-list-item w-inline-block"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Instagram"
                      rel="noreferrer"
                      onMouseMove={handleSocialMouseMove}
                      onMouseLeave={handleSocialMouseLeave}
                    >
                      <p className="social-icon-list-text">IG</p>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100011258599105"
                      target="_blank"
                      className="social-icon-list-item w-inline-block"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Facebook"
                      rel="noreferrer"
                      onMouseMove={handleSocialMouseMove}
                      onMouseLeave={handleSocialMouseLeave}
                    >
                      <p className="social-icon-list-text">FB</p>
                    </a>
                  </div>
                </div>

                <div className="mycontent">
                  <p>
                    Hi, I’m Harsh Lalwala, a <span>Front-End Developer with 4+ years of experience</span> building responsive, user-friendly websites. I specialize in converting ideas into clean, functional, and SEO-ready websites that help businesses grow and create strong online presence.
                  </p>
                </div>

                <div className="myUSP">
                  <ul>
                    <li className="Orange"><i className="fas fa-circle"></i>Creative Designs</li>
                    <li className="Blue"><i className="fas fa-circle"></i>User-Centric Approach</li>
                    <li className="Green"><i className="fas fa-circle"></i>SEO Optimized</li>
                    <li className="Red"><i className="fas fa-circle"></i>Responsive Layouts</li>
                    <li className="Yellow"><i className="fas fa-circle"></i>Timely Delivery</li>

                    <li className="Orange"><i className="fas fa-circle"></i>Creative Designs</li>
                    <li className="Blue"><i className="fas fa-circle"></i>User-Centric Approach</li>
                    <li className="Green"><i className="fas fa-circle"></i>SEO Optimized</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}