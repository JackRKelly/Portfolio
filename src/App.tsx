import React, { FC, useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import { debounce } from "ts-debounce";
import "./App.scss";
import Home from "./Home";

const App: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeRef, setActiveRef] = useState(0);

  const checkMobile = () => {
    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  window.addEventListener("resize", () => {
    debounce(checkMobile, 1000, {
      isImmediate: true,
    });
  });

  useEffect(() => {
    checkMobile();
  });

  return (
    <div className="App">
      <Navigation isMobile={isMobile} activeRef={activeRef} />
      <Home isMobile={isMobile} setActiveRef={setActiveRef} />
    </div>
  );
};

export default App;
