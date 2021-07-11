import React, {useEffect, useRef} from 'react';
import {BackArrow} from '../assets/svg/';
import {Image} from '../util/image';
import {ImageContainer} from './ImageContainer';

interface Props {
	isImageModalOpen: boolean;
	setIsImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	imageModalList: Image[];
}

export function SecondaryModal(props: Props) {
	const {setIsImageModalOpen, isImageModalOpen, imageModalList} = props;
	const listRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		setTimeout(() => {
			if (listRef.current) {
				listRef.current.scrollTo(0, 0);
			}
		}, 200);
	}, [isImageModalOpen]);

	return (
		<div
			className="modal-secondary"
			style={{
				opacity: isImageModalOpen ? '1' : '0',
				pointerEvents: isImageModalOpen ? 'auto' : 'none',
			}}
		>
			<div ref={listRef} className="image-list-wrapper">
				<div
					className="back-arrow"
					onClick={() => {
						setIsImageModalOpen(false);
					}}
				>
					<BackArrow />
				</div>
				<ul className="image-list">
					{imageModalList.map(img => (
						<li key={`${img.src}`}>
							<a href={img.src} target="_blank" rel="noopener noreferrer">
								<ImageContainer
									src={img.src}
									thumb={img.thumb}
									alt={img.alt}
									width={img.width}
									height={img.height}
								/>
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
