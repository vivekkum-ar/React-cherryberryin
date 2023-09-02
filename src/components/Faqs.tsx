import { useEffect } from "react"

const Faqs = () => {

    useEffect(() => {
        document.querySelectorAll('[id^="question"]').forEach(function(button, index) {
            button.addEventListener('click', function() {
                var answer = document.getElementById('answer' + (index + 1));
                var arrow = document.getElementById('arrow' + (index + 1));

                if(answer != null && arrow != null ){
                if (answer.style.display === 'none' || answer.style.display === '') {
                    answer.style.display = 'block';
                    arrow.style.transform = 'rotate(0deg)';
                } else {
                    answer.style.display = 'none';
                    arrow.style.transform = 'rotate(-180deg)';
                }
            }
            });
        });
    }, [])
    

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
  <div className="parent-faqs-title border-2 border-red-500 flex flex-col place-content-center bg-white dark:text-white bg-white dark:bg-gray-900 overflow-hidden">
        <p className="my-5 font-bg text-center faqs-title dark:text-white bg-white dark:bg-gray-900 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl pb-3 overflow-hidden">
          Reach Us
        </p>
        <hr className="faqs-title w-60 md:w-fit md:px-60 mb-5 self-center h-0 border-2 border-gray-400" />
        {/* <p className="faqs-title mb-8 px-4 md:px-20 text-justify text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 font-bg">At CherryBerry, our focus is on leveraging technology, innovation, and strategic capital to unlock lasting value and foster sustainable economic growth. We are committed to transforming your digital landscape and empowering your brand for a prosperous future.</p> */}
      </div>
    <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
      <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
        <button type="button" id="question1" data-state="closed" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
          <span className="flex text-lg font-semibold text-black">How can I get started?</span>
          <svg id="arrow1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div id="answer1" style={{display: 'none'}} className="px-4 pb-5 sm:px-6 sm:pb-6">
          <p>Getting started is easy! Sign up for an account, and you'll have access to our platform's
            features. No credit card required for the initial signup.</p>
        </div>
      </div>
      <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
        <button type="button" id="question2" data-state="closed" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
          <span className="flex text-lg font-semibold text-black">What is the pricing structure?</span>
          <svg id="arrow2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div id="answer2" style={{display: 'none'}} className="px-4 pb-5 sm:px-6 sm:pb-6">
          <p>Our pricing structure is flexible. We offer both free and paid plans. You can choose the one
            that
            suits your needs and budget.</p>
        </div>
      </div>
      <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
        <button type="button" id="question3" data-state="closed" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
          <span className="flex text-lg font-semibold text-black">What kind of support do you provide?</span>
          <svg id="arrow3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div id="answer3" style={{display: 'none'}} className="px-4 pb-5 sm:px-6 sm:pb-6">
          <p>We offer comprehensive customer support. You can reach out to our support team through
            various
            channels, including email, chat, and a knowledge base.</p>
        </div>
      </div>
      <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
        <button type="button" id="question4" data-state="closed" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
          <span className="flex text-lg font-semibold text-black">Can I cancel my subscription anytime?</span>
          <svg id="arrow4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div id="answer4" style={{display: 'none'}} className="px-4 pb-5 sm:px-6 sm:pb-6">
          <p>Yes, you can cancel your subscription at any time without any hidden fees. We believe in
            providing a hassle-free experience for our users.</p>
        </div>
      </div>
    </div>
    <p className="text-center text-gray-600 textbase mt-9">
      Still have questions?
      <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">Contact
        our support
      </span>
    </p>
  </div>
</section>

  )
}

export default Faqs