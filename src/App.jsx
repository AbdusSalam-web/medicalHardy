import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./all.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="menu_bar">
            <div className="logo">
              <p className="logoText">Medical Hardy</p>
            </div>
            <div className="menuLink">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="singUp">
              <ul>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">
                    JOIN US{" "}
                    <span>
                      <i class="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default App;
