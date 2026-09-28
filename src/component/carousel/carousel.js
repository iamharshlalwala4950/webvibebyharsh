import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import sliderVector from "../../assets/images/vector/slidervector.png";
import removeBg from "../../assets/images/heroProfilepng.png";
import "../carousel/carousel.css";

gsap.registerPlugin(ScrollTrigger);

export default function Carousel() {
  const containerRef = useRef(null);
  const heroImageRef = useRef(null);
  const quickLinkRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".mainHero", { xPercent: -50, x: 0 });

      const mm = gsap.matchMedia();
      const introTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      introTl
        .fromTo(
          ".sliderImg",
          { scale: 1.15, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.4, ease: "power2.out" }
        )
        .fromTo(
          ".tagLine",
          { y: -25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.9"
        )
        .fromTo(
          ".heroQuickLink",
          { y: 20, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
          "-=0.5"
        )
        .fromTo(
          ".mainHero img",
          { y: 70, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" },
          "-=0.6"
        );

      mm.add("(min-width: 992px)", () => {
        introTl.fromTo(
          ".singles",
          { y: 60, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.035,
            ease: "power3.out",
          },
          "-=1.1"
        );

        // Lenis Parallax Scrubbing
        gsap.to(".sliderImg", {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: ".sliderSection",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.to(".BigLetter", {
          yPercent: -25,
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: ".sliderSection",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.to(".heroQuickLink, .tagLine", {
          yPercent: -20,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".sliderSection",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.to(".mainHero", {
          yPercent: -10,
          xPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: ".sliderSection",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      mm.add("(max-width: 991px)", () => {
        introTl.fromTo(
          ".singles:not(.MobileVer)",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.05,
            ease: "power3.out",
          },
          "-=0.9"
        );
      });
    },
    { scope: containerRef }
  );

  // Micro-interaction: Mouse parallax on doodle
  const handleMouseMove = (e) => {
    if (!heroImageRef.current || window.innerWidth < 992) return;
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 18;
    const yPos = (clientY / window.innerHeight - 0.5) * 10;

    gsap.to(heroImageRef.current, {
      x: xPos,
      y: yPos,
      duration: 0.7,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    if (!heroImageRef.current) return;
    gsap.to(heroImageRef.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    if (window.lenis && typeof window.lenis.scrollTo === "function") {
      window.lenis.scrollTo("#workMe", {
        offset: -80,
        duration: 1.3,
      });
    } else {
      const target = document.getElementById("workMe");
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div ref={containerRef}>
      <section id="topcasual"></section>
      <section
        className="sliderSection"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="home-hero">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={sliderVector}
                  alt="Carousel slide"
                  className="img-fluid sliderImg"
                />
                <div className="carousel-caption">
                  <div className="hero-intro-subtitle-wrapper">
                    {/* Centered Minimal Tagline */}
                    <div className="tagLine">
                      <div className="intro-subtitle-line"></div>
                      <h5 className="home-hero-subtitle">
                        TURNING IDEAS INTO HIGH-PERFORMANCE WEBSITES
                      </h5>
                      <div className="intro-subtitle-line rightBorder"></div>
                    </div>

                    {/* Clean Centered Quick-Access Pill */}
                    <a
                      ref={quickLinkRef}
                      href="#workMe"
                      className="heroQuickLink"
                      onClick={handleScrollToProjects}
                      aria-label="View Selected Works"
                    >
                      <span className="liveDot"></span>
                      <span>Featured Work</span>
                      <i className="fas fa-arrow-up"></i>
                    </a>

                    {/* Giant Lettering */}
                    <div className="BigLetter">
                      <div className="singles">H</div>
                      <div className="singles">A</div>
                      <div className="singles">R</div>
                      <div className="singles">S</div>
                      <div className="singles">H</div>
                      <div className="singles MobileVer"></div>
                      <div className="singles MobileVer">L</div>
                      <div className="singles MobileVer">A</div>
                      <div className="singles MobileVer">L</div>
                      <div className="singles MobileVer">W</div>
                      <div className="singles MobileVer">A</div>
                      <div className="singles MobileVer">L</div>
                      <div className="singles MobileVer">A</div>
                    </div>
                  </div>
                </div>

                {/* Centered Doodle Portrait */}
                <div className="mainHero">
                  <img
                    ref={heroImageRef}
                    src={removeBg}
                    className="img-fluid"
                    loading="lazy"
                    alt="Harsh Lalwala"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}