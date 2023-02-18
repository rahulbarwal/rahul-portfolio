import Body from "./Body";
import Header from "./Header";
import Menu from "./Menu";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div className="bg-gray-800 w-full h-screen text-white flex justify-center p-4">
      <div className="border-gray-300 border w-full h-full p-8 flex flex-col justify-items-stretch">
        <Header />
        <main className="mt-10 flex h-full ">
          <Menu />
          <Body />
        </main>
      </div>
    </div>
  );
};

export default Layout;
