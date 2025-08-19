import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src="./images/cookie.png" alt="A cookie with chocolate" />
      <p className="read-the-docs">
        Click on the button to increase the number of cookies!
      </p>
      <button onClick={() => setCount(count + 1)}>
        You have {count} cookie{count !== 1 ? "s" : ""}!
        <img
          src="./images/cookie.png"
          alt="A cookie"
          style={{ width: "20px", height: "20px" }}
        />
      </button>
    </>
  );
}

export default App;
