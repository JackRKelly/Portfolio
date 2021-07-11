import React, {useEffect, useState} from 'react';
import {ArrowLeft, ArrowRight} from '../assets/svg/';
import {debounce} from 'ts-debounce';
import CarouselImage from './CarouselImage';
import {Image} from '../util/image';

interface Props {
	images: Image[];
	viewport: number;
	color?: string;
	isModalOpen: boolean;
	setIsImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setImageModalList: React.Dispatch<React.SetStateAction<Image[]>>;
}

function Carousel(props: Props) {
	const {images, isModalOpen, viewport, color, setIsImageModalOpen, setImageModalList} = props;

	const [imageList, setImageList] = useState([0, 1, 2, 3, 4]);
	const [xDown, setXDown] = useState<null | number>(null);

	const carouselHeight = ((Math.min(viewport / 2, 800) * 9) / 16) * 0.8;
	const previousImage = () => {
		setImageList(oldList =>
			oldList.map(listItem => {
				if (listItem > 0) {
					listItem -= 1;
					return listItem;
				}

				if (listItem === 0) {
					listItem = images.length - 1;
					return listItem;
				}

				return listItem;
			})
		);
	};

	const nextImage = () => {
		setImageList(oldList =>
			oldList.map(listItem => {
				if (listItem < images.length - 1) {
					listItem += 1;
					return listItem;
				}

				if (listItem === images.length - 1) {
					listItem = 0;
					return listItem;
				}

				return listItem;
			})
		);
	};

	const wheelHandler = (eDelta: number) => {
		if (eDelta < 0) {
			previousImage();
		} else if (eDelta > 0) {
			nextImage();
		}
	};

	const wheelHandlerDebounced = debounce((eDelta: number) => {
		wheelHandler(eDelta);
	}, 75);

	useEffect(() => {
		if (!isModalOpen) {
			setImageList([0, 1, 2, 3, 4]);
		}
	}, [isModalOpen]);

	return (
		<div
			className="carousel"
			style={{
				height: carouselHeight,
			}}
			onTouchStart={e => {
				const firstTouch = e.touches[0];
				setXDown(firstTouch.clientX);
			}}
			onTouchMove={e => {
				if (!xDown) {
					return;
				}

				const xUp = e.touches[0].clientX;
				const xDiff = xDown - xUp;

				if (xDiff > 0) {
					nextImage();
				} else {
					previousImage();
				}

				setXDown(null);
			}}
			onWheel={e => {
				wheelHandlerDebounced(e.deltaY);
			}}
		>
			<div className="left" onClick={previousImage}>
				<ArrowLeft color={color} />
			</div>
			<div
				className="images"
				onClick={() => {
					setIsImageModalOpen(true);
					setImageModalList(images);
				}}
			>
				{imageList.map((img, index) => (
					<CarouselImage
						key={`${images[img].src}-${img}`}
						index={index}
						image={images[img]}
						carouselHeight={carouselHeight}
					/>
				))}
			</div>

			<div className="right" onClick={nextImage}>
				<ArrowRight color={color} />
			</div>
		</div>
	);
}

export default Carousel;
