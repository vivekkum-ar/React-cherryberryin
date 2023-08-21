import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import animationData from "../assets/animation_lo8jcqf0.json";
import lottie from "lottie-web";
import { useRef, useEffect } from "react";
// Supports weights 400-700
import '@fontsource-variable/brygada-1918';
import { BusinessPackIcon, PremiumPackIcon, StandardPackIcon } from "../components/iconify";


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
      { color: theme != "dark" ? 'black':'white' }, // Start with grey text color
      {
        color: "grey", // End with white text color
        duration: 1, // Animation duration in seconds
        stagger: 0.5, // Delay between each word animation
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
      // console.log(`₹{maxFrames} / 100) * (₹{scrollPosition} / (₹{duration} / 100)`);

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
        y: "30px", 
        // duration: 1,
        stagger:0.5,
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
            <h1 className="trigger-main font-bg mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-black dark:text-white pb-3 overflow-hidden "><span className="one-by-one">Empower</span> <span className="one-by-one">Your</span> <span className="one-by-one">Digital</span> <span className="one-by-one">Future</span> <span className="one-by-one">with</span> <span className="one-by-one">CherryBerry <img src="/images/logo.png" className="inline-block h-10 md:h-16 mr-3" alt="cherry-berry.in Logo" /> </span></h1>
            <p className="mb-8 text-lg text-justify font-normal text-gray-500 lg:text-xl dark:text-gray-400 font-bg">At CherryBerry, our focus is on leveraging technology, innovation, and strategic capital to unlock lasting value and foster sustainable economic growth. We are committed to transforming your digital landscape and empowering your brand for a prosperous future.</p>
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
      <div className="bg-white dark:bg-gray-900 w-full top-66 flex flex-col-reverse md:flex-row md:px-32 items-center justify-center lottie-trigger">
        <div className="h-[500px] grow lottie-were-cb" ref={lottieRef}></div>
        <div className="h-fit">
          <p className="absolute text-4xl md:text-5xl lg:text-7xl font-bg text-grey-900 dark:text-white font-bold md:ps-12 para-1 overflow-hidden text-center">
            Envision, Engage, Excel.
          </p>
          <p className="relative pb-3 font-bg text-grey-900 font-bold dark:text-white text-4xl md:text-5xl lg:text-7xl ps-12 para-2 opacity-0  overflow-hidden">
            We are CherryBerry👋
          </p>
        </div>
      </div>
      <div className="border-2 border-red-500 flex flex-col place-content-center bg-white dark:text-white bg-white dark:bg-gray-900 overflow-hidden">
        {/* <div className="build-animate-trigger absolute border-lg border-red-500">
        </div> */}
        <p className="my-5 font-bg text-center build-animate dark:text-white bg-white dark:bg-gray-900 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl pb-3 overflow-hidden">
          Website that grows with your business
        </p>
        <hr className="build-animate w-60 md:w-fit md:px-60 mb-5 self-center h-0 border-2 border-gray-400"/>
        <p className="build-animate mb-8 px-4 md:px-20 text-justify text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 font-bg">At CherryBerry, our focus is on leveraging technology, innovation, and strategic capital to unlock lasting value and foster sustainable economic growth. We are committed to transforming your digital landscape and empowering your brand for a prosperous future.</p>
      </div>


      <div className="demo py-2">
  <div className="container">
    <div className="flex md:flex-row flex-col md:gap-8 md:mx-20 mx-5">
      <div className="md:w-1/3 w-full py-4 px-4">
        <div className="pricingTable">
          <div className="pricingTable-header">
            <h3 className="title font-bg">Standard <span className="inline-block">{StandardPackIcon}</span></h3>
          </div>
          <ul className="pricing-content">
            <li>50GB Disk Space</li>
            <li>50 Email Accounts</li>
            <li>50GB Bandwidth</li>
            <li>Maintenance</li>
            <li>15 Subdomains</li>
          </ul>
          <div className="price-value">
            <span className="amount font-bg overflow-hidden">₹9.99/</span>
            <span className="duration font-bg overflow-hidden">month</span>
          </div>
          <div className="pricingTable-signup">
            <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 w-full py-4 px-4">
        <div className="pricingTable red">
          <div className="pricingTable-header">
            <h3 className="title font-bg">Business <span className="inline-block">{BusinessPackIcon}</span></h3>
          </div>
          <ul className="pricing-content">
            <li>50GB Disk Space</li>
            <li>50 Email Accounts</li>
            <li>50GB Bandwidth</li>
            <li>Maintenance</li>
            <li>15 Subdomains</li>
          </ul>
          <div className="price-value">
            <span className="amount font-bg overflow-hidden">₹19.99/</span>
            <span className="duration font-bg overflow-hidden">month</span>
          </div>
          <div className="pricingTable-signup">
            <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
      <div className="md:w-1/3 w-full py-4 px-4">
        <div className="pricingTable green">
          <div className="pricingTable-header">
            <h3 className="title font-bg">Premium <span className="inline-block">{PremiumPackIcon}</span></h3>
          </div>
          <ul className="pricing-content">
            <li>50GB Disk Space</li>
            <li>50 Email Accounts</li>
            <li>50GB Bandwidth</li>
            <li>Maintenance</li>
            <li>15 Subdomains</li>
          </ul>
          <div className="price-value">
            <span className="amount font-bg overflow-hidden">₹29.99/</span>
            <span className="duration font-bg overflow-hidden">month</span>
          </div>
          <div className="pricingTable-signup">
            <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



      <div className="h-96"></div>
      <div className="h-96"></div>
    </>
  );
};

export default Home;
