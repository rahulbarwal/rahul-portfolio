import React, { useReducer, useState } from "react";
import ProjectItem, { IPItem } from "./ProjectItem";

type Props = {};

const Projects = (props: Props) => {
  const projects: IPItem[] = [
    {
      companyName: "Fluxon",
      duration: {
        startedAt: {
          month: "March",
          year: "2022",
        },
        endedAt: {
          month: "February",
          year: "2023",
        },
      },
      description: [
        {
          projectName: "Gambit",
          duration: "1.5 months",
          description: {
            texts: ["Implemented time critical designs in 1 month."],
            techStack: ["React Native", "expo", "firebase"],
          },
        },
        {
          projectName: "EON",
          duration: "2 months",
          description: {
            texts: [
              "Migrated complete UI to NextJS in 1.5 months",
              "Lead the frontend development, delivering critical designs that helped EON’s CEO grab a deal with a major garment exporter.",
            ],
            techStack: ["Python", "NextJS", "Docker"],
          },
        },
        {
          projectName: "OpenBracket",
          duration: "7.5 months",
          description: {
            texts: [
              "Designed and implemented Code execution in 2 months for openbracket",
              "Reduced build times by 90% by implementing turborepo in CI/ CD",
              "Reduced image size by 50 % by using ignite alpine for micro VM.",
              "Implemented github action to support firebase functions deployment from a monorepo.",
            ],
            techStack: [
              "NextJS",
              "Firebase",
              "GCP - Compute",
              "Cloud run",
              "Pubsub",
            ],
          },
        },
      ],
      position: "Tech Lead",
    },
    {
      companyName: "Globant",
      duration: {
        startedAt: {
          month: "September",
          year: "2019",
        },
        endedAt: {
          month: "February",
          year: "2022",
        },
      },
      description: [
        {
          projectName: "Login",
          duration: "11 months",
          description: {
            texts: [
              "Transitioned 16+ markets of HSBC from the legacy Saas platform to DSP. Identified performance bottlenecks in UI rendering, improving performance 3 times.",
            ],
            techStack: ["React Native", "expo", "firebase"],
          },
        },
        {
          projectName: "OLR/OFR",
          duration: "1 year",
          description: {
            texts: [
              "Enhanced existing functionalities and added 3 online reset options, increasing user engagement by 30%.",
            ],
            techStack: ["Python", "NextJS", "Docker"],
          },
        },
        {
          projectName: "Manage Security",
          duration: "6 months",
          description: {
            texts: [
              "Developed and deployed the entire project to production for all modules - devices, password, and username. The initial response to this project was good leading to integration into multiple markets",
              "Resolved 90% of critical production bugs in 3 months.",
            ],
            techStack: [
              "NextJS",
              "Firebase",
              "GCP - Compute",
              "Cloud run",
              "Pubsub",
            ],
          },
        },
      ],
      position: "Tech Lead",
    },
  ];
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
