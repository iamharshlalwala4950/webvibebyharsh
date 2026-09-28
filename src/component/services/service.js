import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./service.css";

gsap.registerPlugin(ScrollTrigger);

const SERVICES_DATA = [
  {
    id: "uiux",
    title: "UI/UX Design",
    iconClass: "fas fa-brain",
    content: (
      <>
        As a skilled <span>UI/UX designer</span>, I help clients craft{" "}
        <span>visually stunning</span> and <span>user-friendly designs</span>{" "}
        that elevate their brand identity. By understanding{" "}
        <span>user behavior</span> and applying{" "}
        <span>modern design principles,</span> I create{" "}
        <span>intuitive interfaces</span> that enhance <span>engagement</span>{" "}
        and drive <span>conversions.</span> Together, we can transform your ideas
        into seamless digital experiences.
      </>
    ),
  },
  {
    id: "webdesign",
    title: "Web Design",
    iconClass: "fas fa-laptop-code",
    content: (
      <>
        As an <span>experienced web designer,</span> I specialize in creating{" "}
        <span>responsive, visually appealing, and functional websites</span>{" "}
        tailored to your business needs. From{" "}
        <span>layout design to seamless navigation,</span> I ensure every
        element is optimized for <span>user engagement, mobile compatibility, and high performance</span>{" "}
        across all devices.
      </>
    ),
  },
  {
    id: "seo",
    title: "Google Presence & SEO Setup",
    iconClass: "fas fa-chart-line",
    content: (
      <>
        I help you build a strong <span>online footprint</span> by setting up
        and optimizing your <span>Google My Business</span> profile making your
        brand more <span>discoverable</span> to potential customers. Alongside
        this, I implement <span>essential SEO strategies</span> to improve your
        website’s <span>search engine ranking</span>. To support growth, I
        integrate <span>Google Analytics</span> to track{" "}
        <span>daily visits, user behavior, and page-wise traffic insights</span>{" "}
        empowering you with <span>data-driven decision-making.</span>
      </>
    ),
  },
  {
    id: "graphic",
    title: "Graphic & Visual Design",
    iconClass: "fas fa-palette",
    content: (
      <>
        From crafting <span>distinctive logos</span> to designing{" "}
        <span>impactful visuals</span> for both{" "}
        <span>digital and print media</span>, I offer{" "}
        <span>end-to-end graphic design solutions</span> tailored to elevate
        your brand. This includes <span>social media posts</span> for ads and{" "}
        <span>festivals, professional brochures, banners,</span> and{" "}
        <span>flex designs </span> each created with{" "}
        <span>attention to detail, visual consistency,</span> and{" "}
        <span>creative precision,</span> helping your business{" "}
        <span>stand out across every platform.</span>
      </>
    ),
  },
];

export default function Service() {
  const containerRef = useRef(null);
  // Default first accordion item to open
  const [activeItem, setActiveItem] = useState("uiux");

  // Section Entrance Animation
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".serviceSection",
          start: "top 78%",
          end: "top 25%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".headingSection h2",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
      )
        .fromTo(
          ".headingBar",
          { scaleX: 0, opacity: 0, transformOrigin: "left center" },
          { scaleX: 1, opacity: 1, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".headingSection label",
          { x: 20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          "-=0.4"
        )
        .fromTo(
          ".ServiceAccordian .card",
          { y: 40, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.3"
        );
    },
    { scope: containerRef }
  );

  // Toggle Handler with GSAP animation for smooth expand/collapse
  const handleToggle = (id) => {
    const isCurrentlyActive = activeItem === id;
    const nextActive = isCurrentlyActive ? null : id;

    // Animate closing current
    if (activeItem) {
      const activeBody = document.querySelector(`#collapse-${activeItem}`);
      const activeIcon = document.querySelector(`#icon-${activeItem}`);
      if (activeBody) {
        gsap.to(activeBody, {
          height: 0,
          opacity: 0,
          duration: 0.35,
          ease: "power2.inOut",
        });
      }
      if (activeIcon) {
        gsap.to(activeIcon, { rotate: 0, duration: 0.3 });
      }
    }

    // Animate opening next
    if (nextActive) {
      const nextBody = document.querySelector(`#collapse-${nextActive}`);
      const nextIcon = document.querySelector(`#icon-${nextActive}`);
      if (nextBody) {
        gsap.fromTo(
          nextBody,
          { height: 0, opacity: 0 },
          {
            height: "auto",
            opacity: 1,
            duration: 0.45,
            ease: "power3.out",
          }
        );
      }
      if (nextIcon) {
        gsap.to(nextIcon, { rotate: 90, duration: 0.3 });
      }
    }

    setActiveItem(nextActive);
  };

  return (
    <div ref={containerRef}>
      <section className="serviceSection section-gap" id="serviceME">
        <div className="WrapperContainer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 headingSection position-relative">
                <h2>Transforming Ideas into Reality</h2>
                <div className="headingBar"></div>
                <label>Services</label>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="ServiceAccordian">
                  <div className="accordion" id="accordionExample">
                    {SERVICES_DATA.map((item) => {
                      const isOpen = activeItem === item.id;
                      return (
                        <div className="card" key={item.id}>
                          <div className="card-header" id={`heading-${item.id}`}>
                            <div
                              onClick={() => handleToggle(item.id)}
                              style={{ cursor: "pointer", width: "100%" }}
                            >
                              <button
                                className="btn btn-link btn-block text-left"
                                type="button"
                                aria-expanded={isOpen}
                                style={{ pointerEvents: "none" }}
                              >
                                {item.title}
                              </button>
                              <i
                                id={`icon-${item.id}`}
                                className="fas fa-chevron-right"
                                style={{
                                  transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                                  transformOrigin: "center",
                                  transition: "color 0.2s ease",
                                }}
                              ></i>
                            </div>
                          </div>

                          <div
                            id={`collapse-${item.id}`}
                            className="collapse-wrapper"
                            style={{
                              overflow: "hidden",
                              height: isOpen ? "auto" : 0,
                              opacity: isOpen ? 1 : 0,
                            }}
                          >
                            <div className="card-body">
                              <p>
                                <i className={item.iconClass}></i>
                                {item.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}