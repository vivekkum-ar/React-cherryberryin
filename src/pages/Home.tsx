import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import animationData from "../assets/animation_lnc3zwzx.json";
// import Lottie from "lottie-react";
import lottie from "lottie-web";
import React from "react";



const Home = () => {
  const lottieRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    var animDuration = 10000;
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,

      animationData
    });

    function animatebodymovin(duration: number) {
      const scrollPosition = window.scrollY;
      const maxFrames = anim.totalFrames;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

      anim.goToAndStop(frame, true);
    }

    /* -------------------------- simple onscoll event -------------------------- */
    const onScroll = () => {
      console.log("Scrolling");
      animatebodymovin(animDuration);
    };

    /* ------------------- adding event listener to lottie div ------------------ */
    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      /* ----------------- removing event listener from lottie div ---------------- */
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-red-700 h-60 w-40" >Home</div>
        {/* <Lottie animationData={ContactUsLottie} loop={true} className="h-12 w-40"/> */}
      <div>
        {/* <Lottie className="lottie-ref" animationData={heroLottie} /> */}
      </div>
      <div className="h-200" ref={lottieRef}></div>
      <div className="h-screen">hello</div>
      <div className="h-screen">hello</div>
    </>
  );
}

export default Home