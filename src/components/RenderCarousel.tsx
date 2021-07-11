import {ModalDetails} from '../util';
import React, {useEffect, useState} from 'react';
import Carousel from './Carousel';
import {Image} from '../util/image';
interface Props {
	isModalOpen: boolean;
	modalInfo?: ModalDetails;
	viewport: number;
	setIsImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setImageModalList: React.Dispatch<React.SetStateAction<Image[]>>;
}

export function RenderCarousel(props: Props) {
	const {isModalOpen, modalInfo, viewport, setIsImageModalOpen, setImageModalList} = props;
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		return () => {
			setIsMounted(false);
		};
	}, []);

	if (isMounted && modalInfo) {
		return (
			<Carousel
				isModalOpen={isModalOpen}
				images={modalInfo.images}
				viewport={viewport}
				color={modalInfo.primaryColor}
				setIsImageModalOpen={setIsImageModalOpen}
				setImageModalList={setImageModalList}
			/>
		);
	}

	return null;
}
