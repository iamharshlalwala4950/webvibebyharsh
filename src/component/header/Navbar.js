import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Navbar.css";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const [isFixed, setIsFixed] = useState(false);

   const navRef = useRef(null);
   const menuTimeline = useRef(null);

   // Toggle Menu
   const toggleMenu = () => {
      setIsOpen((prev) => !prev);
   };

   // Smooth Scroll With Lenis & Header Offset
   // Smooth Scroll With Lenis & Header Offset
   const scrollToSection = (id) => {
      // 1. Immediately close menu and unlock body/Lenis
      setIsOpen(false);
      document.body.classList.remove("noScroll");

      if (window.lenis) {
         window.lenis.start(); // Ensure Lenis ticker is active
      }

      const targetEl = document.getElementById(id);
      if (!targetEl) return;

      // Small delay ensures dropdown reverse animation initiates before scrolling
      setTimeout(() => {
         if (window.lenis && typeof window.lenis.scrollTo === "function") {
            // Lenis can accept selector strings directly and handles its own offset
            window.lenis.scrollTo(`#${id}`, {
               offset: -80,
               duration: 1.2,
               immediate: false,
            });
         } else {
            const headerOffset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = targetEl.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
               top: offsetPosition,
               behavior: "smooth",
            });
         }
      }, 100);
   };

   // Header Fixed on Scroll
   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 100) {
            setIsFixed(true);
         } else {
            setIsFixed(false);
         }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   // Body Scroll Lock & Lenis Pause
   useEffect(() => {
      if (isOpen) {
         document.body.classList.add("noScroll");
         if (window.lenis) window.lenis.stop();
      } else {
         document.body.classList.remove("noScroll");
         if (window.lenis) window.lenis.start();
      }
   }, [isOpen]);

   // Master Menu GSAP Timeline Setup
   useGSAP(
      () => {
         // Set initial hidden states
         gsap.set(".fullNavBar", {
            height: 0,
            opacity: 0,
            display: "none",
         });

         menuTimeline.current = gsap
            .timeline({ paused: true })
            .to(".fullNavBar", {
               display: "block",
               height: "auto",
               opacity: 1,
               duration: 0.45,
               ease: "power3.out",
            })
            .fromTo(
               ".fullNavBar .menuItem",
               {
                  y: -20,
                  opacity: 0,
                  filter: "blur(6px)",
               },
               {
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  duration: 0.4,
                  stagger: 0.06,
                  ease: "power2.out",
               },
               "-=0.25"
            );
      },
      { scope: navRef }
   );

   // Play / Reverse menu animation on state change
   useEffect(() => {
      if (!menuTimeline.current) return;
      if (isOpen) {
         menuTimeline.current.play();
      } else {
         menuTimeline.current.reverse();
      }
   }, [isOpen]);

   // Micro-interaction on Menu Items
   const handleItemMouseEnter = (e) => {
      const text = e.currentTarget.querySelector(".menuItemInner p");
      if (text) {
         gsap.to(text, {
            x: 18,
            duration: 0.3,
            ease: "power2.out",
         });
      }
   };

   const handleItemMouseLeave = (e) => {
      const text = e.currentTarget.querySelector(".menuItemInner p");
      if (text) {
         gsap.to(text, {
            x: 0,
            duration: 0.4,
            ease: "elastic.out(1, 0.4)",
         });
      }
   };

   return (
      <header
         ref={navRef}
         className={`ManiHeader ${isFixed ? "fixed" : ""}`}
      >
         <div className="container-fluid">
            <nav className="navbar navbar-expand-lg">
               {/* Logo */}
               <a
                  className="navbar-brand NavLogo logoSetScreen"
                  href="/"
                  onClick={(e) => {
                     e.preventDefault();
                     scrollToSection("topcasual");
                  }}
               >
                  <h2>Web Vibe by Harsh</h2>
               </a>

               {/* Hamburger */}
               <div
                  className={`actionButton ${isOpen ? "active" : ""}`}
                  onClick={toggleMenu}
                  aria-label="Toggle Navigation"
                  role="button"
                  tabIndex={0}
               >
                  <div className="LineWrapper firstLineWrapper">
                     <div className="firstLine"></div>
                  </div>
                  <div className="LineWrapper secondLineWrapper">
                     <div className="secondLine"></div>
                  </div>
               </div>
            </nav>

            {/* Full Screen Menu */}
            <div className="fullNavBar">
               <div
                  className="menuItem"
                  onClick={() => scrollToSection("topcasual")}
                  onMouseEnter={handleItemMouseEnter}
                  onMouseLeave={handleItemMouseLeave}
               >
                  <div className="menuItemInner">
                     <p>Home</p>
                     <div className="service-item-overlay"></div>
                  </div>
               </div>

               <div
                  className="menuItem"
                  onClick={() => scrollToSection("aboutME")}
                  onMouseEnter={handleItemMouseEnter}
                  onMouseLeave={handleItemMouseLeave}
               >
                  <div className="menuItemInner">
                     <p>About</p>
                     <div className="service-item-overlay"></div>
                  </div>
               </div>

               <div
                  className="menuItem"
                  onClick={() => scrollToSection("serviceME")}
                  onMouseEnter={handleItemMouseEnter}
                  onMouseLeave={handleItemMouseLeave}
               >
                  <div className="menuItemInner">
                     <p>Services</p>
                     <div className="service-item-overlay"></div>
                  </div>
               </div>

               <div
                  className="menuItem"
                  onClick={() => scrollToSection("workMe")}
                  onMouseEnter={handleItemMouseEnter}
                  onMouseLeave={handleItemMouseLeave}
               >
                  <div className="menuItemInner">
                     <p>Work</p>
                     <div className="service-item-overlay"></div>
                  </div>
               </div>

               <div
                  className="menuItem"
                  onClick={() => scrollToSection("ContactUs")}
                  onMouseEnter={handleItemMouseEnter}
                  onMouseLeave={handleItemMouseLeave}
               >
                  <div className="menuItemInner">
                     <p>Contact</p>
                     <div className="service-item-overlay"></div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}