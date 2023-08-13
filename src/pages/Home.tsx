import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import animationData from "../assets/animation_lnc3zwzx.json";
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

      animationData,
    });

    function animatebodymovin(duration: number, scrollPosition: number) {
      const maxFrames = anim.totalFrames;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
      // console.log(`${maxFrames} / 100) * (${scrollPosition} / (${duration} / 100)`);

      anim.goToAndStop(frame, true);
    }
    gsap.to(".card-woman", {
      scrollTrigger: {
        trigger: "#red-trigger",
        start: "top top",
        end: "bottom 20%",
        onUpdate: (self) => {
          console.log("progress:", self.progress);
          animatebodymovin(1000, self.progress * 1000);
        },
        toggleActions: "play none none none",
        markers: true,
      },
    });

    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".lottie-trigger",
        start: "top top",
        end: "bottom-=50% 20%",
        toggleActions: "play none none none",
        markers: true,
        scrub:true,
        pin:true,
      },
    });
    tl.to(".para-1", {opacity: 0,x:20});
    tl.to(".para-2", {opacity: 1,x:20,});

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <>
      <div className="bg-red-700 h-60 w-40 font-bold absolute top-8 overflow-x-hidden" id="red-trigger">
        Trigger
      </div>
      <div className="border-2 w-full top-66 flex flex-row px-32 items-center justify-center lottie-trigger">
        <div className="h-[500px] grow" ref={lottieRef}></div>
        <div className="border-red-500 border-2 h-fit">
          <p className="absolute text-grey-900 font-bold text-7xl border-2 ps-12 para-1">
            Envision, Engage, Excel.
          </p>
          <p className="relative text-grey-900 font-bold text-7xl border-2 ps-12 para-2 opacity-0">
            We are CherryBerry
          </p>
        </div>
      </div>

      <div className="h-96"></div>
      <div className="h-96"></div>
    </>
  );
};

export default Home;
