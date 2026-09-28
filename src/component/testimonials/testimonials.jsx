import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonials.css";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const containerRef = useRef(null);

  // Entrance animations tied to Lenis ScrollTrigger
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".tesimonials",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".tesimonials .headingSection h2",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
      )
        .fromTo(
          ".tesimonials .headingBar",
          { scaleX: 0, opacity: 0, transformOrigin: "left center" },
          { scaleX: 1, opacity: 1, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".tesimonials .headingSection label",
          { x: 20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          "-=0.4"
        )
        .fromTo(
          ".testimonialDiv",
          { y: 40, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        );
    },
    { scope: containerRef }
  );

  // Smooth slide content transition on every slide change
  const handleSlideChange = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (activeSlide) {
      const text = activeSlide.querySelector(".inner-testimonial p");
      const author = activeSlide.querySelector(".inner-testimonial h2");

      gsap.fromTo(
        [text, author],
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.1, ease: "power2.out" }
      );
    }
  };

  return (
    <div ref={containerRef}>
      <section className="tesimonials section-gap">
        <div className="WrapperContainer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 headingSection">
                <h2>Voices of My Clients</h2>
                <div className="headingBar"></div>
                <label>Testimonials</label>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation={{
                    nextEl: ".custom-swiper-next",
                    prevEl: ".custom-swiper-prev",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".custom-swiper-pagination",
                  }}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  loop={true}
                  onSlideChange={handleSlideChange}
                  className="testimonialDiv"
                >
                  <SwiperSlide>
                    <div className="inner-testimonial">
                      <p>
                        Working with Harsh was a game-changer for our business. He truly understood our brand and delivered a website that reflects the quality and professionalism of our products. From design layout to user experience, everything was handled with precision and creativity. As a company dealing in home, hospital, and hotel linen products, we needed a digital presence that speaks trust and clarity—and Harsh gave us exactly that. I highly recommend him to anyone looking for a professional and reliable web designer.
                      </p>
                      <h2>~ Dhruv Kapadia, Owner, Chhabildas Enterprise.</h2>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="inner-testimonial">
                      <p>
                        Our business needed a website that was both visually appealing and user-friendly, and he delivered beyond our expectations. The site is fast, responsive, and optimized for SEO, bringing in more traffic than ever before. Thank you, Harsh, for your incredible work!
                      </p>
                      <h2>~ Rohan Desai, Owner, Stellar Logistics</h2>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="inner-testimonial">
                      <p>
                        Harsh’s expertise and professionalism shine through in every aspect of his work. He listened carefully to our needs, suggested innovative ideas, and created a website that stands out in our industry. His quick turnaround and commitment to quality have been impressive. I couldn’t be happier with the results!
                      </p>
                      <h2>~ Simran Kaur, CEO, Blissful Bakes</h2>
                    </div>
                  </SwiperSlide>

                  {/* Custom Controls Bar */}
                  <div className="testimonialControls">
                    <div className="custom-swiper-pagination"></div>
                    <div className="navArrows">
                      <button
                        type="button"
                        className="custom-swiper-prev"
                        aria-label="Previous Slide"
                      >
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      <button
                        type="button"
                        className="custom-swiper-next"
                        aria-label="Next Slide"
                      >
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}