import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import animationData from "../assets/animation_lo8jcqf0.json";
import lottie from "lottie-web";
import { useRef, useEffect, useState } from "react";
import { BusinessPackIcon, LaptopIcon, PremiumPackIcon, StandardPackIcon } from "../components/iconify";
import anime from "animejs/lib/anime.js"
// Supports weights 100-900
import '@fontsource-variable/outfit';
import Modal from "../components/Modal";
import Card from "../components/Card";


interface HomeProps {
  // Add your prop types here
  theme: String;
  updateTheme: Function;
}
const Home: React.FC<HomeProps> = ({ theme }) => {
  const [Progress, setProgress] = useState(0);
  const [ModalVisible, setModalVisible] = useState(false);
  const [indexOfColl,setindexOfColl] = useState(0);

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
          scrub: true,
          // pin:true,
        },
      });
      tl.to(".para-1", { opacity: 0, x: 20 });
      tl.to(".para-2", { opacity: 1, x: 20, });

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
      tl3.from(".build-animate", {
        opacity: 0,
        y: "30px",
        // duration: 1,
        stagger: 0.5,
      })
      let tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".demo",
          start: "top bottom-=10%",
          end: "top center",
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


    });

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
        // updates++;
        console.log('progress : ' + Math.round(anim.progress) + '%');
        // updateLogEl.value = 'updates : '+updates;
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
          // animatebodymovin(1000, self.progress * 1000);
          animation.seek(self.progress * animation.duration);
        },
        toggleActions: "play none none none",
        markers: true,
        scrub: true,
        // pin:true,

      },
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
      {/* <svg xmlns="http://www.w3.org/2000/svg" id="demo-svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 20 800 300"><path d="M22.745198863934547 142.55594404374492C29.322179772646294 148.8339693529897 29.023227352093727 150.32873558834126 42.4761415900698 161.3900199714793C55.929055828045875 172.45130435461732 49.35207491933412 166.1732790453725 63.10394157786277 175.73979719315898C76.85580823639141 185.30631534094545 68.48510612864402 181.71887230709126 83.73174156565574 190.08957441483867C98.97837700266746 198.46027652258607 90.90662763336407 194.27492292558085 108.84384788889793 200.85190351640117C126.78106814443179 207.42888410722148 119.60617953359194 205.93411787186992 137.5434023322573 209.8205161872996C155.48062513092268 213.7069145027293 147.10992556630677 211.3152875089142 162.65551628489402 212.51109846269023C178.20110700348127 213.70690941646626 165.64504875559714 214.90272037024232 184.18017448801902 213.40794904862773C202.7153002204409 211.91317772701314 194.045647917381 214.30480980709126 218.26089348215964 208.02678449784648C242.4761390469383 201.7487591886017 228.72426730214661 209.22260053788554 256.82591118235496 194.57387312089335C284.9275550625633 179.92514570390117 277.75266899485496 188.29584781164857 302.56582512278464 164.08060224686992C327.37898125071433 139.86535668209126 318.41037875234196 146.14338199133607 331.265379566144 121.92813642655742C344.1203803799461 97.71289086177877 340.5329271735659 110.56789930497538 341.1308275641909 91.43486555253398C341.7287279548159 72.30183180009257 345.6151313565086 77.98194908931784 333.059080738019 64.5290351692332C320.50303011952946 51.07612124914856 322.2967516364565 54.66356682613424 303.46267570872214 51.07612379228007C284.62859978098777 47.4886807584259 289.411858854881 45.3960039599233 276.5568529548159 53.7667060676707C263.70184705475083 62.13740817541809 270.2788225593081 60.34368665849101 264.89765800852683 76.18823011552226C259.5164934577456 92.03277357255351 261.0112647793602 83.06416344478659 260.41335930247214 101.30033643876445C259.8154538255841 119.53650943274232 260.41335930247214 114.45429762040507 263.10394157786277 130.89674909745585C265.7945238532534 147.33920057450663 263.10394157786277 134.48419213131 268.485106128644 150.6276908699168C273.86627067942527 166.77118960852357 267.88719556549296 161.98793562089335 279.2474352302065 179.32724531327617C290.6076748949201 196.66655500565898 282.8348884365867 189.49166385168763 302.56582512278464 202.64561994706523C322.2967618089826 215.79957604244282 312.7302334886701 211.91317772701314 338.44024528880027 218.78911359940898C364.15025708893046 225.66504947180482 350.9963060798159 220.8817954841746 379.69586052317527 223.27342756425273C408.39541496653464 225.66505964433085 397.6330756924461 226.26296512121888 424.5389086188784 225.96400983964335C451.4447415453107 225.66505455806782 435.89915845611796 226.86086551184388 460.41335930247214 222.37656171952617C484.92756014882633 217.89225792720845 469.9798774502586 222.6755220873647 498.0815111579409 212.51109846269023C526.1831448656231 202.34667483801576 514.8229052009096 205.93411278560689 544.718260425519 191.88329084550273C574.6136156501284 177.83246890539857 559.0680122158836 187.1000368578725 587.767576831769 170.35863264237773C616.4671414476544 153.61722842688295 608.9933255296856 159.5962984545522 630.8169542731753 141.65907819901835C652.6405830166649 123.72185794348451 638.8886909268211 132.69046807125142 653.2384630622378 116.54697187577617C667.5882351976544 100.4034756803009 664.8976630947899 112.36162336503398 673.8662706794253 93.22858961259257C682.8348782640606 74.09555586015117 680.144285816144 82.76521070634257 680.144285816144 59.14787061845195C680.144285816144 35.53053053056132 684.3296495856753 40.31378896867167 673.8662706794253 22.376569348920697C663.4028917731753 4.43934972916972 666.0934638760399 11.91319171423645 648.754149097394 5.336211759199017C631.4148343187481 -1.2407681958384167 637.692869800519 -0.044953427365111764 621.8483263434878 2.645629483808392C606.0037828864565 5.336212394981896 612.8797187588524 2.645629483808392 601.2205187263003 13.407960492719525C589.5613186937481 24.170291501630658 593.1487617276024 17.593311546593227 586.8707262458315 34.93262251054179C580.5926907640606 52.27193347449035 583.8811836026024 47.18972039058737 582.3864122809878 65.42589338456523C580.8916409593731 83.66206637854309 579.6958198330711 72.00287651851706 582.3864122809878 89.64114149247538C585.0770047289044 107.27940646643371 581.7885322354149 97.11497775549621 590.4581896247378 118.34068830644023C599.1278470140606 139.56639885738423 592.8497911872378 132.98942080969545 608.3953844489565 153.31827314530742C623.9409777106753 173.64712548091939 615.2713406664044 166.17328413163554 637.094969409894 179.32724531327617C658.9185981533836 192.4812064949168 647.2593981208315 187.39899213944804 673.8662706794253 192.7801566902293C700.473143238019 198.16132124101054 687.0202216885399 195.17178877030742 716.9155870856753 195.47073896561992C746.8109524828106 195.76968916093242 738.4402656338524 197.862360873172 763.5523668708315 193.6770072761668C788.6644681078106 189.49165367916157 782.6853828213524 186.50212120845845 792.2518907966128 182.9146781746043 " fill="none" stroke-width="7" stroke="url(&quot;#SvgjsLinearGradient1000&quot;)" stroke-linecap="round" transform="matrix(0.9975,0,0,0.9975,3.385661561489087,69.08214895725249)" stroke-dasharray="25 37" strokeDashoffset={0} stroke-opacity="1"></path><defs><linearGradient id="SvgjsLinearGradient1000"><stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop><stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg> */}

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
        Your Business, Our Website Expertise
        </p>
        <hr className="build-animate w-60 md:w-fit md:px-60 mb-5 self-center h-0 border-2 border-gray-400" />
        <p className="build-animate mb-8 px-4 md:px-20 text-justify text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 font-bg">At CherryBerry, our focus is on leveraging technology, innovation, and strategic capital to unlock lasting value and foster sustainable economic growth. We are committed to transforming your digital landscape and empowering your brand for a prosperous future.</p>
      </div>
      <div className="bg-white dark:bg-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" id="demo-svg" className="hidden md:block" version="1.1" viewBox="0 80 800 300"><path d="M40.657691955566406,329.4469299316406C45.339306030273434,323.36621246337893,105.0702442932129,231.81464416503906,118.6845932006836,228.1016387939453C132.2989421081543,224.38863342285157,250.77426956176757,273.6442245483398,267.5635070800781,267.5635070800781C284.35274459838865,261.48278961181643,383.1150848388672,121.59042785644532,398.5052185058594,126.75634765625C413.8953521728516,131.9222674560547,513.6262750244141,350.54109466552734,524.0657348632812,353.66217041015625C534.5051947021484,356.78324615478516,557.7518200683594,185.5007339477539,572.4962158203125,178.77427673339844C587.2406115722656,172.04781951904297,757.9670971679687,237.78773376464844,769.8056640625,241.55455017089844" fill="none" stroke-width="4" stroke="url(&quot;#SvgjsLinearGradient1002&quot;)" stroke-linecap="round"></path><defs><linearGradient id="SvgjsLinearGradient1002"><stop stop-color="hsl(184, 74%, 44%)" offset="0"></stop><stop stop-color="hsl(332, 87%, 70%)" offset="1"></stop></linearGradient></defs>
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

      <div className="border-2 border-red-500 flex flex-col place-content-center dark:text-white bg-white dark:bg-gray-900 overflow-hidden">
        {/* <div className="build-animate-trigger absolute border-lg border-red-500">
        </div> */}
        <p className="my-5 font-bg text-center build-animate dark:text-white bg-white dark:bg-gray-900 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl pb-3 overflow-hidden">
          Website that grows with your business
        </p>
        <hr className="build-animate w-60 md:w-fit md:px-60 mb-5 self-center h-0 border-2 border-gray-400" />
        <p className="build-animate mb-8 px-4 md:px-20 text-justify text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 font-bg">At CherryBerry, our focus is on leveraging technology, innovation, and strategic capital to unlock lasting value and foster sustainable economic growth. We are committed to transforming your digital landscape and empowering your brand for a prosperous future.</p>
      </div>





      <div className=" dark:text-white bg-white dark:bg-gray-900 overflow-hidden" >
      {/* <!-- https://gist.github.com/goodreds/3579ddfffe439457b5ef9902b5336124 --> */}
