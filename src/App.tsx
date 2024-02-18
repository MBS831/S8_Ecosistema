import "./App.css";
import GraphicData from "./components/graphicData/GraphicData";
import TotalBalance from "./components/totalBalance/TotalBalance";
import { ContextProvider } from "./context/Context";
import "./config/i18";

function App() {
  return (
    <ContextProvider>
      <TotalBalance />
      <GraphicData />
    </ContextProvider>
  );
}

export default App;