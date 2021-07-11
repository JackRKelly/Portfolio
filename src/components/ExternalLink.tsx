import React from 'react';
import {ExternalLinkIcon} from '../assets/svg';

interface Props {
	text: string;
	link: string;
}

export function ExternalLink(props: Props) {
	const {text, link} = props;

	return (
		<a href={link} className="external-link" target="_blank" rel="noopener noreferrer">
			{text}
			<ExternalLinkIcon />
		</a>
	);
}
