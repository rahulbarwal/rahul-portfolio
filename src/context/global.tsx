import { createContext, ReactNode, useState } from "react";
import { SideProjectDetails } from "../types/sideProj";

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
};

export const globalStateContext = createContext<GlobalState>({
  currentPageIndex: PageNamesEnum.INTRO,
  setCurrentPageIndex: () => {},
  projects: null,
  setProjects: () => {},
});

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  // this state will be shared with all components
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [projects, setProjects] = useState<SideProjectDetails[] | null>(null);

  return (
    // this is the provider providing state
    <globalStateContext.Provider
      value={{ currentPageIndex, setCurrentPageIndex, projects, setProjects }}
    >
      {children}
    </globalStateContext.Provider>
  );
};
