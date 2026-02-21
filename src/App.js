import { useEffect } from "react";
import Navbar from './component/header/Navbar';
import Carousel from './component/carousel/carousel';
import Footer from './component/footer/footer'
import Aboutus from './component/aboutus/aboutus'
import Service from './component/services/service';
import Aboutusdetails from './component/aboutusdetails/aboutusdetails'; 
import Myproject from './component/myprojects/myproject';
import MySkills from './component/myskills/skill';
import Testimonials from './component/testimonials/testimonials';

function App() {
   return (
      <>
         <Navbar />
         <Carousel />
         <Aboutus />
         <Service />
         <Aboutusdetails />
         <Myproject />
         <MySkills />
         <Testimonials />
         <Footer />
      </>
   );
}

export default App;