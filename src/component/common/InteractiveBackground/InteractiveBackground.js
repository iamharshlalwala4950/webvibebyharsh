import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./InteractiveBackground.css";

export default function InteractiveBackground() {
  const containerRef = useRef(null);
  const glowTorchRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useGSAP(
    () => {
      // Disable interactive tracking on mobile/touch screens
      if (window.matchMedia("(pointer: coarse)").matches) return;

      const torch = glowTorchRef.current;
      const orb1 = orb1Ref.current;
      const orb2 = orb2Ref.current;

      // 60FPS GSAP QuickTo interpolators for fluid mouse tracking
      const xTorch = gsap.quickTo(torch, "x", { duration: 0.6, ease: "power2.out" });
      const yTorch = gsap.quickTo(torch, "y", { duration: 0.6, ease: "power2.out" });

      const xOrb1 = gsap.quickTo(orb1, "x", { duration: 1.4, ease: "power3.out" });
      const yOrb1 = gsap.quickTo(orb1, "y", { duration: 1.4, ease: "power3.out" });

      const xOrb2 = gsap.quickTo(orb2, "x", { duration: 1.8, ease: "power3.out" });
      const yOrb2 = gsap.quickTo(orb2, "y", { duration: 1.8, ease: "power3.out" });

      // Initial center setup
      gsap.set(torch, { xPercent: -50, yPercent: -50, opacity: 0 });
      gsap.set([orb1, orb2], { xPercent: -50, yPercent: -50 });

      // Ambient idle breathing animation
      gsap.to(orb1, {
        scale: 1.15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2, {
        scale: 0.85,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Reveal torch smoothly on first mousemove
        gsap.to(torch, { opacity: 0.22, duration: 0.4, overwrite: "auto" });

        // Torch tracks mouse directly
        xTorch(clientX);
        yTorch(clientY);

        // Ambient orbs drift with inverted parallax
        const offsetX = (clientX - centerX) * 0.05;
        const offsetY = (clientY - centerY) * 0.05;

        xOrb1(centerX + offsetX);
        yOrb1(centerY * 0.6 + offsetY);

        xOrb2(centerX - offsetX * 0.7);
        yOrb2(centerY * 1.3 - offsetY * 0.7);
      };

      const handleMouseLeave = () => {
        gsap.to(torch, { opacity: 0, duration: 0.6 });
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      document.body.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="interactiveBgWrapper" aria-hidden="true">
      {/* Precision Geometric Dark Grid */}
      <div className="bgGridOverlay" />

      {/* Interactive Cursor Torch */}
      <div ref={glowTorchRef} className="bgInteractiveTorch" />

      {/* Floating Deep Ambient Glow Orbs */}
      <div ref={orb1Ref} className="bgAmbientOrb orbRed" />
      <div ref={orb2Ref} className="bgAmbientOrb orbAmber" />
    </div>
  );
}