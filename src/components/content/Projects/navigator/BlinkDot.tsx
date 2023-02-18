import React from "react";

type Props = {
  isActive: boolean;
  onClickHandler: () => void;
};

const BlinkDot = (props: Props) => {
  return (
    <span
      className="relative flex items-center cursor-pointer"
      onClick={props.onClickHandler}
    >
      <span className="flex h-3 w-3 absolute items-center justify-center">
        {props.isActive && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        )}
        <span className="relative inline-flex rounded-full h-1 w-1 bg-white"></span>
      </span>
    </span>
  );
};

export default BlinkDot;
