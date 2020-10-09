import React, { FC, useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import { debounce } from "ts-debounce";
import "./App.scss";
import Home from "./Home";

const App: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeRef, setActiveRef] = useState(0);
  const [isTop, setIsTop] = useState(true);

  const checkMobile = () => {
    setIsMobile(window.innerWidth < 900);
    setIsTop(window.scrollY < 10)
  };

  const checkMobileDebounced = debounce(checkMobile, 100, {
    isImmediate: true,
  });

  window.addEventListener("resize", checkMobileDebounced);

  useEffect(() => {
    checkMobile();
  });

  return (
    <div className="App">
      <Navigation isMobile={isMobile} activeRef={activeRef} isTop={isTop} />
      <Home isMobile={isMobile} setActiveRef={setActiveRef} />
    </div>
  );
};

export default App;
