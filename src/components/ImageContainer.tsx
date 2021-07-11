import React, {MutableRefObject} from 'react';
import {Image} from './Image';
import {useIntersectionObserver} from '../hooks/useIntersectionObserver';

interface Props {
	src: string;
	thumb: string;
	alt: string;
	height: number;
	width: number;
	carouselHeight?: number;
}

export function ImageContainer(props: Props) {
	const {thumb, alt, src, height, width, carouselHeight} = props;
	const ref: MutableRefObject<HTMLDivElement | null> = React.useRef(null);
	const [isVisible, setIsVisible] = React.useState(false);

	useIntersectionObserver({
		target: ref,
		onIntersect: ([{isIntersecting}], observerElement) => {
			const {current} = ref;

			if (isIntersecting) {
				if (!isVisible && current) {
					setIsVisible(true);
				}

				observerElement.unobserve(current as Element);
			}
		},
	});

	const aspectRatio = (height / width) * 100;

	if (carouselHeight) {
		return (
			<div
				className="image-container-wrapper"
				style={{
					width: (width / height) * carouselHeight,
					height: carouselHeight,
				}}
			>
				<div
					ref={ref}
					className="image-container"
					style={{
						width: (width / height) * carouselHeight,
						height: carouselHeight,
					}}
				>
					{isVisible && (
						<Image
							src={src}
							thumb={thumb}
							alt={alt}
							height={carouselHeight}
							width={(width / height) * carouselHeight}
						/>
					)}
				</div>
			</div>
		);
	}

	return (
		<div ref={ref} className="image-container" style={{paddingBottom: `${aspectRatio}%`}}>
			{isVisible && <Image src={src} thumb={thumb} alt={alt} />}
		</div>
	);
}
