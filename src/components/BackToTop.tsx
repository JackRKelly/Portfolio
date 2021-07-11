import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {ScrollToTop} from '../assets/svg';

interface Props {
	isMobile: boolean;
	activeRef: number;
}

export function BackToTop(props: Props) {
	const {isMobile, activeRef} = props;

	if (isMobile) {
		// TODO: Figure out how to return nothing without adding elemnet to dom and abide by ESLint no empty fragment rule
		return <div />;
	}

	return (
		<AnchorLink offset="0" href="#main">
			<div
				className="back-to-top"
				title="Back to top"
				style={{
					opacity: activeRef > 1 ? 1 : 0,
					pointerEvents: activeRef > 1 ? 'auto' : 'none',
				}}
			>
				<ScrollToTop />
			</div>
		</AnchorLink>
	);
}
