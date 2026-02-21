import React, { useEffect, useState } from "react";
import "./footer.css";

export default function Footer() {
    const [showButton, setShowButton] = useState(false);

    // Show / hide on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Smooth scroll
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Dynamic Year
    const currentYear = new Date().getFullYear();

    return (
        <>
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
                                    <a href="mailto:hlalwala4950@gmail.com">
                                        hlalwala4950@gmail.com
                                    </a>
                                </div>

                                <div className="mysocials">
                                    <a href="https://www.linkedin.com/in/harsh-lalwala/" target="_blank" rel="noreferrer">
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
                                        href="https://www.instagram.com/iamharshlalwala4950/"
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

            {/* Back To Top Button */}
            <div
                className={`back-to-top ${showButton ? "show" : ""}`}
                onClick={scrollToTop}
            >
                <i className="fas fa-angle-up"></i>
            </div>
        </>
    );
}
