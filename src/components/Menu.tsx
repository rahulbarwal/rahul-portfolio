import { Link, useLocation } from "react-router-dom";
import { RouteNames } from "../routes";

type Props = {};

const Menu = (props: Props) => {
  const itemClass = (isCurrent: boolean) =>
    `cursor-pointer ${
      isCurrent ? "underline text-white text-xl" : "text-gray-500"
    }`;
  const route = useLocation();

  return (
    <ul className="w-40">
      <li className={itemClass(route.pathname === RouteNames.HOME)}>
        <Link to={RouteNames.HOME}>intro</Link>
      </li>
      <li className={itemClass(route.pathname === RouteNames.WORK_EX)}>
        <Link to={RouteNames.WORK_EX}>work exp</Link>
      </li>
      <li className={itemClass(route.pathname === RouteNames.SIDE_PROJECTS)}>
        <Link to={RouteNames.SIDE_PROJECTS}> side projects</Link>
      </li>
      <li className={itemClass(route.pathname === RouteNames.CONTACT_ME)}>
        <Link to={RouteNames.CONTACT_ME}>contact</Link>
      </li>
    </ul>
  );
};

export default Menu;
