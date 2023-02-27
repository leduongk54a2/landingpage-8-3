import logo from "./logo.svg";
import "./App.css";
import TimeCountdown from "./Component/TimeCountdown";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TimeCountdown />
      </header>
    </div>
  );
}

export default App;
