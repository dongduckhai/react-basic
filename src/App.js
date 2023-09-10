import "./App.css";
import ConditionRender from "./Components/ConditionRender";
import Count from "./Components/Count";
import User from "./Components/User";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      {/* <Welcome name = "Kai" age = "24" />
      <Welcome name = "John" age = "18" /> */}
      {/* <User /> */}
      {/* <Count /> */}
      <ConditionRender />
    </div>
  );
}

export default App;
