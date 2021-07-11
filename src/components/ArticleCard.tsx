import React from 'react';
import {ExternalLinkIcon} from '../assets/svg/';
import {ImageContainer} from './ImageContainer';
import {Image} from '../util/image';

interface Props {
	description: string;
	tags: string[];
	title: string;
	link: string;
	image: Image;
}

export function ArticleCard(props: Props) {
	const {description, tags, title, link, image} = props;

	return (
		<li className="article-card">
			<a href={link} target="_blank" rel="noopener noreferrer">
				<div className="image">
					<ImageContainer {...image} />
					<ul className="tag-list">
						{tags.map(tag => (
							<li key={`${tag}`}>{tag}</li>
						))}
					</ul>
				</div>
				<div className="text">
					<p className="title">{title}</p>
					<p>{description}</p>
					<div className="link" title={`Open external link for "${title}" article`}>
						<p>
							Visit on Dev.to <ExternalLinkIcon />
						</p>
					</div>
				</div>
			</a>
		</li>
	);
}
