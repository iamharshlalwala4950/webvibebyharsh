import SmoothScroll from './component/common/SmoothScroll';
import Navbar from './component/header/Navbar';
import Carousel from './component/carousel/carousel';
import Footer from './component/footer/footer';
import Aboutus from './component/aboutus/aboutus';
import Service from './component/services/service';
import Aboutusdetails from './component/aboutusdetails/aboutusdetails'; 
import Myproject from './component/myprojects/myproject';
import MySkills from './component/myskills/skill';
import Testimonials from './component/testimonials/testimonials';
import Individualskills from './component/individualskills/individualskills';
import BackToTop from './component/common/BackToTop/BackToTop';
import CustomCursor from './component/common/CustomCursor/CustomCursor';
import InteractiveBackground from './component/common/InteractiveBackground/InteractiveBackground'; 
import QuickCall from './component/common/QuickCall/QuickCall';

function App() {
  return (
    <SmoothScroll>
      <InteractiveBackground />
      <CustomCursor />
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
      <QuickCall />
      <BackToTop />
    </SmoothScroll>
  );
}

export default App;