import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "./testimonials.css";

export default function Testimonials() {
    return (
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
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 4000 }}
                                loop={true}
                                
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

                            </Swiper>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
