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
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-300 font-bg">
        <div className="container mx-auto px-4 py-8  max-w-screen-lg">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

        <p className="mb-4">
            This privacy policy sets out how CherryBerry ("we" or "us") uses and protects any information that you give us when you use our website.
        </p>

        <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>

        <ul className="list-disc list-inside mb-4">
            <li>Your name and contact information</li>
            <li>Demographic information</li>
            <li>Other information relevant to customer surveys and/or offers</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">How We Use the Information</h2>

        <ul className="list-disc list-inside mb-4">
            <li>Internal record keeping</li>
            <li>Improving our products and services</li>
            <li>Sending promotional emails about new products, special offers, or other information which we think you may find interesting</li>
            <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, or mail. We may use the information to customize the website according to your interests.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">Security</h2>

        <p className="mb-4">
            We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
        </p>

        <h2 className="text-2xl font-bold mb-2">Cookies</h2>

        <p className="mb-4">
            A cookie is a small file that asks permission to be placed on your computer's hard drive. Once you agree, the file is added, and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes, and dislikes by gathering and remembering information about your preferences.
        </p>

        <p className="mb-4">
            Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
        </p>

        <h2 className="text-2xl font-bold mb-2">Links to Other Websites</h2>

        <p className="mb-4">
            Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
        </p>

        <h2 className="text-2xl font-bold mb-2">Controlling Your Personal Information</h2>

        <ul className="list-disc list-inside mb-4">
            <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by contacting us using the information provided below.</li>
            <li>We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.</li>
            <li>You may request details of personal information which we hold about you. If you would like a copy of the information held on you, please contact us using the information provided below.</li>
            <li>If you believe that any information we are holding on you is incorrect or incomplete, please contact us as soon as possible at the address or email address provided below. We will promptly correct any information found to be incorrect.</li>
        </ul>

        <p className="mb-4 text-gray-400">
            This privacy policy is subject to change without notice.
        </p>

        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>

        <p className="mb-4">
            If you have any questions or concerns about our privacy policy, please feel free to contact us using the following contact details:
        </p>

        <address>
            Vishal Nagar, DP Road, Pune, Bharat - 411027<br />
            Phone: +91 8788167039<br />
            Email: support@cherryberry.in
        </address>

        <h2 className="text-2xl font-bold my-2">Disclaimer</h2>
          <p className="mb-4">
            The information provided on this website is for general informational purposes only. We make no
            representations or warranties of any kind, express or implied, about the completeness, accuracy,
            reliability, suitability, or availability with respect to the website or the information.
          </p>
          <h2 className="text-2xl font-bold mb-2">Terms of Use</h2>
          <p className="mb-4">
            By using this website, you agree to comply with and be bound by our terms of use. Read the full terms of use
            <Link to="/legal/terms" className='ms-1 font-bold text-blue-700'>here</Link>.
          </p>
    </div>
</div>

  )
}

export default Privacy