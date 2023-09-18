import { Link } from "react-router-dom";

interface FooterProps {
  // Add your prop types here
  theme: String;
  updateTheme: Function;
}
const Footer: React.FC<FooterProps> = ({ }) => {
  return (
    <footer className="max-w-screen-xl mx-auto bottom-0 bg-white dark:bg-gray-900 relative md:max-w-screen-xl ">
  <div className="max-w-screen-xl mx-auto absolute top-10 md:top-0 bottom-0 left-0 flex items-center justify-center w-full md:w-auto">
  <div className="opacity-25 w-64 h-80 md:h-64 md:w-52" style={{ backgroundImage: 'url("/images/logo.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
  </div>
</div>



      <div className="mx-auto w-full max-w-screen-xl sm:px-6 py-6 lg:py-8 z-40 frontg relative">
        <div className="flex-row md:flex md:justify-between">
          <div className="drop-shadow-lg sm:filter-none mb-6 md:mb-0 grid items-center justify-center md:bg-inherit border-gray-300 sm:border-0 border-y-2">
            <Link to="/" className="flex items-center">
              <img src="/images/logo.png" width={60} height={60} className="mr-1" alt="CherryBerry.in Logo" />
              <div className="flex flex-col">
                <span className={`self-center text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white text-dark font-pacifico overflow-hidden py-2`}>CherryBerry.in</span>
                <span className="mt-1/4 self-center text-xs font-normal whitespace-nowrap text-dark-900 dark:text-white">Empowering Your Brand Online</span>
              </div>
            </Link>
          </div>
          {/* <div className="flex m-0 p-0">
            <img src="/images/logo.png" className="h-12 mr-3" alt="cherry-berry.in Logo" />
            <div className="flex flex-col">
              <span className="self-center text-2xl font-normal pb-2 whitespace-nowrap text-dark-900 dark:text-white font-pacifico overflow-hidden">CherryBerry.in</span>
              <span className="mt-1/4 self-center text-xs font-normal whitespace-nowrap text-dark-900 dark:text-white">Empowering Your Brand Online</span>
            </div>
          </div> */}
          <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3 mx-2 sm:mx-0">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-300">Resources</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">CherryBerry.in</Link>
                </li>
                <li  className="mb-4">
                  <Link to="services" className="hover:underline">What we offer?</Link>
                </li>
                <li  className="mb-4">
                  <Link to="contact" className="hover:underline">Reach Us</Link>
                </li>
                <li>
                  <Link to="about" className="hover:underline">About Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-300">Follow us</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="https://www.facebook.com/CherryBerry-107740887653989" className="hover:underline ">Facebook</Link>
                </li>
                <li className="mb-4">
                  <Link to="https://www.instagram.com/cherryberryindia/" className="hover:underline ">Instagram</Link>
                </li>
                <li className="mb-4">
                  <Link to="https://twitter.com/cherryberryind" className="hover:underline ">Twitter</Link>
                </li>
                <li className="mb-4">
                  <Link to="https://github.com/vivekkum-ar/React-cherryberryin/" className="hover:underline ">Github</Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com/company/cherryberryindia/" className="hover:underline">Linkedin</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-300">Legal</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/legal/privacypolicy" className="hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/legal/terms" className="hover:underline">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2020 <Link to="/" className="hover:underline">CherryBerry.in™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link to="https://www.facebook.com/CherryBerry-107740887653989" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link to="https://www.instagram.com/cherryberryindia/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link to="https://twitter.com/cherryberryind" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link to="https://github.com/vivekkum-ar/React-cherryberryin/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link to="https://www.linkedin.com/company/cherryberryindia/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg>
              <span className="sr-only">Linkdin account</span>
            </Link>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer