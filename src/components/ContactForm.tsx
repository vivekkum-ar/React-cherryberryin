import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  // Add your prop types here
}

const ContactForm: React.FC<ContactFormProps> = ({}) => {

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

  return (
    
    <>
     {/* Display the alert if showAlert is true */}
     {showAlert && (
<div id="" className="fixed z-40 w-84 top-5 items-center p-4 mb-4 text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400 border border-dark-500" role="alert">

<span className="sr-only">Info</span>
<div className="ms-3 text-sm font-medium">
<strong>✔️ Submitted !</strong> We have received your input, and we'll get back to you. Please check your email. &nbsp;&nbsp;&nbsp;&nbsp;
<button type="button" onClick={() => setShowAlert(false)} className="inline ms-2 -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">
  <span className="sr-only">Close</span>
  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
  </svg>
</button>
</div>
</div>


      // <div className="d-flex justify-content-center">
      // <div className="alert-container">
      //     <div className="alert alert-success alert-dismissible fade show" role="alert">
      //       <strong>Submitted !</strong> We have received your input, and we'll get back to you. Please check your email.
      //       <button
      //         type="button"
      //         className="btn-close text-dark fs-2 pe-2 pt-2"
      //         data-bs-dismiss="alert"
      //         aria-label="Close"
      //         onClick={() => setShowAlert(false)}
      //       >
      //         X
      //         </button>
            
      //     </div>
      //   </div>
      //   </div>
       )} 
    <div className="h-screen w-screen md:mt-32" style={{ backgroundImage: `url("./images/undraw_agreement_re_d4dv.svg")`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }}> 
    </div>

    <div className="col-md-7 md:p-5 p-3 p-xs-2 md:me-2 col-lg-6 text-black dark:text-white relative md:static -top-96 md:top-0 fw-bolder contact-fp-div md:my-5">
      {/* <h4 className="mb-3 fw-bolder display-6 font-bg">
        Contact Form
      </h4> */}
      <form className="needs-validation" ref={form} onSubmit={sendEmail}>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="firstName" className="form-label">
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
            <label htmlFor="lastName" className="form-label">
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
            <label htmlFor="contact" className="form-label">
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
            <label htmlFor="country" className="form-label">
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
            <label htmlFor="email" className="form-label">
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
            <label htmlFor="address" className="form-label">
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
            <label htmlFor="message" className="form-label">
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
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="same-address"
            required />
          <label className="form-check-label" htmlFor="same-address">
            I can be contacted if need be.
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="save-info"
            required />
          <label className="form-check-label" htmlFor="save-info">
            I agree with the terms and conditions as provided{" "}
            <Link to="" className="fw-bolder text-primary">
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
    </div></>
  
  )
}

export default ContactForm