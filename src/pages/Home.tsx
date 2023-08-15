import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import animationData from "../assets/animation_lo8jcqf0.json";
import lottie from "lottie-web";
import { useRef, useEffect } from "react";

interface HomeProps {
  // Add your prop types here
  theme : String;
  updateTheme : Function;
}
const Home: React.FC<HomeProps> = ({theme}) => {
  
  useEffect(() => {
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger-main",
        start: "top top",
        end: "bottom+=50% 20%",
        toggleActions: "play none none none",
        // markers: true,
        scrub:true,
        // pin:true,
      },
    });
    tl2.fromTo(
      ".one-by-one",
      { color: theme == "dark" ? 'white' : 'black' }, // Start with grey text color
      {
        color: 'grey', // End with white text color
        duration: 1, // Animation duration in seconds
        stagger: 0.1, // Delay between each word animation
      }
      );
      
    // console.log("changed to:",theme);
  }, [theme])
  

  const lottieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mm = gsap.matchMedia();
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
    /* ------------------------- initializing animation ------------------------- */
    anim.goToAndStop(7.5,true);
    gsap.to(".card-woman", {
      scrollTrigger: {
        trigger: "#red-trigger",
        start: "top+=5% top",
        end: "bottom 20%",
        onUpdate: (self) => {
          console.log("progress:", self.progress);
          animatebodymovin(1000, self.progress * 1000);
        },
        toggleActions: "play none none none",
        // markers: true,
      },
    });

    mm.add("(min-width: 768px)", () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".lottie-trigger",
        start: "top-=10% top",
        end: "bottom-=50% 20%",
        toggleActions: "play none none none",
        // markers: true,
        scrub:true,
        // pin:true,
      },
    });
    tl.to(".para-1", {opacity: 0,x:20});
    tl.to(".para-2", {opacity: 1,x:20,});

    // let tl2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".trigger-main",
    //     start: "top top",
    //     end: "bottom+=50% 20%",
    //     toggleActions: "play none none none",
    //     // markers: true,
    //     scrub:true,
    //     // pin:true,
    //   },
    // });
    // tl2.fromTo(
    //   ".one-by-one",
    //   { color: theme == "dark" ? 'white' : 'black' }, // Start with grey text color
    //   {
    //     color: 'grey', // End with white text color
    //     duration: 1, // Animation duration in seconds
    //     stagger: 0.1, // Delay between each word animation
    //   }
    //   );


    
      let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".build-animate",
        start: "top bottom",
          end: "top center",
        toggleActions: "play none none none",
        // markers: true,
        // scrub:true,
        // pin:true,
      },
    });
      tl3.from(".build-animate",{
        opacity: 0, 
        y: "100px", 
        // duration: 1,
      })
    });

      return () => {
        anim.destroy();
      };
  }, []);

  return (
    <>
      
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="trigger-main mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl dark:text-white pb-3 overflow-hidden "><span className="one-by-one">Empower</span> <span className="one-by-one">Your</span> <span className="one-by-one">Digital</span> <span className="one-by-one">Future</span> <span className="one-by-one">with</span> <span className="one-by-one">CherryBerry🍒</span></h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">At CherryBerry, our focus is on leveraging technology, innovation, and strategic capital to unlock lasting value and foster sustainable economic growth. We are committed to transforming your digital landscape and empowering your brand for a prosperous future.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Contact us
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
              <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                About us
              </a>  
            </div>
          </div>
          <div>
            <iframe className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" src="https://player.vimeo.com/video/878701144?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      </section>

      {/* <div className="bg-red-700 h-60 w-40 font-bold absolute top-8 overflow-x-hidden" id="red-trigger">
        Trigger
      </div> */}
      <div className="bg-white dark:bg-gray-900 w-full top-66 flex flex-row px-32 items-center justify-center lottie-trigger">
        <div className="h-[500px] grow lottie-were-cb" ref={lottieRef}></div>
        <div className=" h-fit">
          <p className="absolute text-grey-900 dark:text-white font-bold text-7xl ps-12 para-1  overflow-hidden">
            Envision, Engage, Excel.
          </p>
          <p className="relative pb-3 text-grey-900 font-bold dark:text-white text-7xl ps-12 para-2 opacity-0  overflow-hidden">
            We are CherryBerry👋
          </p>
        </div>
      </div>
      <div className="flex place-content-center bg-white dark:text-white bg-white dark:bg-gray-900 overflow-hidden">
        {/* <div className="build-animate-trigger absolute border-lg border-red-500">
        </div> */}
        <p className="my-5 text-center build-animate dark:text-white bg-white dark:bg-gray-900 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl pb-3 overflow-hidden">
          Website that grows with your business
        </p>
      </div>

      <div className="h-96"></div>
      <div className="h-96"></div>
    </>
  );
};

export default Home;
