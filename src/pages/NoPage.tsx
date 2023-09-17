import { useEffect } from "react";

const NoPage = () => {

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>NoPage</div>
  )
}

export default NoPage