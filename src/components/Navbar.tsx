import { useState } from "react";
import { HomeRoundedIcon, LaptopIcon, MenuIcon, PersonIcon, PhoneRoundedIcon, PricingIcon } from "./iconify";
import Lottie from "lottie-react";
import ContactUsLottie from "../assets/animation_ln5ztpue.json";


const Navbar = () => {
    const [isDropdownvisible, setDropdownvisible] = useState(false);
    return (
    <nav className="nav-trigger bg-white border-b-2 border-gray-300 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-center mx-auto px-4 py-1">
          <a href="/" className="flex items-center">
            <div className="flex m-0 p-0">
            <img src="/images/logo.png" className="h-12 mr-3" alt="cherry-berry.in Logo" />
            <div className="flex flex-col">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CherryBerry.in</span>
            <span className="mt-1/4 self-center text-xs font-light whitespace-nowrap dark:text-white">Empowering Your Brand Online</span>
            </div>
            </div>
            
          </a>
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
            <button type="button" onClick={() => {setDropdownvisible(!isDropdownvisible);}} className="flex mr-3 z-60 text-sm text-black dark:text-white md:mr-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              {/* <img className="w-8   h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" /> */}
              {MenuIcon}
            </button>
            {/* Dropdown menu */}
            <div className={`absolute z-50 right-0 top-0 mt-14 me-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${isDropdownvisible ? "" : "hidden"}`} id="user-dropdown">
              <div className={`px-4 py-3`}>
                {/* <span className="flex text-sm text-gray-900 dark:text-white gap-2">{session.user.name}{session?.user?.role == "USER" ? <Keyword dictionary={["USER"]} btncolor={4}></Keyword> :""} </span>   */}
                <span className="flex text-sm  text-gray-500 truncate dark:text-gray-400"><span className="mr-2">{HomeRoundedIcon}</span> Home</span>
              </div> 
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="/dashboard" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><span className="mr-2">{PersonIcon}</span> About</a>
                </li>
                <li>
                  <a href="/profile" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><span className="mr-2">{LaptopIcon}</span> Services</a>
                </li>
                <li>
                  <a href="/settings" className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><span className="mr-2">{PricingIcon}</span> Pricing</a>
                </li>
                <li>
                  <a href="#"  className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"><span className="mr-2">{PhoneRoundedIcon}</span> Contact</a>
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
        <ul className="flex items-center h-14 ms-4 absolute top-0 font-medium text-sm hidden md:flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:focus:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 md:dark:focus:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:focus:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 md:dark:focus:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:focus:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 md:dark:focus:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:focus:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 md:dark:focus:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:focus:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 md:dark:focus:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
                </ul>

                <a href="#" className="hidden md:block">
        <Lottie animationData={ContactUsLottie} loop={true} className="h-12 w-40 absolute right-0 top-0 mt-1 me-2"/>
        </a>
      </nav>
  )
}

export default Navbar