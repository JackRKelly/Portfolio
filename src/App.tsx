import React, { FC, useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { debounce } from "ts-debounce";
import { Main } from "./Main";
import "./App.scss";
import { calcPercent } from "./util";

const App: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeRef, setActiveRef] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [viewport, setViewport] = useState<number>(0);

  const checkMobile = () => {
    setViewport(window.innerWidth);
    setIsMobile(viewport < 900);
    setIsTop(window.scrollY < 10);
  };

  const checkMobileDebounced = debounce(checkMobile, 1000, {
    isImmediate: true,
  });

  useEffect(() => {
    checkMobile();
  });

  const calcPercentDebounced = debounce(
    () => {
      setProgress(calcPercent);
    },
    200,
    {
      isImmediate: true,
    }
  );

  useEffect(() => {
    window.addEventListener("scroll", calcPercentDebounced);
    window.addEventListener("resize", checkMobileDebounced);
    return () => {
      window.removeEventListener("scroll", calcPercentDebounced);
      window.removeEventListener("resize", checkMobileDebounced);
    };
  }, [calcPercentDebounced, checkMobileDebounced]);

  return (
    <div className="App">
      <Navigation isMobile={isMobile} activeRef={activeRef} isTop={isTop} />
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <Main
        isMobile={isMobile}
        setActiveRef={setActiveRef}
        activeRef={activeRef}
        viewport={viewport}
        setIsTop={setIsTop}
      />
    </div>
  );
};

export default App;
