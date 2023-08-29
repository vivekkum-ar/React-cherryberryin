import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import animationData from "../assets/animation_lo8jcqf0.json";
import lottie from "lottie-web";
import { useRef, useEffect, useState } from "react";
// Supports weights 100-900
import '@fontsource-variable/outfit';
import Modal from "../components/Modal";
import Card from "../components/Card";
import Neumorphcard from "../components/NeumorphismCard";
import PricingCards from "../components/PricingCards";
import anime from "animejs/lib/anime.js";



interface HomeProps {
  // Add your prop types here
  theme: String;
  updateTheme: Function;
}
const Home: React.FC<HomeProps> = ({ theme }) => {
  const [ModalVisible, setModalVisible] = useState(false);
  const [indexOfColl,setindexOfColl] = useState(0);
  const [Progress, setProgress] = useState(0);

  useEffect(() => {
    // Add or remove the class based on modal visibility
    if (ModalVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
    }

    // Cleanup effect
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [ModalVisible]);
  
  useEffect(() => {
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger-main",
        start: "top top",
        end: "bottom+=50% 20%",
        toggleActions: "play none none none",
        // markers: true,
        scrub: true,
        // pin:true,
      },
    });
    tl2.fromTo(
      ".one-by-one",
      { color: theme != "dark" ? 'black' : 'white' }, // Start with grey text color
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
    document.body.style.overflowX = 'hidden';

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
    anim.goToAndStop(7.5, true);
    gsap.to(".card-woman", {
      scrollTrigger: {
        trigger: "#red-trigger",
        start: "top+=5% top",
        end: "bottom 20%",
        onUpdate: (self) => {
          // console.log("progress:", self.progress);
          animatebodymovin(500, self.progress * 1000);
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
          scrub: true,
          // pin:true,
        },
      });
      tl.to(".para-1", { opacity: 0, x: 20 });
      tl.to(".para-2", { opacity: 1, x: 20, });

      let tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".parent-build-animate",
          start: "top center+=30%",
          end: "bottom+=150% bottom",
          toggleActions: "play none none none",
          // markers: true,
          // scrub:true,
          // pin:true,
        },
      });
      tl3.from(".build-animate", {
        opacity: 0,
        y: "30px",
        // duration: 1,
        stagger: 0.5,
      });

      let tl6 = gsap.timeline({
        scrollTrigger: {
          trigger: ".parent-neumorph",
          start: "top center+=30%",
          end: "bottom+=150% bottom",
          toggleActions: "play none none none",
          // markers: true,
          // scrub:true,
          // pin:true,
        },
      });
      tl6.from(".neumorph", {
        opacity: 0,
        y: "30px",
        // duration: 1,
        stagger: 0.5,
      });


      let tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".demo",
          start: "top bottom-=20%",
          end: "top center-=20%",
          toggleActions: "play none none none",
          // markers: true,
          scrub: true,
          // pin:true,
        },
      });
      tl4.from(".pricing-card", {
        opacity: 0,
        y: "30px",
        // duration: 1,
        stagger: 0.5,
      })

      var animation = anime({
        targets: '#demo-svg path',
        strokeDashoffset: [anime.setDashoffset, 0],
        // strokeDasharray: 20,
        easing: 'easeInOutQuad',
        duration: 6000,
        direction: 'normal',
        loop: false,
        autoplay: false,
        update: function (anim) {
          console.log('progress : ' + Math.round(anim.progress) + '%');
          setProgress(anim.progress);
        }
      });
  
      gsap.to("#demo-svg", {
        scrollTrigger: {
          trigger: "#demo-svg",
          start: "top center",
          end: "bottom bottom",
          onUpdate: (self) => {
            // console.log("anime progress:", self.progress,animation.progress);
            animation.seek(self.progress * animation.duration);
          },
        //   toggleActions: "play none none none",
          // markers: true,
          scrub: true,
          // pin:true,
  
        },
      });
      let tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".card-parent-ourWork-card",
          start: "top center",
          end: "bottom bottom-=20%",
          toggleActions: "play none none none",
          markers: true,
          scrub: true,
          // pin:true,
        }});
        tl5.from(".ourWork-card", {
          opacity: 0,
          y: "30px",
          // duration: 1,
          stagger: 0.5,
        });
      let tl7 = gsap.timeline({
        scrollTrigger: {
          trigger: ".card-parent-examples-title",
          start: "top center",
          end: "bottom bottom-=20%",
          toggleActions: "play none none none",
          markers: true,
          // scrub: true,
          // pin:true,
        }});
        tl7.from(".examples-title", {
          opacity: 0,
          y: "30px",
          // duration: 1,
          stagger: 0.5,
        });
      let tl8 = gsap.timeline({
        scrollTrigger: {
          trigger: ".parent-pricing-card-title",
          start: "top center",
          end: "bottom bottom-=20%",
          toggleActions: "play none none none",
          markers: true,
          // scrub: true,
          // pin:true,
        }});
        tl8.from(".pricing-card-title", {
          opacity: 0,
          y: "30px",
          // duration: 1,
          stagger: 0.5,
        });
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <>
        <Modal ModalVisible = { ModalVisible } updateModalVisible = { setModalVisible } indexOfColl={ indexOfColl }></Modal>
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
      <div className="parent-build-animate border-2 border-red-500 flex flex-col place-content-center bg-white dark:text-white bg-white dark:bg-gray-900 overflow-hidden">
        <p className="my-5 font-bg text-center build-animate dark:text-white bg-white dark:bg-gray-900 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl pb-3 overflow-hidden">
        Your Business, Our Website Expertise
        </p>
        <hr className="build-animate w-60 md:w-fit md:px-60 mb-5 self-center h-0 border-2 border-gray-400" />
        <p className="build-animate mb-8 px-4 md:px-20 text-justify text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 font-bg">At CherryBerry, our focus is on leveraging technology, innovation, and strategic capital to unlock lasting value and foster sustainable economic growth. We are committed to transforming your digital landscape and empowering your brand for a prosperous future.</p>
      </div>
      
      <div className="bg-white dark:bg-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" id="demo-svg" className="hidden md:block" version="1.1" viewBox="0 80 800 300"><path d="M40.657691955566406,329.4469299316406C45.339306030273434,323.36621246337893,105.0702442932129,231.81464416503906,118.6845932006836,228.1016387939453C132.2989421081543,224.38863342285157,250.77426956176757,273.6442245483398,267.5635070800781,267.5635070800781C284.35274459838865,261.48278961181643,383.1150848388672,121.59042785644532,398.5052185058594,126.75634765625C413.8953521728516,131.9222674560547,513.6262750244141,350.54109466552734,524.0657348632812,353.66217041015625C534.5051947021484,356.78324615478516,557.7518200683594,185.5007339477539,572.4962158203125,178.77427673339844C587.2406115722656,172.04781951904297,757.9670971679687,237.78773376464844,769.8056640625,241.55455017089844" fill="none" strokeWidth="4" stroke="url(&quot;#SvgjsLinearGradient1002&quot;)" strokeLinecap="round"></path><defs><linearGradient id="SvgjsLinearGradient1002"><stop stopColor="hsl(184, 74%, 44%)" offset="0"></stop><stop stopColor="hsl(332, 87%, 70%)" offset="1"></stop></linearGradient></defs>
        <text x="20" y="340" className={`text-[9.5px] font-bg font-semibold fill-black dark:fill-gray-300 ${Progress > 0 ? "animate__fadeInLeft animate__animated" : "hidden"}`}>Define Goals and Objectives</text>
        <text x="65" y="221" className={`text-[9.5px] font-bg font-semibold fill-black dark:fill-gray-300 ${Progress >= 24 ? "animate__fadeInLeft animate__animated" : "hidden"}`}>Understand the Target Audience</text>
        <text x="210" y="280" className={`text-[9.5px] font-bg font-semibold fill-black dark:fill-gray-300 ${Progress >= 35 ? "animate__fadeInLeft animate__animated" : "hidden"}`}>Conduct Competitor Analysis</text>
        <text x="175" y="180" className={`text-[9.5px] font-bg font-semibold fill-black dark:fill-gray-300 ${Progress >= 42 ? "animate__fadeInLeft animate__animated" : "hidden"}`}>Choose a Domain Name and Hosting</text>
        <text x="320" y="120" className={`text-[9.5px] font-bg font-semibold fill-black dark:fill-gray-300 ${Progress >= 46 ? "animate__fadeInLeft animate__animated" : "hidden"}`}>Plan Website Structure and Navigation</text>
        <text x="340" y="230" className={`text-[9.5px] font-bg font-semibold fill-black dark:fill-gray-300 ${Progress >= 51 ? "animate__fadeInLeft animate__animated" : "hidden"}`}>Create Engaging Content</text>
        <text x="480" y="365" className={`text-[9.5px] font-bg font-semibold fill-black dark:fill-gray-300 ${Progress >= 56 ? "animate__fadeInRight animate__animated" : "hidden"}`}>Responsive Web Design</text>
        <text x="510" y="175" className={`text-[9.5px] font-bg font-semibold fill-black dark:fill-gray-300 ${Progress >= 70 ? "animate__fadeInRight animate__animated" : "hidden"}`}>Implement SEO Best Practices</text>
        <text x="550" y="290" className={`text-[9.5px] font-bg font-semibold fill-black dark:fill-gray-300 ${Progress >= 62 ? "animate__fadeInRight animate__animated" : "hidden"}`}>Incorporate Branding Elements</text>
        <text x="720" y="255" className={`text-[9.5px] font-bg font-semibold fill-black dark:fill-gray-300 ${Progress >= 100 ? "animate__fadeInRight animate__animated" : "hidden"}`}>Test and Launch</text>
      </svg>
      </div>

      <div className="card-parent-examples-title border-2 border-red-500 flex flex-col place-content-center dark:text-white bg-white dark:bg-gray-900 overflow-hidden">
        <p className="my-5 font-bg text-center examples-title dark:text-white bg-white dark:bg-gray-900 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl pb-3 overflow-hidden">
          Website that grows with your business
        </p>
        <hr className="examples-title w-60 md:w-fit md:px-60 mb-5 self-center h-0 border-2 border-gray-400" />
        <p className="examples-title mb-8 px-4 md:px-20 text-justify text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 font-bg">At CherryBerry, our focus is on leveraging technology, innovation, and strategic capital to unlock lasting value and foster sustainable economic growth. We are committed to transforming your digital landscape and empowering your brand for a prosperous future.</p>
      </div>





      <div className=" dark:text-white bg-white dark:bg-gray-900 overflow-hidden" >
      {/* <!-- https://gist.github.com/goodreds/3579ddfffe439457b5ef9902b5336124 --> */}
