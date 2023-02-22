import { useContext, useEffect, useState } from "react";
import { globalStateContext } from "../../../context/global";
import { getSideProjFromDB } from "../../../firebase/sideProj";
import ProjectNavigator from "../../shared/navigator/ProjectNavigator";

import Item from "./Item";
import LoaderSkeleton from "./LoaderSkeleton";

type Props = {};

const SideProjects = (props: Props) => {
  const { projects, setProjects } = useContext(globalStateContext);
  const [currProjectIndex, setcurrProjectIndex] = useState(0);
  useEffect(() => {
    if (projects) return;
    const getdata = async () => {
      const data = await getSideProjFromDB();
      setProjects(data);
    };
    getdata();
  }, []);

  if (!projects) {
    return <LoaderSkeleton />;
  }
  return (
    <>
      <Item project={projects[currProjectIndex]} />
      <ProjectNavigator
        total={projects.length}
        changeCurrentIndex={(val: number) => setcurrProjectIndex(val)}
      />
    </>
  );
};

export default SideProjects;
