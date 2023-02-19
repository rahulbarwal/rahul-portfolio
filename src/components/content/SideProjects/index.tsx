import React from "react";
import Item from "./Item";
import projects from "./data";

type Props = {};

const SideProjects = (props: Props) => {
  return (
    <>
      {projects.map((p, index) => (
        <Item key={index} project={p} />
      ))}
    </>
  );
};

export default SideProjects;
