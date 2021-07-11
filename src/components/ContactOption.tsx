import React from 'react';

interface Props {
	href: string;
	string: string;
	children: React.ReactNode;
	title?: string;
}

function ContactOption(props: Props) {
	const {href, string, children, title} = props;

	return (
		<li>
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="submit-button"
				title={title}
			>
				<div className="icon">{children}</div>
				<p>{string}</p>
			</a>
		</li>
	);
}

export default ContactOption;
