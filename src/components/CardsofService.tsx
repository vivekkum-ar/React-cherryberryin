import React from 'react'

interface CardofServiceProps {
  // Add your prop types here
  title: string;
  description: string;
}

const CardofService: React.FC<CardofServiceProps> = ({title,description}) => {
  return (
    // <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="group relative cursor-pointer overflow-hidden bg-white ms-4 px-4 pt-4 pb-4 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:max-w-sm sm:rounded-lg">
    <span className="absolute top-4 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]" />
    <div className="relative z-10 mx-auto max-w-md">
      <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-white transition-all">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      </span>
      <div className="space-y-6 pt-1 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
        <p>{title}</p>
      </div>
      <div className="space-y-6 pt-1 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
        <p>{description}</p>
      </div>
      <div className="pt-1 text-base font-semibold leading-7">
        <p>
          <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read More
            →
          </a>
        </p>
      </div>
    </div>
  </div>
// </div>

  )
}

export default CardofService