import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    setTimeout(()=>setCount(count+1),1000)
  }, [])
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Contact />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {activeTab === "home" && (
        <button onClick={() => setActiveTab("pokemon")}>
          View Pokemon Too
        </button>
      )}
      {activeTab === "pokemon" && (
        <>
          <button onClick={() => setActiveTab("home")}>View Counter Only</button>
          <MyComponent />
        </>
      )}
    </>
  );
}

export default App;
