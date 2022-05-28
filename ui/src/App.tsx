import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Logo from "./components/Logo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Logo className="brand-logo" />
        <p>Hello UI Library</p>
        <p>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