<section className="dark:text-white bg-white dark:bg-gray-900 flex flex-col justify-center max-w-6xl px-4 mx-auto sm:px-6">

    <div className="flex flex-wrap -mx-4 card-parent">
        <Card id = {0} setIndexOfColl = {setindexOfColl} indexOfColl = {indexOfColl} ModalVisible = {ModalVisible} updateModalVisible = { setModalVisible } image="https://source.unsplash.com/Lki74Jj7H-U/400x300" title="Title Title" description="Title Title Title Title Title Title Title Title"></Card>
        <Card id = {1} setIndexOfColl = {setindexOfColl} indexOfColl = {indexOfColl} ModalVisible = {ModalVisible} updateModalVisible = { setModalVisible } image="https://source.unsplash.com/Lki74Jj7H-U/400x300" title="Title Title" description="Title Title Title Title Title Title Title Title" category="Technology Startup"></Card>
        <Card id = {2} setIndexOfColl = {setindexOfColl} indexOfColl = {indexOfColl} ModalVisible = {ModalVisible} updateModalVisible = { setModalVisible } image="https://source.unsplash.com/Lki74Jj7H-U/400x300" title="Title Title" description="Title Title Title Title Title Title Title Title" category="Technology Startup"></Card>
    </div>
    <div className="hidden md:flex flex-wrap -mx-4 card-parent">
        <Card id = {3} setIndexOfColl = {setindexOfColl} indexOfColl = {indexOfColl} ModalVisible = {ModalVisible} updateModalVisible = { setModalVisible } image="https://source.unsplash.com/Lki74Jj7H-U/400x300" title="Title Title" description="Title Title Title Title Title Title Title Title"></Card>
        <Card id = {4} setIndexOfColl = {setindexOfColl} indexOfColl = {indexOfColl} ModalVisible = {ModalVisible} updateModalVisible = { setModalVisible } image="https://source.unsplash.com/Lki74Jj7H-U/400x300" title="Title Title" description="Title Title Title Title Title Title Title Title" category="Technology Startup"></Card>
        <Card id = {5} setIndexOfColl = {setindexOfColl} indexOfColl = {indexOfColl} ModalVisible = {ModalVisible} updateModalVisible = { setModalVisible } image="https://source.unsplash.com/Lki74Jj7H-U/400x300" title="Title Title" description="Title Title Title Title Title Title Title Title" category="Technology Startup"></Card>
    </div>
