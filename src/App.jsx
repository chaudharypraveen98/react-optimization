import { Suspense, lazy, useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const MyComponent = lazy(() => import("./components/MyComponent"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const [count, setCount] = useState(0);
  // We have used the usecallback function to memomize the parent function because by default react recreate functions if they are not change while re render so to avoid this we use usecallback with memo
  const increaseCounter = useCallback(() => setCount((prev) => prev + 1), []);
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
      <Suspense fallback={<h1>Loading Contact</h1>}>
        <Contact increaseCounter={increaseCounter} />
      </Suspense>
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

      <Suspense fallback={<h1>Loading Pokemon</h1>}>
        <MyComponent />
      </Suspense>
    </>
  );
}

export default App;
