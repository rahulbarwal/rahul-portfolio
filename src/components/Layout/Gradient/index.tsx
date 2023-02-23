import "./Background.css";

type Props = {};

const Background = (props: Props) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-0">
      <section className="gradient"></section>
    </div>
  );
};

export default Background;
