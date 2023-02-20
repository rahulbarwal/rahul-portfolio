import { useContext, useEffect } from "react";
import { globalStateContext } from "../../../context/global";
import { getSideProjFromDB } from "../../../firebase/sideProj";

import Item from "./Item";

type Props = {};

const SideProjects = (props: Props) => {
  const { projects, setProjects } = useContext(globalStateContext);
  useEffect(() => {
    if (projects) return;
    const getdata = async () => {
      const data = await getSideProjFromDB();
      setProjects(data);
    };
    getdata();
  }, []);

  return (
    <>
      {projects && projects.map((p, index) => <Item key={index} project={p} />)}
    </>
  );
};

export default SideProjects;
