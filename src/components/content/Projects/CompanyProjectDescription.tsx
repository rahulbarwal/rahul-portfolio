import React from "react";

type Props = {
  desc: ICompanyProject[] | IDescription;
};

export type IDescription = {
  texts: string[];
  techStack: string[];
};
export type ICompanyProject = {
  projectName: string;
  duration: string;
  description: IDescription;
};

const CompanyProjectDescription = (props: Props) => {
  return <div>CompanyProjectDescription</div>;
};

export default CompanyProjectDescription;
