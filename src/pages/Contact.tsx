import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [showAlert, setShowAlert] = useState(false);


  /* ----------------------- Fetching secrets from .env ----------------------- */
  const serviceId = import.meta.env.VITE_YOUR_SERVICE_ID;
  const templateId = import.meta.env.VITE_YOUR_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_YOUR_PUBLIC_KEY;
  
  if (!serviceId || !templateId || !publicKey) {
    console.error("One or more environment variables are not defined.",showAlert);
    return;
  }
  
  /* --------------------------- EmailJS starts here -------------------------- */
    const form = useRef<HTMLFormElement>(null);
  
    const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();
  
      if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      } else {
        console.error("Form ref is not properly set up.");
      }
        setShowAlert(true);
  
        // Hide the alert after 10 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 10000);
  
        // Reset the form after submission
      if (form.current) {
        form.current.reset();
      }
    
    };
  
  /* ----------------------- Form validation starts here ---------------------- */
    useEffect(() => {
      "use strict";
  
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll(".needs-validation");
  
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event:any) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
  
            form.classList.add("was-validated");
          },
          false
        );
      });
    }, []);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';

  // Cleanup effect
  return () => {
    document.body.style.overflowY = 'auto';
  };
}, []);

  return (
    <>
    <div className="max-w-screen-xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-12">
    <div className="font-bg bg-gray-900 md:col-span-4 p-10 text-white">
      <p className="mt-4 text-sm leading-7 font-regular uppercase">
        Contact
      </p>
      <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
        Get In <span className="text-indigo-700">Touch</span>
      </h3>
      <p className="mt-4 leading-7 text-gray-200">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s.
      </p>
      <div className="flex items-center mt-5">
        <svg className="h-6 mr-2 text-indigo-700" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.536 489.536" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 489.536 489.536">
          <g>
            <g>
              <path d="m488.554,476l-99-280.2c-1-4.2-5.2-7.3-9.4-7.3h-45.6c12.9-31.1 19.6-54.9 19.6-70.8 0-64.6-50-117.7-112.5-117.7-61.5,0-112.5,52.1-112.5,117.7 0,17.6 8.2,43.1 19.9,70.8h-39.7c-4.2,0-8.3,3.1-9.4,7.3l-99,280.2c-3.2,10.3 6.3,13.5 9.4,13.5h468.8c4.2,0.5 12.5-4.2 9.4-13.5zm-246.9-455.3c51,1.06581e-14 91.7,43.7 91.7,96.9 0,56.5-79.2,182.3-91.7,203.1-31.3-53.1-91.7-161.5-91.7-203.1 0-53.1 40.6-96.9 91.7-96.9zm-216.7,448l91.7-259.4h41.7c29.9,64.1 83.3,151 83.3,151s81.4-145.7 83.8-151h47.4l91.7,259.4h-439.6z">
              </path>
              <rect width="136.5" x="177.054" y="379.1" height="20.8" />
              <path d="m289.554,108.2c0-26-21.9-47.9-47.9-47.9s-47.9,21.9-47.9,47.9 20.8,47.9 47.9,47.9c27.1,0 47.9-21.8 47.9-47.9zm-75-1c0-14.6 11.5-27.1 27.1-27.1s27.1,12.5 27.1,27.1-11.5,27.1-27.1,27.1c-14.6,2.84217e-14-27.1-12.5-27.1-27.1z">
              </path>
            </g>
          </g>
        </svg>
        <span className="text-sm">House #14, Street #12, Darulaman Road, Kabul, Afghanistan.</span>
      </div>
      <div className="flex items-center mt-5">
        <svg className="h-6 mr-2 text-indigo-700" fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.002 60.002" style={{}} xmlSpace="preserve">
          <g>
            <path d="M59.002,37.992c-3.69,0-6.693-3.003-6.693-6.693c0-0.553-0.447-1-1-1s-1,0.447-1,1c0,4.794,3.899,8.693,8.693,8.693
		c0.553,0,1-0.447,1-1S59.554,37.992,59.002,37.992z">
            </path>
            <path d="M58.256,35.65c0.553,0,1-0.447,1-1s-0.447-1-1-1c-0.886,0-1.605-0.72-1.605-1.605c0-0.553-0.447-1-1-1s-1,0.447-1,1
		C54.65,34.033,56.267,35.65,58.256,35.65z">
            </path>
            <path d="M20.002,2.992c3.691,0,6.693,3.003,6.693,6.693c0,0.553,0.448,1,1,1s1-0.447,1-1c0-4.794-3.9-8.693-8.693-8.693
		c-0.552,0-1,0.447-1,1S19.449,2.992,20.002,2.992z">
            </path>
            <path d="M19.748,6.334c0,0.553,0.448,1,1,1c0.885,0,1.604,0.72,1.604,1.605c0,0.553,0.448,1,1,1s1-0.447,1-1
		c0-1.988-1.617-3.605-3.604-3.605C20.196,5.334,19.748,5.781,19.748,6.334z">
            </path>
            <path d="M44.076,37.889c-1.276-0.728-2.597-0.958-3.721-0.646c-0.844,0.234-1.532,0.768-1.996,1.546
		c-1.02,1.22-2.286,2.646-2.592,2.867c-2.367,1.604-4.25,1.415-6.294-0.629L17.987,29.542c-2.045-2.045-2.233-3.928-0.631-6.291
		c0.224-0.31,1.65-1.575,2.87-2.596c0.778-0.464,1.312-1.152,1.546-1.996c0.311-1.123,0.082-2.444-0.652-3.731
		c-0.173-0.296-4.291-7.27-8.085-9.277c-1.926-1.019-4.255-0.669-5.796,0.872L4.7,9.059c-4.014,4.014-5.467,8.563-4.321,13.52
		c0.956,4.132,3.742,8.529,8.282,13.068l14.705,14.706c5.762,5.762,11.258,8.656,16.298,8.656c3.701,0,7.157-1.562,10.291-4.695
		l2.537-2.537c1.541-1.541,1.892-3.87,0.872-5.796C51.356,42.186,44.383,38.069,44.076,37.889z M51.078,50.363L48.541,52.9
		c-6.569,6.567-14.563,5.235-23.76-3.961L10.075,34.233c-4.271-4.271-6.877-8.344-7.747-12.104
		c-0.995-4.301,0.244-8.112,3.786-11.655l2.537-2.537c0.567-0.566,1.313-0.862,2.07-0.862c0.467,0,0.939,0.112,1.376,0.344
		c3.293,1.743,7.256,8.454,7.29,8.511c0.449,0.787,0.62,1.608,0.457,2.196c-0.1,0.36-0.324,0.634-0.684,0.836l-0.15,0.104
		c-0.853,0.712-2.883,2.434-3.308,3.061c-0.612,0.904-1.018,1.792-1.231,2.665c-0.711-1.418-1.286-3.06-1.475-4.881
		c-0.057-0.548-0.549-0.935-1.098-0.892c-0.549,0.058-0.949,0.549-0.892,1.099c0.722,6.953,6.129,11.479,6.359,11.668
		c0.025,0.02,0.054,0.028,0.08,0.045l10.613,10.613c0.045,0.045,0.092,0.085,0.137,0.129c0.035,0.051,0.058,0.108,0.104,0.154
		c0.189,0.187,4.704,4.567,11.599,5.283c0.035,0.003,0.07,0.005,0.104,0.005c0.506,0,0.94-0.383,0.994-0.896
		c0.057-0.55-0.342-1.041-0.892-1.099c-2.114-0.219-3.987-0.839-5.548-1.558c0.765-0.23,1.543-0.612,2.332-1.146
		c0.628-0.426,2.35-2.455,3.061-3.308l0.104-0.151c0.202-0.359,0.476-0.583,0.836-0.684c0.588-0.159,1.409,0.008,2.186,0.45
		c0.067,0.04,6.778,4.003,8.521,7.296C52.202,48.062,51.994,49.447,51.078,50.363z">
            </path>
          </g>
        </svg>
        <span className="text-sm">+93 749 99 65 50</span>
      </div>
      <div className="flex items-center mt-5">
        <svg className="h-6 mr-2 text-indigo-700" fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300.988 300.988" style={{}} xmlSpace="preserve">
          <g>
            <g>
              <path d="M150.494,0.001C67.511,0.001,0,67.512,0,150.495s67.511,150.493,150.494,150.493s150.494-67.511,150.494-150.493
          S233.476,0.001,150.494,0.001z M150.494,285.987C75.782,285.987,15,225.206,15,150.495S75.782,15.001,150.494,15.001
          s135.494,60.782,135.494,135.493S225.205,285.987,150.494,285.987z">
              </path>
              <polygon points="142.994,142.995 83.148,142.995 83.148,157.995 157.994,157.995 157.994,43.883 142.994,43.883 		">
              </polygon>
            </g>
          </g>
        </svg>
        <span className="text-sm">24/7</span>
      </div>
    </div>
    <div className="formfoodies md:col-span-8 md:py-10 md:px-20 px-6 my-6 md:my-0" style={{backgroundImage: `url("./images/undraw_agreement_re_d4dv.svg")`,backgroundRepeat:"no-repeat",}}>
    <div className="contact-card-title md:p-5 p-3 text-black dark:text-white static -top-96 md:top-0 fw-bolder contact-fp-div md:my-5">
      {/* <h4 className="mb-3 fw-bolder display-6 font-bg">
        Contact Form
      </h4> */}
      <form className="needs-validation" ref={form} onSubmit={sendEmail}>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="firstName" className="form-label dark:text-black">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="user_fname"
              placeholder="Your name"
              required />
            {/* <div className="invalid-feedback">
              Valid name is required.
            </div> */}
          </div>
          {/* <div className="col-sm-6">
            <label htmlFor="lastName" className="form-label dark:text-black">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="user_lname"
              placeholder="Last Name"
              required />
            // <div className="invalid-feedback">
              Valid last name is required.
            </div>
          </div> */}
          <div className="col-md-6">
            <label htmlFor="contact" className="form-label dark:text-black">
              Contact Number
            </label>
            <div className="input-group has-validation">
              {/* <span className="input-group-text">+91</span> */}
              <input
                type="tel"
                className="form-control"
                id="contact"
                name="user_contact"
                placeholder="Contact"
                required />
                
              {/* <div className="invalid-feedback">
                Your contact number is required.
              </div> */}
              
            </div>
            <small className=" dark:text-white">
              Contact info with country code
            </small>
          </div>
          <div className="col-md-6">
            <label htmlFor="country" className="form-label dark:text-black">
              Query type
            </label>
            <select className="form-select" id="country" name="user_qtype" required>
              <option value="Feedback">Feedback</option>
              <option value="Enquiry">Enquiry</option>
              <option value="">Others</option>
            </select>
            <small className=" dark:text-white">
              Allow us to serve you better, provide a type.
            </small>
            {/* <div className="invalid-feedback">
              Please select a valid country.
            </div> */}
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label dark:text-black">
              Email <span className="text-muted">(Optional)</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="user_email"
              placeholder="you@example.com"
              required />
            {/* <div className="invalid-feedback">
              Please enter a valid email address for updates.
            </div> */}
          </div>
          {/* <div className="col-12">
            <label htmlFor="address" className="form-label dark:text-black">
              Address <span className="text-muted">(Optional)</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="address2"
              name="user_address"
              placeholder="Apartment or suite" />
          </div> */}
          <div className="col-12">
            <label htmlFor="message" className="form-label dark:text-black">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              placeholder="Your enquiry, message, feedback goes here"
              name="user_message"
              required
              rows={3}
            ></textarea>
            {/* <div className="invalid-feedback">
              Please enter your enquiry, message, feedback.
            </div> */}
          </div>
        </div>
        <hr className="my-4" />
        {/* <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="same-address"
            required />
          <label className="form-check-label" htmlFor="same-address">
            I can be contacted if need be.
          </label>
        </div> */}
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="save-info"
            required />
          <label className="form-check-label dark:text-black" htmlFor="save-info">
            I agree with the terms and conditions as provided{" "}
            <Link to="/legal/terms" className="fw-bolder text-primary">
              here
            </Link>
          </label>
        </div>
        <hr className="my-4" />
        <div className="flex justify-content-center align-items-center">
          <button className="font-bg" type="submit">
            <div className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Contact us
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </div>
          </button>
        </div>
      </form>
      {/* Display the alert if showAlert is true
{showAlert && (
  <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShowAlert(false)} />
  </div>
)} */}
    </div>
  </div>
  </div>
</div>

    </>
  )
}

export default Contact