import '../aboutusdetails/aboutusdetails.css';
import aboutmyImage from '../../assets/images/aboutme.jpg';
import 'aos/dist/aos.css';

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
                                        Your website is the <span>first impression of your business</span>, and I help you make it count. I’m <span>Harsh Lalwala</span>, a <span>Front-End Developer</span> with
                                        <span>5+ years of experience</span> building <span>responsive, high-performance websites</span> tailored to your goals.
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
                                    <a href="https://drive.google.com/file/d/14yB-PUkplK8hDkrDf0KjmGj3-H1bJdoJ/view?usp=sharing" rel="noreferrer" target="_blank">
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

            <section className="MYSkillsSection" data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
                <div className="WrapperContainer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 headingSection text-center">
                                <h2>Areas of Expertise</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="individualSkill">
                                    <label>#Front-End Development</label>
                                    <div className="skillsBar"></div>
                                    <h4>95%</h4>
                                </div>
                                <div className="individualSkill">
                                    <label>#Responsive Web Development</label>
                                    <div className="skillsBar"></div>
                                    <h4>90%</h4>
                                </div>
                                <div className="individualSkill">
                                    <label>#HTML / CSS / Bootstrap </label>
                                    <div className="skillsBar"></div>
                                    <h4>95%</h4>
                                </div>
                                <div className="individualSkill">
                                    <label>#JavaScript & jQuery</label>
                                    <div className="skillsBar"></div>
                                    <h4>85%</h4>
                                </div>
                                <div className="individualSkill">
                                    <label>#SEO Optimization</label>
                                    <div className="skillsBar"></div>
                                    <h4>80%</h4>
                                </div>
                                <div className="individualSkill">
                                    <label>#Performance Optimization</label>
                                    <div className="skillsBar"></div>
                                    <h4>80%</h4>
                                </div>
                                <div className="individualSkill">
                                    <label>#Google Analytics Setup</label>
                                    <div className="skillsBar"></div>
                                    <h4>75%</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
