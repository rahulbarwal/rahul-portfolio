import React, { useContext, useEffect, useReducer, useState } from "react";
import ProjectItem from "./ProjectItem";
import data from "./data";
import ProjectNavigator from "./navigator/ProjectNavigator";
import { IPItem } from "../../../types/workEx";
import { globalStateContext } from "../../../context/global";
import { getWorkExFromDB } from "../../../firebase/workEx";
type Props = {};

const Projects = (props: Props) => {
  const { workExData, setWorkExData } = useContext(globalStateContext);
  useEffect(() => {
    if (workExData) return;
    const getdata = async () => {
      const data = await getWorkExFromDB();
      setWorkExData(data);
    };
    getdata();
  }, []);
  const [currProjectIndex, dispatch] = useReducer(
    (
      state: number,
      action: { type: "inc" | "dec" } | { type: "set"; payload: number }
    ) => {
      if (action.type === "inc") {
        return state + 1;
      }
      if (action.type === "dec") {
        return state - 1;
      }
      if (action.type === "set") {
        return action.payload;
      }
      throw Error("Unknown action.");
    },
    0
  );
  if (!workExData) {
    return <span></span>;
  }
  return (
    <>
      <section className="flex gap-2 items-end mb-20 lg:max-w-3xl xl:max-w-3xl max-w-full">
        <ProjectItem project={workExData[currProjectIndex]} />
      </section>

      <ProjectNavigator
        total={workExData.length}
        currentIndex={currProjectIndex}
        changeCurrentIndex={(val: number) =>
          dispatch({ type: "set", payload: val })
        }
      />
    </>
  );
};

export default Projects;
