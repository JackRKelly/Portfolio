import React from "react";
import Navigation from "./components/Navigation";
import "./App.scss";
import Home from "./Home";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
};

export default App;
