import { Route, Routes } from "react-router-dom";
import { RouteNames } from "../routes";
import ContactMe from "./content/ContactMe";
import Intro from "./content/Intro";
import SideProjects from "./content/SideProjects";
import Projects from "./content/WorkEx";

type Props = {};

const Body = (props: Props) => {
  return (
    <article className="w-full flex flex-col justify-end items-end">
      <Routes>
        <Route path={RouteNames.HOME} element={<Intro />}></Route>
        <Route path={RouteNames.WORK_EX} element={<Projects />}></Route>
        <Route
          path={RouteNames.SIDE_PROJECTS}
          element={<SideProjects />}
        ></Route>
        <Route path={RouteNames.CONTACT_ME} element={<ContactMe />}></Route>
      </Routes>
    </article>
  );
};

export default Body;
