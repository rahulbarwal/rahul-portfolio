import React, { useContext } from "react";
import { globalStateContext, PageNamesEnum } from "./context/global";

type Props = {};

const Menu = (props: Props) => {
  const { currentPageIndex, setCurrentPageIndex } =
    useContext(globalStateContext);
  const itemClass = (isCurrent: boolean) =>
    `cursor-pointer ${isCurrent ? "underline" : ""}`;
  return (
    <ul className="w-40">
      <li
        className={itemClass(currentPageIndex === PageNamesEnum.INTRO)}
        onClick={() => setCurrentPageIndex(0)}
      >
        intro
      </li>
      <li
        className={itemClass(currentPageIndex === PageNamesEnum.WORK_EXP)}
        onClick={() => setCurrentPageIndex(1)}
      >
        work exp
      </li>
      <li
        className={itemClass(currentPageIndex === PageNamesEnum.SIDE_PROJECTS)}
        onClick={() => setCurrentPageIndex(2)}
      >
        side projects
      </li>
      <li
        className={itemClass(currentPageIndex === PageNamesEnum.CONTACT)}
        onClick={() => setCurrentPageIndex(3)}
      >
        contact
      </li>
    </ul>
  );
};

export default Menu;
