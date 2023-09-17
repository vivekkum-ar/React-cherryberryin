import React, { useEffect } from 'react'

interface TermsProps {
  // Add your prop types here
}

const Terms: React.FC<TermsProps> = ({}) => {

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>Terms</div>
  )
}

export default Terms