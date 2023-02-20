import projects from "./data";
import Item from "./Item";

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
