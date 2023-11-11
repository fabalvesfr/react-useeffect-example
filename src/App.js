import "./App.css";
import { useState } from "react";
import { Text } from "./Text";

function App() {
  const [show, setShow] = useState(false);

  const showText = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <button onClick={showText}>Show text</button>
      {show && <Text />}
    </div>
  );
}

export default App;
