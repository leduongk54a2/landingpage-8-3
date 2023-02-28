import logo from "./logo.svg";
import "./App.css";
import TimeCountdown from "./Component/TimeCountdown";
import Schedule from "./Component/Schedule";
import Prize from "./Component/Prize";
import GuideLine from "./Component/GuideLine";
import Ranking from "./Component/Ranking";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TimeCountdown />
        <Schedule />
        <Prize />
        <GuideLine />
        <Ranking />
      </header>
    </div>
  );
}

export default App;
