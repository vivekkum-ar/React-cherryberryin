import React, { useEffect } from 'react'
import CardofService from '../components/CardsofService'

interface ServicesProps {
  // Add your prop types here
}

const Services: React.FC<ServicesProps> = ({}) => {

  /* --------- Check and arrange overflow of body if modal is visible --------- */

  useEffect(() => {
      document.body.style.overflowX = 'hidden';
    // Cleanup effect
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);


  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="grid grid-cols-3 gap-4 grid-rows-3">
      <CardofService />
      <CardofService />
      <CardofService />
      <CardofService />
      </div>
    </div>
  )
}

export default Services