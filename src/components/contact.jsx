import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wnrh4zc',
        'template_5ejaach',
        form.current,
        'F1DDYDOYxCc4c-Jd-'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 6000);

  return (
    <div id="contact" className="">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-indigo-600 font-bold">CONTACT</h1>
          <h1 className="text-3xl ">Have a Question?</h1>
          <p className="w-1/2 text-center text-gray-400">
            Do you have an idea? Let's discuss it and see what we can do
            together.
          </p>
        </div>
        <form
          className="mt-5 p-8 flex flex-col gap-5 items-center"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm "
            type="text"
            placeholder="Name Surname"
            name="from_name"
          />
          <input
            className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm "
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm "
            cols="30"
            rows="10"
            placeholder="Message..."
            name="message"
          ></textarea>
          <button className="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer">
            Submit
          </button>
          <div className="">
            {result ? <h1>Your message was sent succesfully</h1> : null}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
