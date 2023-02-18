import React from "react";

type Props = {};

const Intro = (props: Props) => {
  const introText = `Born in 1993 in Himachal Pradesh, India. I believe tech to be a means of solving business problems.`;
  return <p className=" w-24">{introText}</p>;
};

export default Intro;
