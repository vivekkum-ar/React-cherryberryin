import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { HomeRoundedIcon, MailIcon, PhoneRoundedIcon, WorkRoundedIcon } from "../components/iconify";

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
        Get In <span className="text-blue-500">Touch</span>
      </h3>
      <p className="mt-4 leading-7 text-gray-200">
      Empowering Connections, Building Relationships.<b className="text-blue-500">Reach Out to Us</b>  – Your Gateway to Seamless Collaboration and Unparalleled Excellence.
      </p>
      <div className="flex items-center mt-5 text-blue-500">
        {HomeRoundedIcon}
        <span className="text-sm ms-2 text-white">Vishal Nagar, DP Road, Pune, Bharat - 411027</span>
      </div>
      <div className="flex items-center mt-5 text-blue-500">
        {PhoneRoundedIcon}
        <span className="text-sm ms-2 text-white">+91 8788167039</span>
      </div>
      <div className="flex items-center mt-5 text-blue-500">
        {WorkRoundedIcon}
        <span className="text-sm ms-2 text-white">We're Open 9 A.M. to 5 P.M.</span>
      </div>
      <div className="flex items-center mt-5 text-blue-500">
        {MailIcon}
        <span className="text-sm ms-2 text-white">support@cherryberry.in</span>
      </div>

      <div className="w-full mt-4 md:mt-10 px-4"><iframe className="w-full h-full" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Vishal%20Nagar,%20DP%20Road,%20Pune,%20Bharat%20-%20411027+(CherryBerry.in)&t=&z=14&ie=UTF8&iwloc=B&output=embed">&lt;a href="https://www.maps.ie/population/"&gt;Population mapping&lt;/a&gt;</iframe></div>

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