import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./QuickCall.css";

export default function QuickCall() {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const textInnerRef = useRef(null);
  const iconRef = useRef(null);
  const auraRef = useRef(null);

  useGSAP(
    () => {
      // 1. Initial button state & entrance animation
      gsap.fromTo(
        buttonRef.current,
        {
          autoAlpha: 0,
          scale: 0.6,
          x: -30,
        },
        {
          autoAlpha: 1,
          scale: 1,
          x: 0,
          duration: 0.8,
          delay: 1.2,
          ease: "back.out(1.7)",
        }
      );

      // 2. Continuous ambient pulse
      gsap.to(auraRef.current, {
        scale: 1.45,
        opacity: 0,
        duration: 2.2,
        repeat: -1,
        ease: "power2.out",
      });
    },
    { scope: buttonRef }
  );

  // Silky Smooth Number Reveal on Hover
  const handleMouseEnter = () => {
    if (window.innerWidth < 768) return;

    const tl = gsap.timeline({ defaults: { overwrite: "auto" } });

    // Expand container pill
    tl.to(
      buttonRef.current,
      {
        maxWidth: 220,
        paddingRight: 20,
        duration: 0.45,
        ease: "power3.out",
      },
      0
    )
      // Expand text wrapper smoothly
      .to(
        textRef.current,
        {
          maxWidth: 160,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        },
        0
      )
      // Slide and de-blur text digits
      .fromTo(
        textInnerRef.current,
        {
          x: -12,
          opacity: 0,
          filter: "blur(4px)",
        },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.4,
          ease: "power2.out",
        },
        0.08
      )
      // Handset tilt
      .to(
        iconRef.current,
        {
          rotate: 15,
          scale: 1.1,
          duration: 0.3,
          ease: "back.out(2)",
        },
        0
      );
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 768) return;

    const tl = gsap.timeline({ defaults: { overwrite: "auto" } });

    // Smoothly tuck digits back inside
    tl.to(
      textInnerRef.current,
      {
        x: -10,
        opacity: 0,
        filter: "blur(3px)",
        duration: 0.25,
        ease: "power2.in",
      },
      0
    )
      .to(
        textRef.current,
        {
          maxWidth: 0,
          opacity: 0,
          duration: 0.35,
          ease: "power3.inOut",
        },
        0.05
      )
      .to(
        buttonRef.current,
        {
          maxWidth: 54,
          paddingRight: 0,
          duration: 0.4,
          ease: "power3.inOut",
        },
        0.05
      )
      .to(
        iconRef.current,
        {
          rotate: 0,
          scale: 1,
          duration: 0.4,
          ease: "elastic.out(1, 0.4)",
        },
        0
      );
  };

  return (
    <a
      ref={buttonRef}
      href="tel:+919904929807"
      className="quickCallBtn"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Call Harsh Lalwala at +91 99049 29807"
    >
      {/* Ambient Pulsing Aura */}
      <div ref={auraRef} className="callAuraRing" />

      {/* Phone Handset Icon */}
      <div ref={iconRef} className="callIconWrap">
        <i className="fas fa-phone-alt"></i>
      </div>

      {/* Outer Clipping Wrapper */}
      <div ref={textRef} className="callTextMask">
        {/* Inner Animating Content */}
        <span ref={textInnerRef} className="callTextNumber">
          +91 99049 29807
        </span>
      </div>
    </a>
  );
}