import {
  createContext, ReactNode, useState
} from "react";

export enum PageNamesEnum {
  INTRO,
  WORK_EXP,
  SIDE_PROJECTS,
  CONTACT,
}

export type GlobalState = {
  currentPageIndex: PageNamesEnum;
  setCurrentPageIndex: React.Dispatch<React.SetStateAction<PageNamesEnum>>;
};

export const globalStateContext = createContext<GlobalState>({
  currentPageIndex: PageNamesEnum.INTRO,
  setCurrentPageIndex: () => {},
});

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  // this state will be shared with all components
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  return (
    // this is the provider providing state
    <globalStateContext.Provider
      value={{ currentPageIndex, setCurrentPageIndex }}
    >
      {children}
    </globalStateContext.Provider>
  );
};
