import React, { FC, useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import { debounce } from "ts-debounce";
import "./App.scss";
import Home from "./Home";

const App: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeRef, setActiveRef] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [viewport, setViewport] = useState<number>(0);

  const checkMobile = () => {
    setViewport(window.innerWidth);
    setIsMobile(viewport < 900);
    setIsTop(window.scrollY < 10);
  };

  const checkMobileDebounced = debounce(checkMobile, 100, {
    isImmediate: true,
  });

  window.addEventListener("resize", checkMobileDebounced);

  useEffect(() => {
    checkMobile();
  });

  const onModalOpen = () => {
    const scrollY = document.documentElement.style.getPropertyValue(
      "--scroll-y"
    );
    const body = document.body;
    setTimeout(() => {
      body.style.position = "fixed";
      body.style.top = `-${scrollY}`;
    }, 200);
  };

  const onModalClose = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  };

  return (
    <div className="App">
      <Navigation isMobile={isMobile} activeRef={activeRef} isTop={isTop} />
      <Home
        isMobile={isMobile}
        setActiveRef={setActiveRef}
        activeRef={activeRef}
        viewport={viewport}
        onModalOpen={onModalOpen}
        onModalClose={onModalClose}
      />
    </div>
  );
};

export default App;
