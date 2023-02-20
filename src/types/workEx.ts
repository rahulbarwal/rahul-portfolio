type IDuration = {
  month: string;
  year: string;
};
type ITenure = {
  startedAt: IDuration;
  endedAt: IDuration;
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

export type IPItem = {
  companyName: string;
  duration: ITenure | boolean;
  position: string;
  role: string;
  description: ICompanyProject[] | IDescription;
};
