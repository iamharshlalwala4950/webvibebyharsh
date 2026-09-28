import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./footer.css";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const containerRef = useRef(null);
    const emailBtnRef = useRef(null);

    // GSAP ScrollTrigger entré-animation
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".ContactSection",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                defaults: { ease: "power3.out" },
            });

            tl.fromTo(
                ".ContactSection .headingSection h1",
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 }
            )
                .fromTo(
                    ".communicationBar a",
                    { y: 30, opacity: 0, scale: 0.95 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.4)" },
                    "-=0.4"
                )
                .fromTo(
                    ".mysocials a, .circle-link-separator",
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.06,
                        ease: "power2.out",
                    },
                    "-=0.3"
                )
                .fromTo(
                    ".websiteSignature p",
                    { opacity: 0 },
                    { opacity: 1, duration: 0.6 },
                    "-=0.2"
                );
        },
        { scope: containerRef }
    );

    // Magnetisk hover-effekt på e-mail knappen
    const handleEmailMouseMove = (e) => {
        const btn = emailBtnRef.current;
        if (!btn || window.innerWidth < 768) return;

        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
            x: x * 0.25,
            y: y * 0.25,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
        });
    };

    const handleEmailMouseLeave = () => {
        if (!emailBtnRef.current) return;
        gsap.to(emailBtnRef.current, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.4)",
            overwrite: "auto",
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <div ref={containerRef}>
            <footer className="ContactSection section-gap1" id="ContactUs">
                <div className="WrapperContainer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 headingSection text-center">
                                <h1>
                                    Let<span>’</span>s Work
                                </h1>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="communicationBar">
                                    <a
                                        ref={emailBtnRef}
                                        href="mailto:hlalwala4950@gmail.com"
                                        onMouseMove={handleEmailMouseMove}
                                        onMouseLeave={handleEmailMouseLeave}
                                        style={{ display: "inline-block" }}
                                    >
                                        hlalwala4950@gmail.com
                                    </a>
                                </div>

                                <div className="mysocials">
                                    <a
                                        href="https://www.linkedin.com/in/harsh-lalwala/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                    <div className="circle-link-separator"></div>
                                    <a
                                        href="https://wa.me/+919904929807"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Whatsapp
                                    </a>
                                    <div className="circle-link-separator"></div>
                                    <a
                                        href="https://www.instagram.com/iamharshlalwala/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Instagram
                                    </a>
                                    <div className="circle-link-separator"></div>
                                    <a
                                        href="https://www.facebook.com/profile.php?id=100011258599105"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Facebook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 websiteSignature">
                            <p>
                                Web Vibe by Harsh © {currentYear}. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}