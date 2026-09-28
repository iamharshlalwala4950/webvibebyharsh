import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./BackToTop.css";

gsap.registerPlugin(ScrollTrigger);

export default function BackToTop() {
    const buttonRef = useRef(null);
    const progressCircleRef = useRef(null);
    const arrowRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Circle dimensions for stroke-dash calculations: radius = 24
    const radius = 24;
    const circumference = 2 * Math.PI * radius; // ~150.796

    // 1. Initial State Setup
    useGSAP(() => {
        gsap.set(progressCircleRef.current, {
            strokeDasharray: circumference,
            strokeDashoffset: circumference,
        });
        gsap.set(buttonRef.current, {
            autoAlpha: 0,
            scale: 0.5,
            y: 20,
        });
    }, { scope: buttonRef });

    // 2. Track Scroll Distance & Update Progress Ring via Lenis/Scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight - document.documentElement.clientHeight;

            // Visibility Threshold (200px)
            if (scrollTop > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Calculate percentage (0 to 1)
            if (scrollHeight > 0 && progressCircleRef.current) {
                const progress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
                const offset = circumference - progress * circumference;

                gsap.to(progressCircleRef.current, {
                    strokeDashoffset: offset,
                    duration: 0.1,
                    ease: "none",
                    overwrite: "auto",
                });
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [circumference]);

    // 3. Smooth Pop-in / Pop-out Entrance
    useEffect(() => {
        if (!buttonRef.current) return;

        if (isVisible) {
            gsap.to(buttonRef.current, {
                autoAlpha: 1,
                scale: 1,
                y: 0,
                duration: 0.45,
                ease: "back.out(1.7)",
                overwrite: "auto",
            });
        } else {
            gsap.to(buttonRef.current, {
                autoAlpha: 0,
                scale: 0.6,
                y: 15,
                duration: 0.35,
                ease: "power2.in",
                overwrite: "auto",
            });
        }
    }, [isVisible]);

    // 4. Smooth Scroll to Top via Lenis
    const handleScrollToTop = () => {
        gsap.timeline()
            .to(buttonRef.current, {
                scale: 0.9,
                duration: 0.1,
                ease: "power1.in",
            })
            .to(buttonRef.current, {
                scale: 1,
                duration: 0.25,
                ease: "back.out(2)",
            });

        if (window.lenis && typeof window.lenis.scrollTo === "function") {
            window.lenis.scrollTo(0, { duration: 1.4 });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    // 5. Hover Micro-Interactions
    const handleMouseEnter = () => {
        gsap.to(buttonRef.current, {
            scale: 1.08,
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(arrowRef.current, {
            y: -3,
            duration: 0.25,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
        });
        gsap.to(arrowRef.current, {
            y: 0,
            duration: 0.25,
            ease: "power2.out",
        });
    };

    return (
        <div
            ref={buttonRef}
            className="backToTopProgress"
            onClick={handleScrollToTop}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            role="button"
            tabIndex={0}
            aria-label="Scroll back to top"
        >
            <svg className="progressRing" width="56" height="56" viewBox="0 0 56 56">
                {/* Background Track */}
                <circle
                    className="progressRingTrack"
                    cx="28"
                    cy="28"
                    r={radius}
                />
                {/* Animated Progress Indicator */}
                <circle
                    ref={progressCircleRef}
                    className="progressRingBar"
                    cx="28"
                    cy="28"
                    r={radius}
                />
            </svg>

            {/* Center Arrow Icon */}
            <div className="arrowContainer" ref={arrowRef}>
                <i className="fas fa-arrow-up"></i>
            </div>
        </div>
    );
}