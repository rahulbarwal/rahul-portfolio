import React, { useEffect, useState } from "react";
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
          {props.project.image && (
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
              src={props.project.image}
            />
          )}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              personal
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
              {props.project.urls.live && (
                <a
                  className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
                  href={props.project.urls.live}
                  target="_blank"
                >
                  Demo
                </a>
              )}
              {props.project.urls.github && (
                <a
                  className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                  href={props.project.urls.github}
                  target="_blank"
                >
                  {GithubIcon}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;

const GithubIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#fff"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
