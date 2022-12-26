import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavBar } from "./components/NavBar/navbar";
import pp from "../src/assets/img/foto.png";
import icon from "../src/assets/img/icon.png";
import Stroller from "./components/Stroller/stroller";

function App() {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <div className="container-1 text-center" id="container-1">
          Save 5% on Apple products with a new Apple Card through December 25.
          Only at Apple. Exclusions and terms apply.
          <a href="/" id="learn">
            Learn more
            <i className="bi bi-chevron-right" id="bi"></i>
          </a>
        </div>
        <div className="container-2">
          <div className="text-1" id="text-left">
            <span className="store" id="store">
              Store.{" "}
            </span>
            The best way to buy the products you love.
          </div>
          <div className="content-right">
            <div className="text-2" id="text-right">
              <img src={pp} className="pp" alt="pic" />
              <img src={icon} className="icon" alt="apple icon" />
            </div>
            <div className="info-right">
              <span className="bold-text-1">Need shopping help?</span>
              <a href="/" className="ask">
                Ask a Specialist
              </a>
              <span className="bold-text-2">Visit an Apple Store</span>
              <a href="/" className="ask">
                Find one near you
                <i className="bi bi-chevron-right" id="bi"></i>
              </a>
            </div>
          </div>
        </div>
     <Stroller />
      </div>
    </>
  );
}

export default App;
