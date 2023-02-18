import React, { useReducer, useState } from "react";
import ProjectItem, { IPItem } from "./ProjectItem";
import data from "./data";
type Props = {};

const Projects = (props: Props) => {
  const projects: IPItem[] = data;
  const [currProjectIndex, dispatch] = useReducer(
    (state: number, action: { type: "inc" | "dec" }) => {
      if (action.type === "inc") {
        return state + 1;
      }
      if (action.type === "dec") {
        return state - 1;
      }
      throw Error("Unknown action.");
    },
    0
  );
  return (
    <section className="flex gap-2 items-end">
      {currProjectIndex !== 0 && (
        <button onClick={() => dispatch({ type: "dec" })}>Prev</button>
      )}
      <ProjectItem project={projects[currProjectIndex]} />
      {currProjectIndex !== projects.length - 1 && (
        <button onClick={() => dispatch({ type: "inc" })}>Next</button>
      )}
    </section>
  );
};

export default Projects;
