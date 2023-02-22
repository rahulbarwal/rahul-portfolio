import { useContext, useEffect, useReducer, useState } from "react";
import { globalStateContext } from "../../../context/global";
import { getWorkExFromDB } from "../../../firebase/workEx";
import ProjectNavigator from "../../shared/navigator/ProjectNavigator";
import LoaderSkeleton from "./LoaderSkeleton";
import ProjectItem from "./ProjectItem";
type Props = {};

const Projects = (props: Props) => {
  const { workExData, setWorkExData } = useContext(globalStateContext);
  const [currProjectIndex, setcurrProjectIndex] = useState(0);
  useEffect(() => {
    if (workExData) return;
    const getdata = async () => {
      const data = await getWorkExFromDB();
      setWorkExData(data);
    };
    getdata();
  }, []);
  if (!workExData) {
    return <LoaderSkeleton />;
  }
  return (
    <>
      <section className="flex gap-2 items-end mb-20 lg:max-w-3xl xl:max-w-3xl max-w-full">
        <ProjectItem project={workExData[currProjectIndex]} />
      </section>

      <ProjectNavigator
        total={workExData.length}
        changeCurrentIndex={(val: number) => setcurrProjectIndex(val)}
      />
    </>
  );
};

export default Projects;
