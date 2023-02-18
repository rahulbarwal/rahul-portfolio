import React from "react";
import Intro from "./content/Intro";
import Projects from "./content/Projects";

type Props = {};

const Body = (props: Props) => {
  return (
    <article className="w-full flex flex-col justify-end items-end">
      {/* <Intro /> */}
      <Projects />
    </article>
  );
};

export default Body;
