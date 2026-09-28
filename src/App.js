import React, { useRef } from "react";
import { gsap } from "gsap";
import SmoothScroll from "./component/common/SmoothScroll";
import Loader from "./component/common/Loader/Loader";
import InteractiveBackground from "./component/common/InteractiveBackground/InteractiveBackground";
import CustomCursor from "./component/common/CustomCursor/CustomCursor";
import Navbar from "./component/header/Navbar";
import Carousel from "./component/carousel/carousel";
import Footer from "./component/footer/footer";
import Aboutus from "./component/aboutus/aboutus";
import Service from "./component/services/service";
import Aboutusdetails from "./component/aboutusdetails/aboutusdetails";
import Myproject from "./component/myprojects/myproject";
import MySkills from "./component/myskills/skill";
import Testimonials from "./component/testimonials/testimonials";
import Individualskills from "./component/individualskills/individualskills";
import BackToTop from "./component/common/BackToTop/BackToTop";
import QuickCall from "./component/common/QuickCall/QuickCall";

function App() {
  const contentRef = useRef(null);

  // Triggered right as the curtains part
  const handleLoadingComplete = () => {
    gsap.fromTo(
      contentRef.current,
      {
        scale: 0.96,
        filter: "blur(6px)",
        opacity: 0.8,
      },
      {
        scale: 1,
        filter: "blur(0px)",
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  };

  return (
    <SmoothScroll>
      <Loader onLoadingComplete={handleLoadingComplete} />
      <InteractiveBackground />
      <CustomCursor />
      
      {/* Portfolio Content Wrapper */}
      <div ref={contentRef} id="mainContentWrap" style={{ transformOrigin: "center top" }}>
        <Navbar />
        <Carousel />
        <Aboutus />
        <Service />
        <Aboutusdetails />
        <Individualskills />
        <Myproject />
        <MySkills />
        <Testimonials />
        <Footer />
      </div>

      <QuickCall />
      <BackToTop />
    </SmoothScroll>
  );
}

export default App;