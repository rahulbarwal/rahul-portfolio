import { createContext, ReactNode, useState } from "react";
import { SideProjectDetails } from "../types/sideProj";
import { IPItem } from "../types/workEx";

export type GlobalState = {
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
  projects: null,
  setProjects: () => {},
  workExData: null,
  setWorkExData: () => {},
});

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  // this state will be shared with all components
  const [projects, setProjects] = useState<SideProjectDetails[] | null>(null);
  const [workExData, setWorkExData] = useState<IPItem[] | null>(null);

  return (
    // this is the provider providing state
    <globalStateContext.Provider
      value={{
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