<section className="card-parent-ourWork-card dark:text-white bg-white dark:bg-gray-900 flex flex-col justify-center max-w-6xl px-4 mx-auto sm:px-6">

    <div className="flex flex-wrap -mx-4">
        <Card id = {0} setIndexOfColl = {setindexOfColl} indexOfColl = {indexOfColl} ModalVisible = {ModalVisible} updateModalVisible = { setModalVisible } image="https://source.unsplash.com/Lki74Jj7H-U/400x300" title="Title Title" description="Title Title Title Title Title Title Title Title"></Card>
        <Card id = {1} setIndexOfColl = {setindexOfColl} indexOfColl = {indexOfColl} ModalVisible = {ModalVisible} updateModalVisible = { setModalVisible } image="https://source.unsplash.com/Lki74Jj7H-U/400x300" title="Title Title" description="Title Title Title Title Title Title Title Title" category="Technology Startup"></Card>
        <Card id = {2} setIndexOfColl = {setindexOfColl} indexOfColl = {indexOfColl} ModalVisible = {ModalVisible} updateModalVisible = { setModalVisible } image="https://source.unsplash.com/Lki74Jj7H-U/400x300" title="Title Title" description="Title Title Title Title Title Title Title Title" category="Technology Startup"></Card>
    </div>
    <div className="hidden md:flex flex-wrap -mx-4">
        <Card id = {3} setIndexOfColl = {setindexOfColl} indexOfColl = {indexOfColl} ModalVisible = {ModalVisible} updateModalVisible = { setModalVisible } image="https://source.unsplash.com/Lki74Jj7H-U/400x300" title="Title Title" description="Title Title Title Title Title Title Title Title"></Card>
        <Card id = {4} setIndexOfColl = {setindexOfColl} indexOfColl = {indexOfColl} ModalVisible = {ModalVisible} updateModalVisible = { setModalVisible } image="https://source.unsplash.com/Lki74Jj7H-U/400x300" title="Title Title" description="Title Title Title Title Title Title Title Title" category="Technology Startup"></Card>
        <Card id = {5} setIndexOfColl = {setindexOfColl} indexOfColl = {indexOfColl} ModalVisible = {ModalVisible} updateModalVisible = { setModalVisible } image="https://source.unsplash.com/Lki74Jj7H-U/400x300" title="Title Title" description="Title Title Title Title Title Title Title Title" category="Technology Startup"></Card>
    </div>
</section>
      </div>



        <Neumorphcard Title="From start to growth" Description="from start to growth.from start to growth.from start to growth."/>

        
      <div className="parent-pricing-card-title border-2 border-red-500 flex flex-col place-content-center bg-white dark:text-white bg-white dark:bg-gray-900 overflow-hidden">
        <p className="my-5 font-bg text-center pricing-card-title dark:text-white bg-white dark:bg-gray-900 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl pb-3 overflow-hidden">
          Select your package
        </p>
        <hr className="pricing-card-title w-60 md:w-fit md:px-60 mb-5 self-center h-0 border-2 border-gray-400" />
        <p className="pricing-card-title mb-8 px-4 md:px-20 text-justify text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 font-bg">At CherryBerry, our focus is on leveraging technology, innovation, and strategic capital to unlock lasting value and foster sustainable economic growth. We are committed to transforming your digital landscape and empowering your brand for a prosperous future.</p>
      </div>


      <PricingCards></PricingCards>



      <div className="h-96"></div>
      <div className="h-96"></div>
    </>
  );
};

export default Home;
