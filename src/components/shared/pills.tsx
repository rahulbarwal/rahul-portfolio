import React from "react";

type Props = {
  text: string;
};

const Pill = (props: Props) => {
  return (
    <span className="text-xs bg-gray-500 rounded-2xl py-1 px-2 break-keep">
      {props.text}
    </span>
  );
};

export default Pill;
