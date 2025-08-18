import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src="./public/cookie.png" alt="A cookie with chocolate" />
      <p className="read-the-docs">
        Click on the cookie to increase the counter!
      </p>
    </>
  );
}

export default App;
