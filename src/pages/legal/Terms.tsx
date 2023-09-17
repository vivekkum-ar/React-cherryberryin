import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

interface TermsProps {
  // Add your prop types here
}

const Terms: React.FC<TermsProps> = ({}) => {

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-300 font-bg">
        <div className="container mx-auto px-4 py-8  max-w-screen-lg">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

        <p className="mb-4">
            Please read these terms and conditions carefully before using the CherryBerry website.
            By accessing or using our website, you agree to be bound by these terms and conditions.
            If you do not agree with any part of these terms and conditions, please do not use our website.
        </p>

        <section>
            <h2 className="text-2xl font-bold mb-2">1. Intellectual Property Rights</h2>
            <p className="mb-4">
                1.1 All intellectual property rights, including but not limited to copyrights, trademarks,
                and logos, associated with the CherryBerry website and its content are owned by or licensed to CherryBerry,
                unless otherwise indicated.
                You are prohibited from reproducing, modifying, distributing, or displaying any part of our website
                without our prior written consent.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-bold mb-2">2. Use of Website</h2>
            <p className="mb-4">
                2.1 You agree to use the CherryBerry website for lawful purposes only and in a manner that does not
                infringe the rights of others or restrict or inhibit their use and enjoyment of the website.
                You are prohibited from posting or transmitting any material that is unlawful, defamatory, obscene, or offensive.
            </p>
            <p className="mb-4">
                2.2 You are responsible for ensuring that any information you provide to us through the website is accurate,
                complete, and up-to-date. You agree not to impersonate any person or entity or misrepresent your affiliation
                with any person or entity.
            </p>
        </section>

        {/* ... (Continue with other sections) ... */}

<section>
    <h2 className="text-2xl font-bold mb-2">3. Accuracy of Information</h2>
    <p className="mb-4">
        3.1 While we strive to provide accurate and up-to-date information on the CherryBerry website,
        we make no representations or warranties of any kind, express or implied, about the completeness,
        accuracy, reliability, suitability, or availability of the information.
        Any reliance you place on such information is therefore strictly at your own risk.
    </p>
    <p className="mb-4">
        3.2 We reserve the right to modify, update, or remove any content on the CherryBerry website at any time
        without prior notice.
    </p>
</section>

<section>
    <h2 className="text-2xl font-bold mb-2">4. Third-Party Websites</h2>
    <p className="mb-4">
        4.1 The CherryBerry website may contain links to third-party websites for your convenience and information.
        We do not endorse or have control over the content, products, or services provided by these third-party websites.
        We are not responsible for the privacy practices or the content of such websites.
    </p>
    <p className="mb-4">
        4.2 Any interactions, transactions, or disputes between you and any third-party website linked from the CherryBerry
        website are solely between you and the third-party website. We shall not be responsible or liable for any loss
        or damage arising from such interactions, transactions, or disputes.
    </p>
</section>

<section>
    <h2 className="text-2xl font-bold mb-2">5. Limitation of Liability</h2>
    <p className="mb-4">
        5.1 In no event shall CherryBerry or its affiliates be liable for any direct, indirect, incidental, special,
        or consequential damages arising out of or in any way connected with the use of our website or the inability
        to use our website, even if we have been advised of the possibility of such damages.
    </p>
    <p className="mb-4">
        5.2 You acknowledge that the use of the CherryBerry website is at your own risk. We do not warrant that the website
        will be uninterrupted, error-free, or free from viruses or other harmful components.
    </p>
</section>

<section>
    <h2 className="text-2xl font-bold mb-2">6. Indemnity</h2>
    <p className="mb-4">
        6.1 You agree to indemnify and hold CherryBerry and its affiliates, employees, agents, and representatives
        harmless from any claims, demands, losses, liabilities, and expenses, including reasonable attorneys' fees,
        arising out of or in connection with your use of our website or any violation of these terms and conditions.
    </p>
</section>


        <section>
            <h2 className="text-2xl font-bold mb-2">7. Governing Law and Jurisdiction</h2>
            <p className="mb-4">
                7.1 These terms and conditions shall be governed by and construed in accordance with the laws of Pune, India.
                Any disputes arising out of or in connection with these terms and conditions shall be subject to the exclusive
                jurisdiction of the courts of Pune, India.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-bold mb-2">8. Changes to Terms and Conditions</h2>
            <p className="mb-4">
                8.1 We reserve the right to modify or amend these terms and conditions at any time without prior notice.
                Any changes will be effective immediately upon posting on the CherryBerry website.
                Your continued use of our website after any modifications or amendments will constitute your acceptance
                of such changes.
            </p>
        </section>

        <p className="mb-4">
            If you have any questions or concerns regarding these terms and conditions, please contact us using the information
            provided in the Privacy Policy section <Link to="/legal/privacypolicy" className='ms-1 font-bold text-blue-700'>here</Link>.
        </p>

        <p>
            These terms and conditions were last updated on 24/11/2023.
        </p>
    </div>
</div>

  )
}

export default Terms