import React from 'react'
import './service.css'

export default function service() {
    return (
        <>
            <section className="serviceSection section-gap" id="serviceME">
                <div className="WrapperContainer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 headingSection">
                                <h2>Transforming Ideas into Reality</h2>
                                <div className="headingBar"></div>
                                <label>Services</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ServiceAccordian">
                                    <div className="accordion" id="accordionExample">
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <div className="mb-0">
                                                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        UI/UX Design
                                                    </button>
                                                    <i className="fas fa-chevron-right"></i>
                                                </div>
                                            </div>
                                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p><i className="fas fa-brain"></i>As a skilled <span>UI/UX designer</span>, I help clients craft <span>visually stunning</span> and <span>user-friendly designs</span> that elevate their brand identity. By understanding <span>user behavior</span> and applying <span>modern design principles,</span> I create <span>intuitive interfaces</span> that enhance <span>engagement</span> and drive <span>conversions.</span> Together, we can transform your ideas into seamless digital experiences.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <div className="mb-0">
                                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Web Design
                                                    </button>
                                                    <i className="fas fa-chevron-right"></i>
                                                </div>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p><i className="fas fa-laptop-code"></i>As an <span>experienced web designer,</span> I specialize in creating <span>responsive, visually appealing, and functional websites</span> tailored to your business needs. From <span>layout design to seamless navigation,</span> I ensure every element is optimized for <span>user engagement, mobile compatibility, and high performance</span> across all devices.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree">
                                                <div className="mb-0">
                                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Google Presence & SEO Setup
                                                    </button>
                                                    <i className="fas fa-chevron-right"></i>
                                                </div>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p><i className="fas fa-chart-line"></i>I help you build a strong <span>online footprint</span> by setting up and optimizing your <span>Google My Business</span> profile making your brand more <span>discoverable</span> to potential customers. Alongside this, I implement <span>essential SEO strategies</span> to improve your website’s <span>search engine ranking</span>. To support growth, I integrate <span>Google Analytics</span> to track <span>daily visits, user behavior, and page-wise traffic insights</span> empowering you with <span>data-driven decision-making.</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingFour">
                                                <div className="mb-0">
                                                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        Graphic & Visual Design
                                                    </button>
                                                    <i className="fas fa-chevron-right"></i>
                                                </div>
                                            </div>
                                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p><i className="fas fa-palette"></i>From crafting <span>distinctive logos</span> to designing <span>impactful visuals</span> for both <span>digital and print media</span>, I offer <span>end-to-end graphic design solutions</span> tailored to elevate your brand. This includes <span>social media posts</span> for ads and <span>festivals, professional brochures, banners,</span> and <span>flex designs </span> each created with <span>attention to detail, visual consistency,</span> and <span>creative precision,</span> helping your business <span>stand out across every platform.</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
