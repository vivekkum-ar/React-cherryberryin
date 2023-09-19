import { useEffect, useState } from "react";
import { DarkModeIcon, HomeRoundedIcon, LaptopIcon, LightModeIcon, MenuIcon, PersonIcon, PhoneRoundedIcon, PricingIcon } from "./iconify";
import Lottie from "lottie-react";
// import lottie from "lottie-web";
import { useRef } from "react";
import ContactUsLottie from "../assets/animation_ln5ztpue.json";
import 'animate.css';
import '@fontsource/pacifico';
import { Link } from "react-router-dom";


interface navbarProps {
  // Add your prop types here
  theme : String;
  updateTheme : Function;
}
const Navbar: React.FC<navbarProps> = ({theme,updateTheme}) => {
  const lottieRef = useRef(null);
  const [isDropdownvisible, setDropdownvisible] = useState(false);

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }
    // return () => {
    //   second
    // }
  }, [theme]);

  const [rotateClass, setRotateClass] = useState('');

  const handleButtonClick = () => {
    theme === 'dark' ? updateTheme('light') : updateTheme('dark');
    setRotateClass('animate__rotateIn');

    // Optionally, remove the rotate class after the animation completes
    setTimeout(() => {
      setRotateClass('');
    }, 1000); // Adjust the duration based on your animation duration
  };


  return (
    <nav className="nav-trigger bg-gray-900 border-b-2 dark:border-gray-300 border-gray-500 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-center mx-auto px-4 py-1">
        <Link to="/" className="flex items-center">
          <div className="flex m-0 p-0">
            <img src="/images/logo.png" className="h-12 mr-3" alt="cherry-berry.in Logo" />
            <div className="flex flex-col">
              <span className="self-center text-2xl font-light pb-1 whitespace-nowrap text-white font-pacifico overflow-hidden">CherryBerry.in</span>
              <span className="mt-1/4 self-center text-xs font-light whitespace-nowrap text-white">Empowering Your Brand Online</span>
            </div>
          </div>

        </Link>
        {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button> */}
        {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default"> */}
        {/* <ul> */}
        {/* <li> */}
        {/*  */}
        {/* </li> */}
        {/* </ul> */}
        {/* </div> */}
        <div className="flex items-center md:hidden">
          <button type="button" onClick={() => { setDropdownvisible(!isDropdownvisible); }} className="flex mr-3 z-60 text-sm text-white md:mr-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            {/* <img className="w-8   h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" /> */}
            {MenuIcon}
          </button>
          {/* Dropdown menu */}
          <div className={`absolute z-50 right-0 top-0 mt-14 me-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${isDropdownvisible ? "" : "hidden"}`} id="user-dropdown">

            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link onClick={() => { setDropdownvisible(false); }} to="/" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><span className="mr-2">{HomeRoundedIcon}</span> Home</Link>
              </li>
              <li>
                <Link onClick={() => { setDropdownvisible(false); }} to="/about" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><span className="mr-2">{PersonIcon}</span> About</Link>
              </li>
              <li>
                <Link onClick={() => { setDropdownvisible(false); }} to="/services" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><span className="mr-2">{LaptopIcon}</span> Services</Link>
              </li>
              <li>
                <Link onClick={() => { const element = document.querySelector('.parent-pricing-card-title'); if (element) { element.scrollIntoView({ behavior: 'instant' }); } setDropdownvisible(false);}} to="home#parent-pricing-card-title" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><span className="mr-2">{PricingIcon}</span> Pricing</Link>
              </li>
              <li>
                <Link onClick={() => { setDropdownvisible(false); }} to="contact" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><span className="mr-2">{PhoneRoundedIcon}</span> Contact</Link>
              </li>
            </ul>

          </div>
          {/* <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button> */}
        </div>
      </div>

      <ul className="items-center h-14 ms-4 absolute top-0 font-medium text-sm hidden md:flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-900 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/" className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:focus:text-red-700 md:p-0 text-white md:dark:hover:text-red-500 md:dark:focus:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="about" className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:focus:text-red-700 md:p-0 text-white md:dark:hover:text-red-500 md:dark:focus:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
        </li>
        <li>
          <Link to="services" className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:focus:text-red-700 md:p-0 text-white md:dark:hover:text-red-500 md:dark:focus:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</Link>
        </li>
        <li>
          <Link onClick={() => { const element = document.querySelector('.parent-pricing-card-title'); if (element) { element.scrollIntoView({ behavior: 'instant' }); }}} to="home#parent-pricing-card-title" className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:focus:text-red-700 md:p-0 text-white md:dark:hover:text-red-500 md:dark:focus:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</Link>
        </li>
        <li>
          <Link to="contact" className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:focus:text-red-700 md:p-0 text-white md:dark:hover:text-red-500 md:dark:focus:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
        </li>
      </ul>

      {/* ------------------------------ Theme Switch Button ------------------------------ */}
      <button type="button" onClick={handleButtonClick} className={`theme-button animate__animated animate__fast ${rotateClass} absolute top-3 md:right-52 right-14 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-full text-sm px-1.5 py-1.5 text-center me-2 mb-2 `}>{theme == "dark" ? LightModeIcon : DarkModeIcon}</button>

      {/* ---------------------- Animated Get-in-touch button ---------------------- */}
      <Link to="/contact" className="hidden md:block">
        <Lottie lottieRef={lottieRef} animationData={ContactUsLottie}
          onDOMLoaded={() => {
            if (lottieRef.current) {
              const currentLottie = lottieRef.current as any;
              currentLottie.goToAndStop(0, true);
            }
          }} loop={true}

          onMouseEnter={() => {
            if (lottieRef.current) {
              const currentLottie = lottieRef.current as any;
              currentLottie.play();
            }
          }}

          onMouseLeave={() => {
            if (lottieRef.current) {
              const currentLottie = lottieRef.current as any;
              currentLottie.goToAndStop(0, true);
            }
          }}

          // onMouseDown={() => {
          //   if(lottieRef.current) {
          //     const currentLottie = lottieRef.current as any;
          //     currentLottie.goToAndStop(0,true);
          //   }
          // }} 
          className="h-12 w-40 absolute right-0 top-0 mt-1 me-2" />
      </Link>
    </nav>
  )
}

export default Navbar