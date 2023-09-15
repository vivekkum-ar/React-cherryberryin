import Carousel from "./Carousel"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useEffect(() => {
    document.body.style.overflowX = 'hidden';

  // Cleanup effect
  return () => {
    document.body.style.overflowY = 'auto';
  };
}, []);


useLayoutEffect(() => {
  let ctx = gsap.context(() => {
    /* ------------------- ScrollTrigger for animation of title of services page ------------------- */
    let tl13 = gsap.timeline({
      scrollTrigger: {
        trigger: ".parent-aboutUs-MnV-title",
        start: "top center",
        end: "bottom bottom-=20%",
        toggleActions: "play none none none",
        // markers: true,
        // scrub: true,
        // pin:true,
      }
    });
    tl13.from(".aboutUs-MnV-title", {
      opacity: 0,
      y: "30px",
      // duration: 1,
      stagger: 0.3,
    });
    /* ------------------- ScrollTrigger for animation of title of services page ------------------- */
    let tl18 = gsap.timeline({
      scrollTrigger: {
        trigger: ".parent-testimonial-title-2",
        start: "top center",
        end: "bottom bottom-=20%",
        toggleActions: "play none none none",
        // markers: true,
        // scrub: true,
        // pin:true,
      }
    });
    tl18.from(".testimonial-title-2", {
      opacity: 0,
      y: "30px",
      // duration: 1,
      stagger: 0.3,
    });
    /* ------------------- ScrollTrigger for animation of title of services page ------------------- */
    let tl16 = gsap.timeline({
      scrollTrigger: {
        trigger: ".parent-about-game-title",
        start: "top center",
        end: "bottom bottom-=20%",
        toggleActions: "play none none none",
        // markers: true,
        // scrub: true,
        // pin:true,
      }
    });
    tl16.from(".about-game-title", {
      opacity: 0,
      y: "30px",
      // duration: 1,
      stagger: 0.3,
    });

    /* ------------------- ScrollTrigger for animation of cards of services page ------------------- */
    let tl14 = gsap.timeline({
      scrollTrigger: {
        trigger: ".parent-MnV-card",
        start: "top center+=30%",
        end: "bottom center",
        toggleActions: "play none none none",
        markers: true,
        // scrub: true,
        // horizontal: true,
        // pin:true,
      }
    });
    tl14.from(".MnV-card", {
      opacity: 0,
      y: "30px",
      // duration: 1,
      // fastScrollEnd: "100px",
      // preventOverlaps: true,
      stagger: 0.5,
    });
    /* ------------------- ScrollTrigger for animation of cards of services page ------------------- */
    let tl17 = gsap.timeline({
      scrollTrigger: {
        trigger: ".parent-aboutUs-game-card",
        start: "top center+=30%",
        end: "bottom center",
        toggleActions: "play none none none",
        markers: true,
        // scrub: true,
        // horizontal: true,
        // pin:true,
      }
    });
    tl17.from(".aboutUs-game-card", {
      opacity: 0,
      y: "30px",
      // duration: 1,
      // fastScrollEnd: "100px",
      // preventOverlaps: true,
      stagger: 0.6,
    });

  });
  return () => ctx.revert(); // <- cleanup!
}, []);



  return (
    <>
    <div className="sm:flex md:flex-row-reverse items-center max-w-screen-xl mx-auto">
  
  <div className="sm:w-1/2 p-5 md:order-1 order-1">
    <div className="text w-full flex flex-col">
      <span className="text-gray-500 border-b-2 border-blue-700 uppercase self-center md:self-auto text-center md:text-left w-2/5 md:w-1/5 font-bold">About us</span>
      <h1 className="text-4xl text-center md:text-left mb-5 font-bg font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl">
      <span className="block xl:inline"><span className="mb-1 block">Extraordinary sites </span>
        <span className="bg-gradient-to-r pe-2 from-blue-700 to-red-600 bg-clip-text text-transparent">
        for a Brighter
        </span>
      </span>
      <div className="mt-2">
        <span className="relative mt-3 whitespace-nowrap text-blue-600"><svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50" preserveAspectRatio="none">
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
            </path>
          </svg>
          <span className="relative">Online Tomorrow</span>
        </span>
      </div>
    </h1>
      <p className="text-gray-700 dark:text-gray-400 font-bg text-justify w-5/6 mt-4 md:self-auto self-center">
      At CherryBerry, we blend creativity and expertise to redefine your digital presence—making every click count in your success story. Our story, values, and commitment to delivering innovative digital solutions tailored to elevate your online presence and success.
      </p>
    </div>
  </div>
  <div className="sm:w-1/2 p-0 md:order-2 order-2">
    <div className="image object-center text-center">
      <img src="https://i.imgur.com/WbQnbas.png" />
    </div>
  </div>
</div>

{/* <div className="relative"> */}
  <div className="max-w-screen-xl mx-auto" style={{backgroundImage:`url("./images/about1.jpg")`}}>
    <div className="bg-gradient-to-b dark:from-gray-900 from-white from-20% -translate-y-2">
    <div id="parent-aboutUs-MnV-title" className="parent-aboutUs-MnV-title flex flex-col place-content-center dark:text-white overflow-hidden">
          <p className="my-5 font-bg text-center aboutUs-MnV-title dark:text-white mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl pb-3 overflow-hidden">
          Mission & Values
          </p>
          <hr className="aboutUs-MnV-title w-60 md:w-fit md:px-60 mb-5 self-center h-0 border-2 border-gray-400" />
          <p className="aboutUs-MnV-title mb-8 px-4 md:px-20 text-justify text-lg font-normal dark:text-white lg:text-xl text-black font-bg">Explore the extensive array of services we offer, thoughtfully crafted to meet diverse requirements, guaranteeing a seamless and flourishing online experience.</p>
          
        </div>
    </div>
  <section className=" py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 parent-MnV-card">
            <div className="bg-white p-3 font-bg rounded-xl  MnV-card">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-bold border-b-2 border-blue-700 w-1/2 text-gray-900">Mission</h3>
                <p className="mt-2 text-base text-gray-500">Guided by purpose, our mission is to empower individuals and businesses through innovative online solutions, fostering growth and success.</p>
              </div>
            </div>
            <div className="bg-white p-3 font-bg rounded-xl MnV-card">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-bold border-b-2 border-blue-700 w-1/2 text-gray-900">Values</h3>
                <p className="mt-2 text-base text-gray-500">Upholding integrity, excellence, and innovation, our core values form the foundation of our commitment to clients and collaborators.</p>
              </div>
            </div>
            <div className="bg-white p-3 font-bg rounded-xl  MnV-card">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-bold border-b-2 border-blue-700 w-1/2 text-gray-900">Vision</h3>
                <p className="mt-2 text-base text-gray-500">Envisioning a future of digital brilliance, our vision propels us to pioneer cutting-edge solutions and redefine online experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
            <div className="bg-gradient-to-t dark:from-gray-900 from-white via-gray-50 via-40% from-20% translate-y-2 h-20">
            </div>

  </div>
{/* </div> */}

<section className="bg-white dark:bg-gray-900 pb-6 font-bg">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="container mx-auto px-6 bg-white dark:bg-gray-900">
            <div className="mb-16 text-center">
              <h4 className="text-base text-blue-700 dark:text-blue-500 font-semibold tracking-wide uppercase">Features</h4>
              <div id="parent-about-game-title" className="parent-about-game-title flex flex-col place-content-center dark:text-white bg-white dark:bg-gray-900 overflow-hidden">
          <p className="my-6 font-bg text-center about-game-title dark:text-white bg-white dark:bg-gray-900 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl py-6 overflow-hidden">
          How we <p className="mx-1 text-blue-700 inline font-pacifico">change</p> the game
          </p>
          <hr className="about-game-title w-60 md:w-fit md:px-60 mb-5 self-center h-0 border-2 border-gray-400" />
          
        </div>
            </div>
            <div className="flex flex-wrap my-0 parent-aboutUs-game-card">
              <div className="w-full aboutUs-game-card border-b border-black dark:border-gray-200 md:w-1/2 md:border-r lg:w-1/3 p-8">
                <div className="flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={20} height={20} fill="currentColor" className="h-6 w-6 text-blue-700">
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                    </path>
                  </svg>
                  <div className="ml-4 text-xl dark:text-white text-black">Increase sales</div>
                </div>
                <p className="leading-loose text-gray-400">Elevate your revenue with strategic solutions designed to boost sales and enhance your business's financial success.
                </p>
              </div>
              <div className="w-full aboutUs-game-card border-b border-black dark:border-gray-200 md:w-1/2 lg:w-1/3 lg:border-r p-8">
                <div className="flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={20} height={20} fill="currentColor" className="h-6 w-6 text-blue-700">
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                    </path>
                  </svg>
                  <div className="ml-4 text-xl dark:text-white text-black">Enterprise-ready</div>
                </div>
                <p className="leading-loose text-gray-400">Tailored for large-scale operations, our enterprise solutions ensure robust functionality, scalability, and seamless performance.
                </p>
              </div>
              <div className="w-full aboutUs-game-card border-b border-black dark:border-gray-200 md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                <div className="flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={20} height={20} fill="currentColor" className="h-6 w-6 text-blue-700">
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                    </path>
                  </svg>
                  <div className="ml-4 text-xl dark:text-white text-black">Unlimited growth</div>
                </div>
                <p className="leading-loose text-gray-400">Fuel your business expansion with scalable and flexible solutions that adapt to your evolving needs for unlimited growth potential.
                </p>
              </div>
              <div className="w-full aboutUs-game-card border-b border-black dark:border-gray-200 md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                <div className="flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={20} height={20} fill="currentColor" className="h-6 w-6 text-blue-700">
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                    </path>
                  </svg>
                  <div className="ml-4 text-xl dark:text-white text-black">Recommended by experts</div>
                </div>
                <p className="leading-loose text-gray-400">Trusted and endorsed by industry experts, our solutions are crafted to meet the highest standards of performance and reliability.
                </p>
              </div>
              <div className="w-full aboutUs-game-card border-b border-black dark:border-gray-200 md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
                <div className="flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={20} height={20} fill="currentColor" className="h-6 w-6 text-blue-700">
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                    </path>
                  </svg>
                  <div className="ml-4 text-xl dark:text-white text-black">Modern platform</div>
                </div>
                <p className="leading-loose text-gray-400">Stay ahead in the digital landscape with a modern platform that incorporates the latest technologies for cutting-edge and competitive solutions.
                </p>
              </div>
              <div className="w-full aboutUs-game-card md:w-1/2 lg:w-1/3 p-8">
                <div className="flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={20} height={20} fill="currentColor" className="h-6 w-6 text-blue-700">
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                    </path>
                  </svg>
                  <div className="ml-4 text-xl dark:text-white text-black">Integrations</div>
                </div>
                <p className="leading-loose text-gray-400">Seamlessly connect and streamline your workflow with integrated solutions that enhance efficiency and provide a cohesive digital experience.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

<section>
<div id="parent-testimonial-title-2" className="parent-testimonial-title-2 flex flex-col place-content-center dark:text-white bg-white dark:bg-gray-900 overflow-hidden">
          <p className="my-5 font-bg text-center testimonial-title-2 dark:text-white bg-white dark:bg-gray-900 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl pb-3 overflow-hidden">
          Testimonials  
          </p>
          <hr className="testimonial-title-2 w-60 md:w-fit md:px-60 mb-5 self-center h-0 border-2 border-gray-400" />
          {/* <p className="testimonial-title-2 mb-8 px-4 md:px-20 text-justify text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 font-bg">Explore the extensive array of services we offer, thoughtfully crafted to meet diverse requirements, guaranteeing a seamless and flourishing online experience.</p> */}
        </div>
<Carousel></Carousel>
</section>

<div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
      <div className="rounded-md shadow"><Link className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg" to="/contact">Get started 🚀</Link>
      </div>
    </div>

</>
  )
}

export default About