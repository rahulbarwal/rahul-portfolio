import { useContext } from "react";
import Intro from "./content/Intro";
import Projects from "./content/WorkEx";
import { globalStateContext, PageNamesEnum } from "../context/global";
import ContactLink from "./content/ContactLink";
import SideProjects from "./content/SideProjects";

type Props = {};

const Body = (props: Props) => {
  const { currentPageIndex } = useContext(globalStateContext);
  let bodyContent;
  switch (currentPageIndex) {
    case PageNamesEnum.INTRO:
      bodyContent = <Intro />;
      break;
    case PageNamesEnum.WORK_EXP:
      bodyContent = <Projects />;
      break;
    case PageNamesEnum.SIDE_PROJECTS:
      bodyContent = <SideProjects />;
      break;
    case PageNamesEnum.CONTACT:
      bodyContent = <ContactLink />;
      break;
    default:
      bodyContent = <Body />;
  }
  return (
    <article className="w-full flex flex-col justify-end items-end">
      {bodyContent}
    </article>
  );
};

export default Body;
