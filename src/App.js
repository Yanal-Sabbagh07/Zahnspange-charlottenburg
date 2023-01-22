import "./App.css";
import { Header } from "./components/Header";
import Navigation from "./components/Navigation";
import { routes } from "./routes";
import { RoutesRenderer } from "./routing/RoutesRenderer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <RoutesRenderer routes={routes} />
    </div>
  );
}

export default App;
