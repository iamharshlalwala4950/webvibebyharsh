import sliderVector from "../../assets/images/vector/slidervector.png";
import removeBg from "../../assets/images/removeBG.png";
import '../carousel/carousel.css';

export default function carousel() {
    return (
        <>
        <section id="topcasual"></section>
            <section className="sliderSection">
                <div className="home-hero">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={sliderVector} alt="Carousel slide" className="img-fluid sliderImg" />
                                <div className="carousel-caption">
                                    <div className="hero-intro-subtitle-wrapper">
                                        <div className="tagLine">
                                            <div className="intro-subtitle-line leftBorder"></div>
                                            <h5 className="home-hero-subtitle">TURNING IDEAS INTO HIGH-PERFORMANCE WEBSITES</h5>
                                            <div className="intro-subtitle-line rightBorder"></div>
                                        </div>
                                        <div className="BigLetter">
                                            <div className="singles">H</div>
                                            <div className="singles">A</div>
                                            <div className="singles">R</div>
                                            <div className="singles">S</div>
                                            <div className="singles">H</div>
                                            <div className="singles MobileVer"></div>
                                            <div className="singles MobileVer">L</div>
                                            <div className="singles MobileVer">A</div>
                                            <div className="singles MobileVer">L</div>
                                            <div className="singles MobileVer">W</div>
                                            <div className="singles MobileVer">A</div>
                                            <div className="singles MobileVer">L</div>
                                            <div className="singles MobileVer">A</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mainHero">
                                    <img src={removeBg} className="img-fluid" loading="lazy" alt="Harsh Lalwala Doodle Image" />
                                    {/* <img src="https://cdn.prod.website-files.com/66b896e52c6bdb116734267e/66bc51a5c08ca51ab9bd0a94_Intro%20Portrait.png"/> */}
                                </div>
                                {/* <p className="Mysignature">Harsh Lalwala</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
