import { Link } from 'react-router-dom';
import { StandardPackIcon, BusinessPackIcon, PremiumPackIcon } from './iconify';

interface PricingCards{
  theme:string;
} 

const PricingCards:React.FC<PricingCards> = ({theme}) => {
  return (
    <div className="demo py-2 dark:bg-gray-900 ">
        <div className=" max-w-screen-xl mx-auto">
          <div className="flex overflow-hidden md:flex-row flex-col md:gap-8 md:mx-20 mx-5 ">
            <div className="pricing-card md:w-1/3 w-full py-4 px-4 dark:bg-gray-900">
              <div className={`${theme == "light"? "Table-light": "Table-dark"} pricingTable`}>
                <div className="pricingTable-header">
                  <h3 className="title font-bg dark:text-white text-gray-900">Basic <span className="inline-block">{StandardPackIcon}</span></h3>
                </div>
                <ul className="pricing-content">
                  <li>Basic Hosting Package</li>
                  <li>Essential Email Services</li>
                  <li>Starter Bandwidth</li>
                  <li>Routine Maintenance</li>
                  <li>15 Subdomains</li>
                </ul>
                <div className="price-value">
                  <span className="amount font-bg overflow-hidden dark:text-white text-gray-900">₹2999</span>
                  {/* <span className="amount font-bg overflow-hidden dark:text-white text-gray-900">₹2999/</span> */}
                  {/* <span className="duration font-bg overflow-hidden dark:text-white text-gray-900">month</span> */}
                </div>
                <Link to="/contact" className="dark:bg-[#fe9736] bg-[#fe9736] inline-flex justify-center items-center py-2 px-5 font-bold text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Contact Us
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Link>
                {/* <div className="pricingTable-signup">
            <Link to="/contact">Contact us</a>
          </div> */}
              </div>
            </div>
            <div className="pricing-card md:w-1/3 w-full py-4 px-4">
              <div className={`${theme == "light"? "Table-light": "Table-dark"} pricingTable red`}>
                <div className="pricingTable-header">
                  <h3 className="title font-bg dark:text-white text-gray-900">Business <span className="inline-block">{BusinessPackIcon}</span></h3>
                </div>
                <ul className="pricing-content">
                  <li>Expanded Hosting Features</li>
                  <li>Advanced Email Solutions</li>
                  <li>Increased Bandwidth</li>
                  <li>Priority Maintenance Services</li>
                  <li>Extended Subdomains</li>
                </ul>
                
                <div className="price-value">
                  <span className="amount font-bg overflow-hidden dark:text-white text-gray-900">₹699/</span>
                  <span className="duration font-bg overflow-hidden dark:text-white text-gray-900">month</span>
                </div>
                <Link to="/contact" className="dark:bg-[#f73b3b] bg-[#f73b3b] font-bg font-bold inline-flex justify-center items-center py-2 px-5 text-base text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Contact Us
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="pricing-card md:w-1/3 w-full py-4 px-4">
              <div className={`${theme == "light"? "Table-light": "Table-dark"} pricingTable green`}>
                <div className="pricingTable-header">
                  <h3 className="title font-bg dark:text-white text-gray-900">Premium <span className="inline-block">{PremiumPackIcon}</span></h3>
                </div>
                <ul className="pricing-content">
                  <li>Top-tier Hosting Package</li>
                  <li>Enterprise-level Email Solutions</li>
                  <li>Unlimited Bandwidth</li>
                  <li>24/7 Premium Support</li>
                  <li>Unlimited Subdomains</li>
                </ul>
                <div className="price-value">
                  <span className="amount font-bg overflow-hidden dark:text-white text-gray-900">Dynamic* </span>
                  <span className="duration font-bg overflow-hidden dark:text-white text-gray-900">Pricing</span>
                </div>
                <Link to="/contact" className="dark:bg-[#2AB69C] bg-[#2AB69C] font-bg font-bold inline-flex justify-center items-center py-2 px-5 text-base text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Contact Us
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PricingCards