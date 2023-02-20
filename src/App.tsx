import Layout from "./components/Layout";
import { GlobalStateProvider } from "./context/global";

function App() {
  return (
    <GlobalStateProvider>
      <Layout />
    </GlobalStateProvider>
  );
}

export default App;
