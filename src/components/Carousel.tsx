import { useState } from 'react';
// import CarbonQuotes from './iconify';
import "animate.css";
import InitialsAvatar from 'react-initials-avatar';
import 'react-initials-avatar/lib/ReactInitialsAvatar.css';

const Carousel = () => {
  const [slide, setSlide] = useState(0)
  return (
  <>
  {/* ------------------------------- Wrapper div ------------------------------  */}
  <div className="demo font-bg relative max-w-screen-xl mx-auto my-10 overflow-hidden" style={{backgroundImage:`url("/images/pattern (4).svg")`}}>

  {/* --------------------------------- Item 1 --------------------------------- */}
<div id="testimonial-slider" className={`p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate__animated ${slide == 0 ? "animate__fadeInRight" : "hidden"}`}>
  <div className="testimonial">
    <p className="bg-gray-200 bg-clip-padding bg-opacity-60 backdrop-filter backdrop-blur-lg dark:bg-gray-500 dark:bg-opacity-70 dark:text-white border border-white description rounded-xl text-dark">
      CherryBerry transformed our online presence. Exceptional service! Kudos to the team.
    </p>
    <div className="bg-white dark:bg-gray-700 dark:text-gray-300 text-dark testimonial-content rounded-xl">
      <div className="pic">
        {/* <img width={40} height={40} src="/images/logo.png" alt="" /> */}
        <InitialsAvatar name="Aarav Sharma"  className='bg-gray-900 text-white rounded-full p-4 w-16 h-16 text-center text-xl font-bold self-center justify-center align-middle flex'></InitialsAvatar>

      </div>
      <h3 className="testimonial-title mt-4">Aarav Sharma
        <small> Founder, TechPro Solutions, Delhi</small>
      </h3>
    </div>
  </div>
  <div className="testimonial hidden md:block">
    <p className="bg-gray-200 bg-clip-padding bg-opacity-60 backdrop-filter backdrop-blur-lg dark:bg-gray-500 dark:bg-opacity-70 dark:text-white border border-white description rounded-xl text-dark">
      Incredible results! CherryBerry delivered beyond expectations. Highly recommend!
    </p>
    <div className="bg-white dark:bg-gray-700 dark:text-gray-300 text-dark testimonial-content rounded-xl">
      <div className="pic">
        {/* <img width={40} height={40} src="/images/logo.png" alt="" /> */}
        <InitialsAvatar name="Riya Kapoor" className="bg-gray-900 text-white rounded-full p-4 w-16 h-16 text-center text-xl font-bold self-center justify-center align-middle flex"></InitialsAvatar>
      </div>
      <h3 className="testimonial-title mt-4">Riya Kapoor
        <small> CEO, BloomTech,</small>
      </h3>
    </div>
  </div>
  <div className="testimonial hidden lg:block">
    <p className="bg-gray-200 bg-clip-padding bg-opacity-60 backdrop-filter backdrop-blur-lg dark:bg-gray-500 dark:bg-opacity-70 dark:text-white border border-white description rounded-xl text-dark">
      Reliable and efficient. CherryBerry's expertise is unmatched. A pleasure to work with.
    </p>
    <div className="bg-white dark:bg-gray-700 dark:text-gray-300 text-dark testimonial-content rounded-xl">
      <div className="pic">
        {/* <img width={40} height={40} src="/images/logo.png" alt="" /> */}
        <InitialsAvatar name="Arjun Singh" className="bg-gray-900 text-white rounded-full p-4 w-16 h-16 text-center text-xl font-bold self-center justify-center align-middle flex"></InitialsAvatar>
      </div>
      <h3 className="testimonial-title mt-4">Arjun Singh
        <small> Director, Innovate Web Solutions, Bangalore</small>
      </h3>
  </div>
</div>

</div>



{/* --------------------------------- Item 2 --------------------------------- */}
<div id="testimonial-slider" className={`p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate__animated ${slide == 1 ? "animate__fadeInRight" : "hidden"}`}>
  <div className="testimonial">
    <p className="bg-gray-200 bg-clip-padding bg-opacity-60 backdrop-filter backdrop-blur-lg dark:bg-gray-500 dark:bg-opacity-70 dark:text-white border border-white description rounded-xl text-dark">
      CherryBerry exceeded our goals. Professional, prompt, and creative. A game-changer!
    </p>
    <div className="bg-white dark:bg-gray-700 dark:text-gray-300 text-dark testimonial-content rounded-xl">
      <div className="pic">
        {/* <img width={40} height={40} src="/images/logo.png" alt="" /> */}
        <InitialsAvatar name="Neha Patel" className="bg-gray-900 text-white rounded-full p-4 w-16 h-16 text-center text-xl font-bold self-center justify-center align-middle flex"></InitialsAvatar>
      </div>
      <h3 className="testimonial-title mt-4">Neha Patel
        <small> Co-founder,</small>
      </h3>
    </div>
  </div>
  <div className="testimonial hidden md:block">
    <p className="bg-gray-200 bg-clip-padding bg-opacity-60 backdrop-filter backdrop-blur-lg dark:bg-gray-500 dark:bg-opacity-70 dark:text-white border border-white description rounded-xl text-dark">
      Exceptional service. CherryBerry's team is talented and responsive. Truly impressed!
    </p>
    <div className="bg-white dark:bg-gray-700 dark:text-gray-300 text-dark testimonial-content rounded-xl">
      <div className="pic">
        {/* <img width={40} height={40} src="/images/logo.png" alt="" /> */}
        <InitialsAvatar name="Vikram Verma" className="bg-gray-900 text-white rounded-full p-4 w-16 h-16 text-center text-xl font-bold self-center justify-center align-middle flex"></InitialsAvatar>
      </div>
      <h3 className="testimonial-title mt-4">Vikram Verma
        <small> Owner, Infinite Pixels, Pune</small>
      </h3>
    </div>
  </div>
  <div className="testimonial hidden lg:block">
    <p className="bg-gray-200 bg-clip-padding bg-opacity-60 backdrop-filter backdrop-blur-lg dark:bg-gray-500 dark:bg-opacity-70 dark:text-white border border-white description rounded-xl text-dark">
      Outstanding results! CherryBerry's dedication and innovation shine. Highly satisfied.
    </p>
    <div className="bg-white dark:bg-gray-700 dark:text-gray-300 text-dark testimonial-content rounded-xl">
      <div className="pic">
        {/* <img width={40} height={40} src="/images/logo.png" alt="" /> */}
        <InitialsAvatar name="Tanvi Mehta" className="bg-gray-900 text-white rounded-full p-4 w-16 h-16 text-center text-xl font-bold self-center justify-center align-middle flex"></InitialsAvatar>
      </div>
      <h3 className="testimonial-title mt-4">Tanvi Mehta
        <small> CEO, PixelCrafters, Hyderabad</small>
      </h3>
  </div>
</div>

</div>



{/* --------------------------------- Item 3 --------------------------------- */}
<div id="testimonial-slider" className={`p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate__animated ${slide == 2 ? "animate__fadeInRight" : "hidden"}`}>
  <div className="testimonial">
    <p className="bg-gray-200 bg-clip-padding bg-opacity-60 backdrop-filter backdrop-blur-lg dark:bg-gray-500 dark:bg-opacity-70 dark:text-white border border-white description rounded-xl text-dark">
      CherryBerry delivers excellence. Their commitment to quality is commendable. A satisfied client!
    </p>
    <div className="bg-white dark:bg-gray-700 dark:text-gray-300 text-dark testimonial-content rounded-xl">
      <div className="pic">
        {/* <img width={40} height={40} src="/images/logo.png" alt="" /> */}
        <InitialsAvatar name="Kartik Malhotra" className="bg-gray-900 text-white rounded-full p-4 w-16 h-16 text-center text-xl font-bold self-center justify-center align-middle flex"></InitialsAvatar>
      </div>
      <h3 className="testimonial-title mt-4">Kartik Malhotra
        <small> Founder, ByteBuilders, Chennai</small>
      </h3>
    </div>
  </div>
  <div className="testimonial hidden md:block">
    <p className="bg-gray-200 bg-clip-padding bg-opacity-60 backdrop-filter backdrop-blur-lg dark:bg-gray-500 dark:bg-opacity-70 dark:text-white border border-white description rounded-xl text-dark">
      CherryBerry is a trusted partner. Exceptional service, creativity, and reliability. Highly recommended!
    </p>
    <div className="bg-white dark:bg-gray-700 dark:text-gray-300 text-dark testimonial-content rounded-xl">
      <div className="pic">
        {/* <img width={40} height={40} src="/images/logo.png" alt="" /> */}
        <InitialsAvatar name="Anaya Desai" className="bg-gray-900 text-white rounded-full p-4 w-16 h-16 text-center text-xl font-bold self-center justify-center align-middle flex"></InitialsAvatar>
      </div>
      <h3 className="testimonial-title mt-4">Anaya Desai
        <small> CEO, SparkSolutions, Kolkata</small>
      </h3>
    </div>
  </div>
  <div className="testimonial hidden lg:block">
    <p className="bg-gray-200 bg-clip-padding bg-opacity-60 backdrop-filter backdrop-blur-lg dark:bg-gray-500 dark:bg-opacity-70 dark:text-white border border-white description rounded-xl text-dark">
      CherryBerry stands out. Innovative solutions, on-time delivery, and great communication.
    </p>
    <div className="bg-white dark:bg-gray-700 dark:text-gray-300 text-dark testimonial-content rounded-xl">
      <div className="pic">
        {/* <img width={40} height={40} src="/images/logo.png" alt="" /> */}
        <InitialsAvatar name="Rahul Jain" className="bg-gray-900 text-white rounded-full p-4 w-16 h-16 text-center text-xl font-bold self-center justify-center align-middle flex"></InitialsAvatar>
      </div>
      <h3 className="testimonial-title mt-4">Rahul Jain
        <small> Director, CodeWave Technologies, Jaipur</small>
      </h3>
  </div>
</div>

</div>
        {/* Slider controls */}

        {/* previous */}
        <button type="button" onClick={() => slide == 0 ? setSlide(2) : setSlide(slide-1)} className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-200 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-700 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        {/* next */}
        <button type="button" onClick={() => slide == 2 ? setSlide(0) : setSlide(slide+1)} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-200 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-800 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-700 sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
</div>
  </>
  )
}

export default Carousel;