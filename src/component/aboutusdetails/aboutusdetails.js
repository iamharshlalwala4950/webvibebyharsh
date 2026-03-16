import '../aboutusdetails/aboutusdetails.css';
import aboutmyImage from '../../assets/images/aboutme.jpg';

export default function aboutusdetails() {
    return (
        <>
            <section className="bioSection section-gap">
                <div className="WrapperContainer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 headingSection">
                                <h1>Crafting Exceptional Websites<br /> Since 2021.</h1>
                                <div className="headingBar"></div>
                                <label>About me</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mainPara">
                                    <p>
                                        Your website is the <span>first impression of your business</span>, and I help you make it count. I’m <span>Harsh Lalwala</span>, a <span>Front-End Developer</span> with <span>4+ years of experience</span> building <span>responsive, high-performance websites</span> tailored to your goals.
                                    </p>

                                    <p>
                                        Using <span>React, HTML, CSS, Bootstrap, JavaScript, and jQuery</span>.
                                        I create websites that are <span>clean, fast, scalable, and fully responsive</span>.
                                        Every project is developed with <span>cross-browser compatibility</span>
                                        and a strong focus on user experience.
                                    </p>

                                    <p>
                                        I also provide <span>basic SEO optimization</span>,
                                        <span>performance improvements</span>, and
                                        <span>Google Analytics integration</span> to help you
                                        <span>track growth and build a strong online presence</span>.
                                        My goal is to deliver a website that supports your <span>business success</span>.
                                    </p>
                                </div>

                                <div className="buttonSection">
                                    <a href="https://drive.google.com/file/d/1EOPlmflL1T38721nv4FaP8D9wI8G2z2c/view?usp=sharing" rel="noreferrer" target="_blank">
                                        Get My Resume <i className="fas fa-arrow-up"></i>
                                        <div className="ButtonBar"></div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="myImage">
                                    <img src={aboutmyImage} alt="Harsh Lalwala About" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
