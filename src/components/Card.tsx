// import React, { useEffect } from 'react'
import { LaptopIcon } from './iconify'
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

interface CardProps {
  // Add your prop types here
  category?: string;
  title: string;
  description: string;
  link?:string;
  ModalVisible: boolean;
  updateModalVisible: Function;
  setIndexOfColl: Function;
  indexOfColl: number;
  id :number;
}

const Card: React.FC<CardProps> = ({title,description,category="Website",ModalVisible,updateModalVisible,setIndexOfColl,id}) => {

  
  return (
    <div className="ourWork-card w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img src={`./images/example-sites/web (${id+1})/1.png`} alt="https://source.unsplash.com/Lki74Jj7H-U/400x300" className="object-cover object-center w-full h-48" />
            <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="dark:text-white dark:bg-gray-900 flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text w-full">
                    <div>
                        <p
                            className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">{ category }</p>
                        <p
                            className="font-bg overflow-hidden block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                            {title}
                        </p>
                        <p className="mb-4">
                            {description}
                        </p>
                    </div>
                    <p onClick={() => {
                      setIndexOfColl(id);
                      updateModalVisible(!ModalVisible);
                    }} className="cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Preview
                { LaptopIcon }
              </p>
                </div>
            </div>
        </div>
  )
}

export default Card