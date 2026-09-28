import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // 1. Initialize Lenis instance
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // 2. IMPORTANT: Expose the instance globally so BackToTop & Navbar can call .scrollTo()
    window.lenis = lenis;

    // 3. Connect GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // 4. Clean up
    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;