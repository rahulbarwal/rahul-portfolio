import { GlobalState, GlobalStateProvider } from "./context/global";
import Layout from "./components/Layout";

function App() {
  return (
    <GlobalStateProvider>
      <Layout />
    </GlobalStateProvider>
  );
}

export default App;
