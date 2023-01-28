import "./App.css";
import { Header } from "./components/Header";
import MobileFooter from "./components/MobileFooter";
import Navigation from "./components/Navigation";
import { routes } from "./routes";
import { RoutesRenderer } from "./routing/RoutesRenderer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <RoutesRenderer routes={routes} />
      <MobileFooter className="mobile-footer-container" />
    </div>
  );
}

export default App;
