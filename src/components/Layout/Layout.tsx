import Body from "../Body";
import Header from "../Header";
import Menu from "../Menu";
import "./Layout.css";

type Props = {};

const Layout = (props: Props) => {
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
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-0">
          <section className="gradient"></section>
        </div>
      </div>
    </>
  );
};

export default Layout;
