import React from 'react';

interface LeftArrowProps {
	color: string;
}

export function LeftArrow(props: LeftArrowProps) {
	const {color} = props;

	return (
		<svg
			id="Layer_1"
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 22.07 37.07"
			style={{fill: color ? color : ''}}
		>
			<polygon points="22.07 3.54 18.54 0 3.54 15 0 18.54 18.54 37.07 22.07 33.54 7.07 18.54 22.07 3.54" />
		</svg>
	);
}
