import logo from "./logo.svg";
import "./App.css";
import { images } from "./assets";
import { useRef, useState } from "react";

function App() {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <div className="container">
      <div className="navbar">
        <img src={images.logo} className="logo" alt="" />
        <nav>
          <ul style={{ maxHeight: menuOpened ? "130px" : "0px" }}>
            <li>
              <a href="#">Game Controllers</a>
            </li>
            <li>
              <a href="#">VR Accessories</a>
            </li>
            <li>
              <a href="#">Media Remotes</a>
            </li>
            <li>
              <a href="#">Others</a>
            </li>
          </ul>
        </nav>
        <img
          onClick={toggleMenu}
          src={images.menu}
          className="menu-icon"
          alt=""
        />
      </div>

      <div className="row">
        <div className="col-1">
          <h2>
            PS V2
            <br />
            Dualshock
          </h2>
          <h3>Wireless Controller for PlayStation 4</h3>
          <p>(Compatible/Generic)</p>
          <h4>$32.50</h4>
          <button type="button">
            Buy Now
            <img src={images.arrow} alt="" />
          </button>
        </div>
        <div className="col-2">
          <img src={images.controller} className="controller" alt="" />
          <div className="color-box"></div>
          <div className="add-btn">
            <img src={images.add} alt="" />
            <p>
              <small>Add to Cart</small>
            </p>
          </div>
        </div>
      </div>

      <div className="social-links">
        <img src={images.fb} alt="" />
        <img src={images.tw} alt="" />
        <img src={images.ig} alt="" />
      </div>
    </div>
  );
}

export default App;
