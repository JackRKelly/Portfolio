import React, {useEffect, useRef, useState} from 'react';
import {DownArrow, HeroShapes} from '../assets/svg';
import {Content} from '../components/Content';
import {debounce} from 'ts-debounce';
import {isInViewport, calc} from '../util';
import {useSpring} from 'react-spring/web';
import {Element, Link} from 'react-scroll';

export function Home() {
	const [isHeroVisible, setIsHeroVisible] = useState<boolean>(false);
	const parallaxRef = useRef(null);

	const [parallax, setParallax] = useSpring(() => ({
		xy: [0, 0],
		config: {mass: 20, tension: 200, friction: 250},
	}));

	const checkIsHeroVisible = (hero: React.MutableRefObject<null>): void => {
		setIsHeroVisible(isInViewport(hero.current));
	};

	const checkIsHeroVisibleDebounced = debounce((hero: React.MutableRefObject<null>) => {
		checkIsHeroVisible(hero);
	}, 500);

	useEffect(() => {
		checkIsHeroVisible(parallaxRef);
	}, []);

	return (
		<Element name="home">
			<section
				id="home"
				onMouseMove={({clientX: x, clientY: y}) => {
					if (parallaxRef.current) {
						checkIsHeroVisibleDebounced(parallaxRef);
						if (isHeroVisible) {
							setParallax({xy: calc(x, y)});
						}
					}
				}}
			>
				<Content>
					<div className="info">
						<h1>Jack Kelly</h1>
						<p>
							I&apos;m a self-taught software engineer based in Kansas who enjoys designing and
							building websites, writing software, and everything in between.
						</p>
						<Link smooth to="work" className="anchor" activeClass="active" duration={200}>
							<DownArrow /> View My Work
						</Link>
					</div>
					<div className="hero">
						<HeroShapes ref={parallaxRef} parallax={parallax} />
					</div>
				</Content>
			</section>
		</Element>
	);
}
