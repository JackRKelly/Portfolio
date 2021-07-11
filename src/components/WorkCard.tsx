import React, {Dispatch, SetStateAction} from 'react';
import {ExpandWork} from '../assets/svg/';
import {ModalDetails, onModalOpen, splitDescription} from '../util';
import {Image} from '../util/image';
import ImageContainer from './ImageContainer';

interface Props {
	description: string;
	tags: string[];
	title: string;
	github?: string;
	preview?: string;
	live?: string;
	images: Image[];
	thumbnail: Image;
	primaryColor?: string;
	viewport: number;
	setIsModalOpen: Dispatch<SetStateAction<boolean>>;
	setModalInfo: Dispatch<SetStateAction<ModalDetails | undefined>>;
	// SetIsImageModalOpen: Dispatch<SetStateAction<boolean>>;
	// setImageModalList: Dispatch<SetStateAction<Image[]>>;
}

function WorkCard(props: Props) {
	const {
		description,
		tags,
		title,
		images,
		viewport,
		thumbnail,
		primaryColor,
		github,
		live,
		preview,
		setModalInfo,
		setIsModalOpen,
	} = props;

	return (
		<li className="work-card">
			<div
				className="work-card"
				onClick={() => {
					setModalInfo(() => ({
						description,
						tags,
						title,
						images,
						viewport,
						thumbnail,
						primaryColor,
						github,
						live,
						preview,
					}));
					setIsModalOpen(true);
					onModalOpen();
					document.title = `${title} | Jack Kelly`;
				}}
			>
				<div className="image">
					<ImageContainer
						src={thumbnail.src}
						thumb={thumbnail.thumb}
						alt={thumbnail.alt}
						width={thumbnail.width}
						height={thumbnail.height}
					/>
					<ul className="tag-list">
						{tags.map(tag => (
							<li key={`${tag}`}>{tag}</li>
						))}
					</ul>
				</div>
				<div className="text">
					<p className="title">{title}</p>
					<p>{splitDescription(description)}</p>
					<div className="link" title={`Open work modal for ${title}`}>
						<p>
							More Details <ExpandWork />
						</p>
					</div>
				</div>
			</div>
		</li>
	);
}

export default WorkCard;
