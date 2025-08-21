import { useState } from "react";
import CookieCounter from "./components/CookieCounter";
import CatFacts from "./components/CatFacts";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="cookie-container">
        <img src="./images/cookie.png" alt="A cookie with chocolate" />
        <p className="read-the-docs">
          Click on the button to increase the number of cookies!
        </p>
        <CookieCounter count={count} onClick={() => setCount(count + 1)} />
      </div>
      <div className="cat-facts-container">
        <img
          src="images/catgrey.jpg"
          alt="Cat with tongue out"
          style={{ width: "300px", borderRadius: "10px" }}
        />

        <CatFacts />
      </div>
      <UserList />
    </>
  );
}

export default App;
