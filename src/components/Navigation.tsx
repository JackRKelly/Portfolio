import React, {useState} from 'react';
import {
	Devto,
	Github,
	JRKLogo,
	LinkedInBox,
	Close,
	Hamburger,
	ExternalLinkIcon,
} from '../assets/svg';
import {Link, animateScroll} from 'react-scroll';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface Props {
	isMobile: boolean;
	activeRef: number;
	isTop: boolean;
}

export function Navigation(props: Props) {
	const {isMobile, activeRef, isTop} = props;

	const [isNavOpen, setIsNavOpen] = useState(false);

	return isMobile ? (
		<>
			<nav className="mobile">
				<ul className="container">
					<li className="left">
						<ul>
							<li className="logo">
								<Link smooth to="#home" activeClass="active" duration={200}>
									<JRKLogo />
									<span className="hidden-text">Home Page</span>
								</Link>
							</li>
							<li className="divider">
								<div />
							</li>
							<li className="icon">
								<a href="https://github.com/JackRKelly" target="_blank" rel="noopener noreferrer">
									<span className="main">
										<Github />
									</span>
									<span className="sub">
										<ExternalLinkIcon />
									</span>
									<span className="hidden-text">Github</span>
								</a>
							</li>
							<li className="icon">
								<a href="https://dev.to/jackrkelly" target="_blank" rel="noopener noreferrer">
									<span className="main">
										<Devto />
									</span>
									<span className="sub">
										<ExternalLinkIcon />
									</span>
									<span className="hidden-text">Dev to</span>
								</a>
							</li>
							<li className="icon">
								<a
									href="https://www.linkedin.com/in/jackkelly4/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<span className="main">
										<LinkedInBox />
									</span>
									<span className="sub">
										<ExternalLinkIcon />
									</span>
									<span className="hidden-text">LinkedIn</span>
								</a>
							</li>
						</ul>
					</li>
					<li className="right">
						<ul>
							<li
								className="logo"
								onClick={() => {
									setIsNavOpen(true);
								}}
							>
								<Hamburger />
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<nav
				className="mobile-full"
				style={{
					left: isNavOpen ? '0' : '-100%',
					pointerEvents: isNavOpen ? 'auto' : 'none',
				}}
			>
				<ul>
					<li
						className="icon"
						onClick={() => {
							setIsNavOpen(false);
						}}
					>
						<Close />
					</li>
					<li
						className="anchor"
						onClick={() => {
							setIsNavOpen(false);
						}}
					>
						<Link smooth to="#home" activeClass="active" duration={200}>
							Home
						</Link>
					</li>
					<li
						className="anchor"
						onClick={() => {
							setIsNavOpen(false);
						}}
					>
						<AnchorLink offset="155" href="#about">
							About
						</AnchorLink>
					</li>
					<li
						className="anchor"
						onClick={() => {
							setIsNavOpen(false);
						}}
					>
						<Link smooth to="#work" activeClass="active" duration={200}>
							Work
						</Link>
					</li>
					<li
						className="anchor"
						onClick={() => {
							setIsNavOpen(false);
						}}
					>
						<Link smooth to="#articles" activeClass="active" duration={200}>
							Articles
						</Link>
					</li>
					<li
						className="anchor"
						onClick={() => {
							setIsNavOpen(false);
						}}
					>
						<Link smooth to="#contact" activeClass="active" duration={200}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</>
	) : (
		<nav className="desktop" style={{boxShadow: isTop ? 'none' : '0 0 20px rgba(0, 0, 0, 0.16)'}}>
			<ul className="container" style={{padding: isTop ? '20px 0' : '10px 0'}}>
				<li className="left">
					<ul>
						<li className={activeRef === 0 ? 'active logo' : 'logo'}>
							<AnchorLink offset="100" href="#home">
								<JRKLogo />
								<span className="hidden-text">Home</span>
							</AnchorLink>
						</li>
						<li className="divider">
							<div />
						</li>
						<li className="icon">
							<a href="https://github.com/JackRKelly" target="_blank" rel="noopener noreferrer">
								<span className="main">
									<Github />
								</span>
								<span className="sub">
									<ExternalLinkIcon />
								</span>
								<span className="hidden-text">Github</span>
							</a>
						</li>
						<li className="icon">
							<a href="https://dev.to/jackrkelly" target="_blank" rel="noopener noreferrer">
								<span className="main">
									<Devto />
								</span>
								<span className="sub">
									<ExternalLinkIcon />
								</span>
								<span className="hidden-text">Dev to</span>
							</a>
						</li>
						<li className="icon">
							<a
								href="https://www.linkedin.com/in/jackkelly4/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="main">
									<LinkedInBox />
								</span>
								<span className="sub">
									<ExternalLinkIcon />
								</span>
								<span className="hidden-text">LinkedIn</span>
							</a>
						</li>
					</ul>
				</li>
				<li className="right">
					<ul>
						<li>
							<a
								className="anchor"
								onClick={() => {
									animateScroll.scrollToTop({
										duration: 200,
									});
								}}
							>
								Home
							</a>
						</li>
						<li>
							<Link
								smooth
								offset={-170}
								to="about"
								className="anchor"
								activeClass="active"
								duration={200}
							>
								About
							</Link>
						</li>
						<li>
							<Link smooth to="work" className="anchor" activeClass="active" duration={200}>
								Work
							</Link>
						</li>
						<li>
							<Link smooth to="articles" className="anchor" activeClass="active" duration={200}>
								Articles
							</Link>
						</li>
						<li>
							<Link smooth to="contact" className="anchor" activeClass="active" duration={200}>
								Contact
							</Link>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}
