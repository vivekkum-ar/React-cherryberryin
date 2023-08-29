import React from 'react';
import { CreateRoundedIcon } from './iconify';
// import Atropos from 'atropos/react';
// import 'atropos/css';

  interface TimelineCardProps {
    Title: string;
    Description: string;
  }
const TimelineCard: React.FC<TimelineCardProps> = (props) => {
    const { Title, Description } = props; //Destructuring Title, Description = props = title, description(from parent)
  return (
    <section className="md:h-84 pb-12 dark:bg-gray-900">
            <div className="border-2 parent-neumorph border-red-500 flex flex-col place-content-center dark:text-white bg-white dark:bg-gray-900 overflow-hidden">
        {/* <div className="neumorph -trigger absolute border-lg border-red-500">
        </div> */}
        <p className="my-5 font-bg text-center neumorph  dark:text-white bg-white dark:bg-gray-900 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl pb-3 overflow-hidden">
          {Title}
        </p>
        <hr className="neumorph  w-60 md:w-fit md:px-60 mb-5 self-center h-0 border-2 border-gray-400" />
        <p className="neumorph  mb-8 px-4 md:px-20 text-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 font-bg">{Description}</p>
      </div>
        <div className="overflow-visible  grid grid-rows-3 sm:grid-rows-1 gap-y-0 px-5 sm:grid-cols-4 sm:gap-x-8">

        <div style={{backgroundImage:`url("./images/website-undraw.svg")`}} className="md:translate-x-12 md:translate-y-12 bg-contain md:bg-contain border-b-2 border-gray-400 sm:border-0 bg-no-repeat bg-bottom md:bg-top row-span-0 sm:row-span-0 sm:col-span-1">
          </div>


          {/* <Atropos className="py-0 mx-auto max-w-screen-xl row-span-2 sm:row-span-0 sm:col-span-2" shadow={false} commonOrigin={false}> */}
          <div className="py-0 mx-auto max-w-screen-xl row-span-2 sm:row-span-0 sm:col-span-2">
        <div data-atropos-offset="-1" className="">
          <div className="dark:text-white md:my-4 py-4 md:p-4 px-2">
            {/* <a href="#" data-atropos-offset="10" className="hidden bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Tutorial
            </a> */}
            
            {/* <h1 data-atropos-offset="5" className={`overflow text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2 font-bg`}>{Title}</h1>
            <p className="text-sm md:text-lg font-normal text-gray-700 dark:text-white mb-6" data-atropos-offset="7">{Description}</p> */}
            <ol className="relative px-12 border-s border-gray-200 dark:border-gray-700">                  
        <li className="mb-10 ms-6">            
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            {CreateRoundedIcon}
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Get Going 
          {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span> */}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Get started right away</time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get step-by-step guidance on how to build and launch a website with expert starter guides and planning tools.</p>
          <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            {/* <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
              <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
            </svg>  */}
            Get Started</a>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            {CreateRoundedIcon}
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Get Online</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Take your business online</time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get discovered with a professional website. Easily customize with our expert designers.</p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            {CreateRoundedIcon}
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Get Selling</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Start selling immediately</time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">All-in-one powerful eCommerce tools to simplify order management, shipping, and payments.</p>
        </li>
        <li className=" ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            {CreateRoundedIcon}
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Get Growing</h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Increase impact with a website</time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Find new customers with integrated marketing tools, from Facebook ads to automated email campaigns.</p>
        </li>
      </ol>
            {/* <a href="#" data-atropos-offset="10" className="mt-10 flex sm:inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-gray-300 rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get Started
              <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </a> */}
          </div>
          </div>
          </div>
          {/* </Atropos> */}

          <div style={{backgroundImage:`url("./images/web-builder.svg")`}} className="md:-translate-x-52 md:translate-y-80  scale-x-[-1] hidden md:block bg-cover border-b-2 border-gray-400 sm:border-0 bg-no-repeat bg-bottom md:bg-top md:bg-contain row-span-1 sm:row-span-0 sm:col-span-1">
          </div>

        </div>
      </section>
  )
}

export default TimelineCard