import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Loader.css";

export default function Loader({ onLoadingComplete }) {
  const containerRef = useRef(null);
  const numberRef = useRef(null);
  const glowRef = useRef(null);
  const [progressVal, setProgressVal] = useState(0);

  useGSAP(
    () => {
      document.body.classList.add("noScroll");
      if (window.lenis) window.lenis.stop();

      const progressObj = { value: 0 };
      const masterTl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
      });

      // Initial HUD setup
      gsap.set(".loaderContent", { opacity: 1, scale: 1 });
      gsap.set(".loaderBrand", { y: 15, opacity: 0 });
      gsap.set(glowRef.current, { scale: 0.6, opacity: 0.25 });

      // 1. Counter and progress track animation
      masterTl
        .to(progressObj, {
          value: 100,
          duration: 2.2,
          ease: "power2.inOut",
          onUpdate: () => {
            const rounded = Math.floor(progressObj.value);
            setProgressVal(rounded);
            if (numberRef.current) {
              numberRef.current.textContent = `${rounded < 10 ? "0" + rounded : rounded}%`;
            }
          },
        })
        .to(
          ".loaderLineFill",
          {
            scaleX: 1,
            duration: 2.2,
            ease: "power2.inOut",
          },
          0
        )
        .to(
          glowRef.current,
          {
            scale: 1.25,
            opacity: 0.55,
            duration: 2.2,
            ease: "power1.out",
          },
          0
        )
        .to(
          ".loaderBrand",
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          0.3
        )
        // 2. Soft HUD dissolution
        .to(".loaderContent", {
          opacity: 0,
          scale: 0.92,
          y: -15,
          duration: 0.45,
          ease: "power3.in",
        })
        .to(
          [glowRef.current, ".loaderGrid"],
          {
            opacity: 0,
            duration: 0.35,
            ease: "power2.in",
          },
          "<"
        )
        // 3. Cinematic Curtain Split & Portfolio Unveil
        .add(() => {
          // Trigger the page entrance slightly before the shutter completely clears
          if (onLoadingComplete) onLoadingComplete();
        })
        .to(
          ".loaderPanel.topPanel",
          {
            yPercent: -100,
            duration: 1.1,
            ease: "power4.inOut",
          },
          "+=0.05"
        )
        .to(
          ".loaderPanel.bottomPanel",
          {
            yPercent: 100,
            duration: 1.1,
            ease: "power4.inOut",
          },
          "<"
        )
        // 4. Clean unlock
        .set(containerRef.current, {
          display: "none",
          onComplete: () => {
            document.body.classList.remove("noScroll");
            if (window.lenis) window.lenis.start();
          },
        });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="preloaderContainer" aria-label="Page Loading">
      {/* Splitting Shutter Curtains */}
      <div className="loaderPanel topPanel">
        <div className="loaderGrid" />
      </div>
      <div className="loaderPanel bottomPanel">
        <div className="loaderGrid" />
      </div>

      {/* Ambient Pulsing Aura Core */}
      <div ref={glowRef} className="loaderAmbientGlow" />

      {/* Central Interactive HUD */}
      <div className="loaderContent">
        <div className="loaderBrand">
          <h3>
            Web Vibe <span>by Harsh</span>
          </h3>
        </div>

        <div className="loaderCounter">
          <span ref={numberRef}>00%</span>
        </div>

        <div className="loaderLineTrack">
          <div
            className="loaderLineFill"
            style={{ transform: `scaleX(${progressVal / 100})` }}
          />
        </div>
      </div>
    </div>
  );
}