import React, {useCallback, useEffect, useState} from 'react';
import {Navigation} from './components/Navigation';
import {debounce} from 'ts-debounce';
import {Main} from './Main';
import './App.scss';
import {calcPercent} from './util';

function App() {
	const [isMobile, setIsMobile] = useState(false);
	const [activeRef] = useState(0);
	const [progress, setProgress] = useState(0);
	const [isTop, setIsTop] = useState(true);
	const [viewport, setViewport] = useState<number>(0);

	const checkMobile = useCallback(() => {
		setViewport(window.innerWidth);
		setIsMobile(viewport < 900);
		setIsTop(window.scrollY < 10);
	}, [viewport]);

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
		window.addEventListener('scroll', calcPercentDebounced);
		window.addEventListener('resize', checkMobileDebounced);
		return () => {
			window.removeEventListener('scroll', calcPercentDebounced);
			window.removeEventListener('resize', checkMobileDebounced);
		};
	}, [calcPercentDebounced, checkMobileDebounced]);

	return (
		<div className="App">
			<Navigation isMobile={isMobile} activeRef={activeRef} isTop={isTop} />
			<div className="scroll-progress" style={{width: `${progress}%`}} />
			<Main isMobile={isMobile} activeRef={activeRef} viewport={viewport} />
		</div>
	);
}

export default App;
