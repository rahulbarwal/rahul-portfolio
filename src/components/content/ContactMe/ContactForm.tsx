import { useState } from "react";
import { writeToDB } from "../../../firebase/talkWithMe";
import { validateEmail } from "../../../utils/validation";

type Props = {};

const ContactForm = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validate = (): boolean => {
    if (!email || !name || !message) return false;
    if (!validateEmail(email)) return false;
    return true;
  };

  const handleOnSubmit = async () => {
    if (!validate()) return;
    await writeToDB({ name, email, message });
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div className="flex flex-wrap -m-2">
      <div className="p-2 w-1/2">
        <div className="relative">
          <label className="leading-7 text-sm text-gray-400">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="p-2 w-1/2">
        <div className="relative">
          <label className="leading-7 text-sm text-gray-400">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="relative">
          <label className="leading-7 text-sm text-gray-400">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            name="message"
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>
      <div className="p-2 w-full">
        <button
          className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
          onClick={handleOnSubmit}
        >
          Button
        </button>
      </div>
      <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
        <a className="text-blue-400">rahulbarwal654@gmail.com</a>
        <p className="leading-normal my-5">
          Joginder nagar
          <br />
          Himachal Pradesh, India
        </p>
        <a href="https://twitter.com/RahulBarwal" target="_blank">
          <span className="inline-flex">{TwitterSVG}</span>
        </a>
      </div>
    </div>
  );
};

export default ContactForm;

const TwitterSVG = (
  <a className="ml-4 text-gray-500">
    <svg
      fill="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      className="w-5 h-5"
      viewBox="0 0 24 24"
    >
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    </svg>
  </a>
);
