import React from "react";
import { SideProjectDetails } from "../../../types/sideProj";
import Pill from "../../shared/pills";

type Props = {
  project: SideProjectDetails;
};

const Item = (props: Props) => {
  return (
    <section className="text-gray-400 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap h-1/2">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-1">
              {props.project.name}
            </h1>
            <div className="flex mb-4 gap-2 text-white">
              {props.project.tech.map((tech, index) => (
                <Pill text={tech} key={index} />
              ))}
            </div>
            <p className="leading-relaxed">{props.project.description}</p>
            <div className="flex mt-4">
              <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                Demo
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                {HeartIcon}
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                {GithubIcon}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;

const HeartIcon = (
  <svg
    fill="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    className="w-5 h-5"
    viewBox="0 0 24 24"
  >
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
  </svg>
);

const GithubIcon = (
  <svg
    fill="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    className="w-5 h-5"
    viewBox="0 0 24 24"
  >
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
  </svg>
);
