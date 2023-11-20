import { useState } from "react";
import "./App.css";
import Creat from "./Components/Creat";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Creat />
    </>
  );
}

export default App;
