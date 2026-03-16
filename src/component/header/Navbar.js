import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {

   const [isOpen, setIsOpen] = useState(false);
   const [isFixed, setIsFixed] = useState(false);

   // Toggle Menu
   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   // Close Menu
   const closeMenu = () => {
      setIsOpen(false);
   };

   // Smooth Scroll With Header Offset
   const scrollToSection = (id) => {

      const element = document.getElementById(id);

      if (element) {

         const headerOffset = 90;
         const elementPosition = element.offsetTop - headerOffset;

         window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
         });
      }

      closeMenu();
   };

   // Body Scroll Lock
   useEffect(() => {

      if (isOpen) {
         document.body.classList.add("noScroll");
      } else {
         document.body.classList.remove("noScroll");
      }

   }, [isOpen]);

   // Header Fixed on Scroll
   useEffect(() => {

      const handleScroll = () => {

         if (window.scrollY > 100) {
            setIsFixed(true);
         } else {
            setIsFixed(false);
         }

      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };

   }, []);

   return (

      <header className={`ManiHeader ${isFixed ? "fixed" : ""}`}>

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
               >
                  <div className="LineWrapper">
                     <div className="firstLine"></div>
                  </div>
                  <div className="LineWrapper">
                     <div className="secondLine"></div>
                  </div>
               </div>

            </nav>

            {/* Full Screen Menu */}
            <div className={`fullNavBar ${isOpen ? "open" : ""}`}>

               <div
                  className="menuItem"
                  onClick={() => scrollToSection("topcasual")}
               >
                  <div className="menuItemInner">
                     <p>Home</p>
                     <div className="service-item-overlay"></div>
                  </div>
               </div>

               <div
                  className="menuItem"
                  onClick={() => scrollToSection("aboutME")}
               >
                  <div className="menuItemInner">
                     <p>About</p>
                     <div className="service-item-overlay"></div>
                  </div>
               </div>

               <div
                  className="menuItem"
                  onClick={() => scrollToSection("serviceME")}
               >
                  <div className="menuItemInner">
                     <p>Services</p>
                     <div className="service-item-overlay"></div>
                  </div>
               </div>

               <div
                  className="menuItem"
                  onClick={() => scrollToSection("workMe")}
               >
                  <div className="menuItemInner">
                     <p>Work</p>
                     <div className="service-item-overlay"></div>
                  </div>
               </div>

               <div
                  className="menuItem"
                  onClick={() => scrollToSection("ContactUs")}
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