import React from "react";
import CompanyProjectDescription, {
  ICompanyProject,
  IDescription,
} from "./CompanyProjectDescription";

type Props = {
  project: IPItem;
};

type IDuration = {
  month: string;
  year: string;
};
type ITenure = {
  startedAt: IDuration;
  endedAt: IDuration;
};
export type IPItem = {
  companyName: string;
  duration: ITenure | boolean;
  description: ICompanyProject[] | IDescription;
  position: string;
};

const ProjectItem = ({ project }: Props) => {
  let durationNode;
  if (typeof project.duration === "boolean") {
    durationNode = <p>I am currently working here</p>;
  } else {
    durationNode = (
      <p className=" text-gray-500">
        <span>{project.duration.startedAt.month}</span>&nbsp;
        <span>{project.duration.startedAt.year}</span>&nbsp; - &nbsp;
        <span>{project.duration.endedAt.month}</span>&nbsp;
        <span>{project.duration.endedAt.year}</span>&nbsp;
      </p>
    );
  }

  return (
    <section>
      <h1 className="text-2xl ">
        <span className="font-semibold">{project.position}</span>
        <span className=" text-gray-300">&nbsp;at&nbsp;</span>
        <span className="italic">{project.companyName}</span>
      </h1>
      {durationNode}
      <CompanyProjectDescription desc={project.description} />
    </section>
  );
};

export default ProjectItem;
