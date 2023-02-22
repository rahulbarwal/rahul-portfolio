import { useState } from "react";
import BlinkDot from "./BlinkDot";

type Props = {
  total: number;
  changeCurrentIndex: (val: number) => void;
};

const ProjectNavigator = (props: Props) => {
  const [currIndex, setcurrIndex] = useState(0);
  const changeIndex = (index: number) => {
    setcurrIndex(index);
    props.changeCurrentIndex(index);
  };

  return (
    <div className="flex items-center justify-center w-full h-px">
      <div className=" w-full h-1/2 bg-white flex justify-evenly items-center">
        {Array.from(Array(props.total).keys()).map(
          (val: number, index: number) => (
            <BlinkDot
              key={index}
              isActive={index === currIndex}
              onClickHandler={() => changeIndex(index)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProjectNavigator;
