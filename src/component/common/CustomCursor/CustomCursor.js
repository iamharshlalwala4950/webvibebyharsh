import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  useGSAP(() => {
    // Disable completely on touch devices / tablets
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;

    // Use GSAP's optimized quickSetter / quickTo for 60fps tracking
    const xDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });

    const xRing = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power2.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power2.out" });

    // Center the origins
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const onMouseMove = (e) => {
      // Fade in on first movement
      gsap.to([dot, ring], { opacity: 1, duration: 0.3, overwrite: "auto" });

      xDot(e.clientX);
      yDot(e.clientY);

      xRing(e.clientX);
      yRing(e.clientY);
    };

    const onMouseDown = () => {
      gsap.to(ring, { scale: 0.75, duration: 0.15, ease: "power2.out" });
      gsap.to(dot, { scale: 1.4, duration: 0.15, ease: "power2.out" });
    };

    const onMouseUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.25, ease: "back.out(2)" });
      gsap.to(dot, { scale: 1, duration: 0.25, ease: "back.out(2)" });
    };

    const onMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    };

    // Attach hover expansions dynamically to interactive targets
    const attachHoverEvents = () => {
      const targets = document.querySelectorAll(
        "a, button, input, textarea, .actionButton, .menuItem, .languageContainer, .ProjectCard, .custom-swiper-prev, .custom-swiper-next, .backToTopProgress"
      );

      targets.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(ring, {
            scale: 1.8,
            borderColor: "#fb4e4e",
            backgroundColor: "rgba(251, 78, 78, 0.12)",
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(dot, {
            scale: 0.4,
            opacity: 0.6,
            duration: 0.2,
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(ring, {
            scale: 1,
            borderColor: "rgba(255, 255, 255, 0.35)",
            backgroundColor: "transparent",
            duration: 0.35,
            ease: "power2.out",
          });
          gsap.to(dot, {
            scale: 1,
            opacity: 1,
            duration: 0.25,
          });
        });
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.body.addEventListener("mouseleave", onMouseLeave);

    attachHoverEvents();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.body.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="custom-cursor-dot" />
      <div ref={cursorRingRef} className="custom-cursor-ring" />
    </>
  );
}