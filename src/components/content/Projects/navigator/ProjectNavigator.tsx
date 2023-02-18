import BlinkDot from "./BlinkDot";

type Props = {
  total: number;
  currentIndex: number;
  changeCurrentIndex: (val: number) => void;
};

const ProjectNavigator = (props: Props) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className=" w-full h-px bg-white flex justify-evenly items-center">
        {Array.from(Array(props.total).keys()).map(
          (val: number, index: number) => (
            <BlinkDot
              isActive={index === props.currentIndex}
              onClickHandler={() => props.changeCurrentIndex(index)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProjectNavigator;
