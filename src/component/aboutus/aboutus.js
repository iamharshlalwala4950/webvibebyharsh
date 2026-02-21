import './aboutus.css'

export default function aboutus() {
    return (
        <>
            <section className="aboutusSection" id="aboutME">
                <div className="WrapperContainer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="SocialPara">
                                    <p>Available for Work</p>
                                    <div className="social-profile-divider"></div>
                                    <div className="social-icons-list">
                                        <a href="https://www.linkedin.com/in/harsh-lalwala/" target="_blank" className="social-icon-list-item w-inline-block" data-toggle="tooltip" data-placement="top" title="LinkedIn" rel="noreferrer">
                                            <p className="social-icon-list-text">LN</p>
                                        </a>
                                        <a href="https://wa.me/+919904929807" target="_blank" className="social-icon-list-item w-inline-block" data-toggle="tooltip" data-placement="top" title="Whatsapp" rel="noreferrer">
                                            <p className="social-icon-list-text">WA</p>
                                        </a>
                                        <a href="https://www.instagram.com/iamharshlalwala4950/" target="_blank" className="social-icon-list-item w-inline-block" data-toggle="tooltip" data-placement="top" title="Instagram" rel="noreferrer">
                                            <p className="social-icon-list-text">IG</p>
                                        </a>
                                        <a href="https://www.facebook.com/profile.php?id=100011258599105" target="_blank" className="social-icon-list-item w-inline-block" data-toggle="tooltip" data-placement="top" title="Facebook" rel="noreferrer">
                                            <p className="social-icon-list-text">FB</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="mycontent">
                                    <p>
                                        Hi, I’m Harsh Lalwala, a <span>Front-End Developer with 5+ years of experience</span> building responsive, user-friendly websites. I specialize in converting ideas into clean, functional, and SEO-ready websites that help businesses grow and create strong online presence.
                                    </p>
                                </div>
                                <div className="myUSP">
                                    <ul>
                                        <li className="Orange"><i className="fas fa-circle"></i>Creative Designs</li>
                                        <li className="Blue"><i className="fas fa-circle"></i>User-Centric Approach</li>
                                        <li className="Green"><i className="fas fa-circle"></i>SEO Optimized</li>
                                        <li className="Red"><i className="fas fa-circle"></i>Responsive Layouts</li>
                                        <li className="Yellow"><i className="fas fa-circle"></i>Timely Delivery</li>

                                        <li className="Orange"><i className="fas fa-circle"></i>Creative Designs</li>
                                        <li className="Blue"><i className="fas fa-circle"></i>User-Centric Approach</li>
                                        <li className="Green"><i className="fas fa-circle"></i>SEO Optimized</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