</section>
      </div>


        
      <div className="border-2 border-red-500 flex flex-col place-content-center bg-white dark:text-white bg-white dark:bg-gray-900 overflow-hidden">
        {/* <div className="build-animate-trigger absolute border-lg border-red-500">
        </div> */}
        <p className="my-5 font-bg text-center build-animate dark:text-white bg-white dark:bg-gray-900 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl pb-3 overflow-hidden">
          Select your package
        </p>
        <hr className="build-animate w-60 md:w-fit md:px-60 mb-5 self-center h-0 border-2 border-gray-400" />
        <p className="build-animate mb-8 px-4 md:px-20 text-justify text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 font-bg">At CherryBerry, our focus is on leveraging technology, innovation, and strategic capital to unlock lasting value and foster sustainable economic growth. We are committed to transforming your digital landscape and empowering your brand for a prosperous future.</p>
      </div>


      <div className="demo py-2">
        <div className="w-screen">
          <div className="flex overflow-hidden md:flex-row flex-col md:gap-8 md:mx-20 mx-5">
            <div className="pricing-card md:w-1/3 w-full py-4 px-4">
              <div className="pricingTable">
                <div className="pricingTable-header">
                  <h3 className="title font-bg">Basic <span className="inline-block">{StandardPackIcon}</span></h3>
                </div>
                <ul className="pricing-content">
                  <li>Basic Hosting Package</li>
                  <li>Essential Email Services</li>
                  <li>Starter Bandwidth</li>
                  <li>Routine Maintenance</li>
                  <li>15 Subdomains</li>
                </ul>
                <div className="price-value">
                  <span className="amount font-bg overflow-hidden">₹2999</span>
                  {/* <span className="amount font-bg overflow-hidden">₹2999/</span> */}
                  {/* <span className="duration font-bg overflow-hidden">month</span> */}
                </div>
                <a href="#" className="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Contact Us
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
                {/* <div className="pricingTable-signup">
            <a href="#">Contact us</a>
          </div> */}
              </div>
            </div>
            <div className="pricing-card md:w-1/3 w-full py-4 px-4">
              <div className="pricingTable red">
                <div className="pricingTable-header">
                  <h3 className="title font-bg">Business <span className="inline-block">{BusinessPackIcon}</span></h3>
                </div>
                <ul className="pricing-content">
                  <li>Expanded Hosting Features</li>
                  <li>Advanced Email Solutions</li>
                  <li>Increased Bandwidth</li>
                  <li>Priority Maintenance Services</li>
                  <li>Extended Subdomains</li>
                </ul>
                <div className="price-value">
                  <span className="amount font-bg overflow-hidden">₹699/</span>
                  <span className="duration font-bg overflow-hidden">month</span>
                </div>
                <a href="#" className="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Contact Us
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="pricing-card md:w-1/3 w-full py-4 px-4">
              <div className="pricingTable green">
                <div className="pricingTable-header">
                  <h3 className="title font-bg">Premium <span className="inline-block">{PremiumPackIcon}</span></h3>
                </div>
                <ul className="pricing-content">
                  <li>Top-tier Hosting Package</li>
                  <li>Enterprise-level Email Solutions</li>
                  <li>Unlimited Bandwidth</li>
                  <li>24/7 Premium Support</li>
                  <li>Unlimited Subdomains</li>
                </ul>
                <div className="price-value">
                  <span className="amount font-bg overflow-hidden">Dynamic* </span>
                  <span className="duration font-bg overflow-hidden">Pricing</span>
                </div>
                <a href="#" className="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Contact Us
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
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
