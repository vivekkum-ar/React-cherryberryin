import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

interface PrivacyProps {
  // Add your prop types here
}

const Privacy: React.FC<PrivacyProps> = ({}) => {

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <></>

  )
}

export default Privacy