import AnalogClock from "./components/analog-clock";
import DigitalClock from "./components/digital-clock";
import "./App.css";

function App() {
  return (
    <div className="container">
      <AnalogClock />
      <DigitalClock />
    </div>
  );
}

export default App;
