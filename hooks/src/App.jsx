import { useState } from "react";
import CookieCounter from "./components/CookieCounter";
import CatFacts from "./components/CatFacts";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src="./images/cookie.png" alt="A cookie with chocolate" />
      <p className="read-the-docs">
        Click on the button to increase the number of cookies!
      </p>
      <CookieCounter count={count} onClick={() => setCount(count + 1)} />

      <CatFacts />
    </>
  );
}

export default App;
