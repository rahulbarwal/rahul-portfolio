import { createContext, ReactNode, useState } from "react";
import { SideProjectDetails } from "../types/sideProj";
import { IPItem } from "../types/workEx";

export enum PageNamesEnum {
  INTRO,
  WORK_EXP,
  SIDE_PROJECTS,
  CONTACT,
}

export type GlobalState = {
  currentPageIndex: PageNamesEnum;
  setCurrentPageIndex: React.Dispatch<React.SetStateAction<PageNamesEnum>>;
  projects: SideProjectDetails[] | null;
  setProjects: React.Dispatch<
    React.SetStateAction<SideProjectDetails[] | null>
  >;
  workExData: IPItem[] | null;
  setWorkExData: React.Dispatch<
    React.SetStateAction<IPItem[] | null>
  >;
};

export const globalStateContext = createContext<GlobalState>({
  currentPageIndex: PageNamesEnum.INTRO,
  setCurrentPageIndex: () => {},
  projects: null,
  setProjects: () => {},
  workExData: null,
  setWorkExData: () => {},
});

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  // this state will be shared with all components
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [projects, setProjects] = useState<SideProjectDetails[] | null>(null);
  const [workExData, setWorkExData] = useState<IPItem[] | null>(null);

  return (
    // this is the provider providing state
    <globalStateContext.Provider
      value={{
        currentPageIndex,
        setCurrentPageIndex,
        projects,
        setProjects,
        workExData,
        setWorkExData,
      }}
    >
      {children}
    </globalStateContext.Provider>
  );
};
