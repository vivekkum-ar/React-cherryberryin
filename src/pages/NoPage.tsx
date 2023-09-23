import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../assets/Animation - 1700854622682.json";
import { Link } from "react-router-dom";

const NoPage = () => {
  const lottieRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

/* ------------------ Initializing lottie using lottie-web ------------------ */
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,

      animationData,
    });

    return () => {
      /* ------------------------------------ Cleanup of lottie-web ----------------------------------- */
      anim.destroy();
    };
  }, []);

  return (
    <>
    <div className="absolute bottom-20 left-40 z-40">
    <Link to="/home" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Go to Home
                <svg className="w-3.5 h-3.5 ml-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
    </div>
    <div className="h-[500px] lg:scale-150 grow lottie-were-cb z-10" ref={lottieRef}></div>
    </>
  )
}

export default NoPage