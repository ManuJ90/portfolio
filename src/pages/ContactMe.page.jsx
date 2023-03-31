import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../components/SectionTitle.component";
import { useState } from "react";

function ContactMe() {
  const form = useRef();
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_a47ihzq",
        "template_8eh49hl",
        form.current,
        "Cem5A63ZS_gcZ9xrF"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  return (
    <div id="contactMe" className="pb-10">
      <SectionTitle>Contact Me</SectionTitle>
      {result && (
        <div className="m-auto w-10/12 p-10">
          <div className="relative m-auto mt-8 w-fit text-center">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon via-spring to-neon2 opacity-70 rounded-lg filter blur-xl animate-pulse" />
            <div className="relative w-full rounded-lg border border-gray-100 bg-black/10 px-7 py-2 font-bold uppercase text-black backdrop-blur-3xl font-nunito dark:border-gray-700 dark:text-white">
              Message sent
            </div>
          </div>
        </div>
      )}
      <div className="m-auto w-10/12">
        <span>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="m-auto flex flex-col gap-5 p-5 text-gray-600 dark:text-gray-400">
            <div>
              <div>
                <label
                  htmlFor="name"
                  className="text-lg font-medium uppercase text-gray-600 font-ptSans dark:text-gray-300">
                  Full Name
                </label>
                <input
                  className="mt-2 w-full rounded-lg bg-gray-300 p-3 text-gray-900 transition duration-150 focus:ring-lava focus:ring-1 focus:ring-offset-2 focus:ring-offset-black"
                  required
                  id="name"
                  type="text"
                  name="user_name"
                />
              </div>
              <div className="mt-8">
                <label
                  htmlFor="email"
                  className="text-lg font-medium uppercase text-gray-600 font-ptSans dark:text-gray-300">
                  Email
                </label>
                <input
                  className="mt-2 w-full rounded-lg bg-gray-300 p-3 text-gray-900 transition duration-150 focus:ring-lava focus:ring-1 focus:ring-offset-2 focus:ring-offset-black"
                  required
                  id="email"
                  type="email"
                  name="user_email"
                />
              </div>
              <div className="mt-8">
                <label
                  htmlFor="message"
                  className="text-lg font-medium uppercase text-gray-600 font-ptSans dark:text-gray-300">
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  className="mt-2 h-32 w-full rounded-lg bg-gray-300 p-3 text-gray-900 transition duration-150 focus:ring-lava focus:ring-1 focus:ring-offset-2 focus:ring-offset-black"
                  name="message"></textarea>
              </div>
              <div className="flex justify-end">
                <div className="relative mt-8 w-fit group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-lava via-imperial to-scarlet opacity-70 rounded-lg blur-sm group-active:blur-md transition duration-1000 group-active:duration-200 group-active:-inset-1 animate-tilt"></div>
                  <button
                    type="submit"
                    className="relative w-full rounded-lg bg-white px-7 py-2 font-bold uppercase text-black font-nunito leadin-none dark:bg-black dark:text-white">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </span>
      </div>
    </div>
  );
}

export default ContactMe;
