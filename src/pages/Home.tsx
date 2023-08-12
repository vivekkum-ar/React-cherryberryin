import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import animationData from "../assets/animation_lnc3zwzx.json";
// import Lottie from "lottie-react";
import lottie from "lottie-web";
import { useRef, useEffect } from "react";



const Home = () => {
  const lottieRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    // var animDuration = 10000;
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: false,
      autoplay: false,

      animationData
    });

    function animatebodymovin(duration: number,scrollPosition: number) {
      const maxFrames = anim.totalFrames;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
      // console.log(`${maxFrames} / 100) * (${scrollPosition} / (${duration} / 100)`);

      anim.goToAndStop(frame, true);
    }
        gsap.to(".card-woman", {
          scrollTrigger: {
            trigger: "#red-trigger",
            start: "top top",
            end: "bottom 10%",
            onUpdate: self => {console.log("progress:", self.progress);
            animatebodymovin(10000,self.progress * 10000);},
            toggleActions: "play none none none",
            scrub: 2,
            markers: true,
          },
          scrub: true,
        });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <>
      <div className="bg-red-700 h-60 w-40" id="red-trigger">Home</div>
      <div>
      </div>
      <div className="absolute top-66">
      <div className="h-40 relative top-0 right-0" ref={lottieRef}></div>
      </div>
      <div className="h-96"></div>
      <div className="h-96"></div>
    </>
  );
}

export default Home