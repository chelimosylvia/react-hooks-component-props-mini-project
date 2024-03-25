import React from "react";
import About from "./About";
import logo from "../assets/logo"; // Import your image

function App() {
  return (
    <div className="App">
      <About image={logo} aboutText="A blog about learning React" />
    </div>
  );
}

export default App;
