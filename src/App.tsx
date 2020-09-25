import React, { FC, useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import "./App.scss";
import Home from "./Home";

const App: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  window.addEventListener("resize", checkMobile);

  useEffect(() => {
    checkMobile();
  });

  return (
    <div className="App">
      <Navigation isMobile={isMobile} />
      <Home isMobile={isMobile} />
    </div>
  );
};

export default App;
