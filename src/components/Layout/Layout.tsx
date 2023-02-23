import Body from "../Body";
import Header from "../Header";
import Menu from "../Menu";
import StarsBackground from "./Stars";
import GradientBackground from "./Gradient";
import ForestBackground from "./Firefiles";

type Props = {};

const Layout = (props: Props) => {
  const bg = [StarsBackground, GradientBackground, ForestBackground];
  let Background = bg[Math.floor(Math.random() * bg.length)];
  return (
    <>
      <div className="relative bg-transparent w-screen h-screen text-white flex justify-center p-4">
        <div className="border-gray-300 border w-full h-full p-8 flex flex-col justify-items-stretch z-10">
          <Header />
          <main className="mt-10 flex h-full ">
            <Menu />
            <Body />
          </main>
        </div>
        <Background />
      </div>
    </>
  );
};

export default Layout;
