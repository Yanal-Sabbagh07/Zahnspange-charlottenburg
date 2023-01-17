import "./App.css";
import { Header } from "./components/Header";
import { routes } from "./routes";
import { RoutesRenderer } from "./routing/RoutesRenderer";
function App() {
  return (
    <div className="App">
      <Header />
      <RoutesRenderer routes={routes} />
    </div>
  );
}

export default App;
