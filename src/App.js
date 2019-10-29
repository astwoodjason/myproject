import React from "react";
import comingsoon from "./comingsoon.gif";
import border1 from "./border1.png";
import "./App.css";

function App() {
  return (
    <body>
      <div className="App">
        <header className="App-header"></header>
        <img src={border1} className="border" alt="border1" />
        <img src={comingsoon} className="Landing Page" alt="comingsoon" />
        <div class="landing-copyright">
          <div class="landing-copyright">
            <h2 class="landing-copyright-text">© 2019 COLR</h2>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
