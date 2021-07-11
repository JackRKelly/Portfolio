import React from 'react';

interface Props {
	alt: string;
	thumb: string;
	src: string;
	height?: number;
	width?: number;
}

export function Image(props: Props) {
	const {alt, thumb, src, height, width} = props;
	const [isLoaded, setIsLoaded] = React.useState(false);

	return (
		<>
			<img
				className="lazy-image thumb"
				alt={alt}
				src={thumb}
				style={{
					visibility: isLoaded ? 'hidden' : 'visible',
					width,
					height,
				}}
			/>
			<img
				className="lazy-image full"
				style={{opacity: isLoaded ? 1 : 0, width, height}}
				alt={alt}
				src={src}
				onLoad={() => {
					setIsLoaded(true);
				}}
			/>
		</>
	);
}
