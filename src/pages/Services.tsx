import React, { useEffect, useLayoutEffect, useState } from 'react'
import CardofService from '../components/CardsofService'
import { services } from '../components/Content';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);


interface ServicesProps {
  // Add your prop types here
}

const Services: React.FC<ServicesProps> = ({}) => {
  const [More, setMore] = useState(false);

  /* --------- Check and arrange overflow of body if modal is visible --------- */

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
          trigger: ".parent-services-page-title",
          start: "top center",
          end: "bottom bottom-=20%",
          toggleActions: "play none none none",
          // markers: true,
          // scrub: true,
          // pin:true,
        }
      });
      tl13.from(".services-page-title", {
        opacity: 0,
        y: "30px",
        // duration: 1,
        stagger: 0.3,
      });

      /* ------------------- ScrollTrigger for animation of cards of services page ------------------- */
      let tl14 = gsap.timeline({
        scrollTrigger: {
          trigger: ".parent-services-page-card",
          start: "top center",
          end: "bottom top",
          toggleActions: "play complete reverse reset",
          // markers: true,
          scrub: true,
          // horizontal: true,
          // pin:true,
        }
      });
      tl14.from(".services-page-card", {
        opacity: 0,
        y: "30px",
        // duration: 1,
        // fastScrollEnd: "100px",
        // preventOverlaps: true,
        stagger: 1,
      });

    });
    return () => ctx.revert(); // <- cleanup!
  }, []);


  return (
    <>
      <div className="mx-auto my-10 flex justify-center px-4 sm:my-12 sm:px-6 md:my-8 lg:my-10 lg:px-8 xl:my-14">
  <div className="text-center ">
    <h1 className="text-4xl font-bg font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl">
      <span className="block xl:inline"><span className="mb-1 block">Create amazing</span>
        <span className="bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent">
        online experiences
        </span>
      </span>
      <div className="mt-2">10X faster
        <span className="relative mt-3 whitespace-nowrap text-blue-600"><svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50" preserveAspectRatio="none">
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
            </path>
          </svg>
          <span className="relative">&nbsp; with CherryBerry.</span>
        </span>
      </div>
    </h1>
    <p className="mx-auto mt-3 max-w-xl text-lg text-gray-500 sm:mt-5 md:mt-5">
    Craft stunning websites and powerful online experiences effortlessly. CherryBerry empowers your brand with speed, creativity, and unparalleled innovation, making your digital journey extraordinary.
    </p>
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
      <div className="rounded-md shadow"><Link className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg" to="/contact">Get started 🚀</Link>
      </div>
    </div>
  </div>
</div>

<div id="parent-services-page-title" className="parent-services-page-title flex flex-col place-content-center dark:text-white bg-white dark:bg-gray-900 overflow-hidden">
          <p className="my-5 font-bg text-center services-page-title dark:text-white bg-white dark:bg-gray-900 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl pb-3 overflow-hidden">
          Comprehensive Web Solutions
          </p>
          <hr className="services-page-title w-60 md:w-fit md:px-60 mb-5 self-center h-0 border-2 border-gray-400" />
          <p className="services-page-title mb-8 px-4 md:px-20 text-justify text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 font-bg">Explore the extensive array of services we offer, thoughtfully crafted to meet diverse requirements, guaranteeing a seamless and flourishing online experience.</p>
        </div>

    <div className="max-w-screen-lg mx-auto mr-4 md:mr-auto">
      <div className="parent-services-page-card grid md:grid-cols-3 md:gap-8 md:grid-rows-3 grid-cols-2 gap-2 grid-rows-3">
      {services.map((service, index) => {
  if (index < 9) {
    return (
      <CardofService key={index} title={service.service} description={service.description} />
    )
  }
  return null // If index is greater than or equal to 9, render nothing (or handle it as needed).
})}

      </div>
    </div>


      <div className={`mt-0 mr-4 md:mr-auto rounded-md shadow ${More == true ? "animate__animated animate__fadeOutDown" : ""}`} onClick={() => { setMore(true); }} ><div className="flex w-52 mx-auto items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg">load more</div>
      </div>


    <div className={`max-w-screen-lg mx-auto ${More == false ? "hidden" : "md:block"}`}>
      <div className="grid md:grid-cols-3 md:gap-8 md:grid-rows-3 grid-cols-2 gap-2 grid-rows-3 md:mb-20 mb-6 mr-4">
      {services.map((service, index) => {
  if ((index > 8)) {
    return (
      <CardofService key={index} title={service.service} description={service.description} />
    )
  }
  return null // If index is greater than or equal to 9, render nothing (or handle it as needed).
})}

      </div>
    </div>
    </>
  )
}

export default Services