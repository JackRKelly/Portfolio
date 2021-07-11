import React, {ReactNode} from 'react';

interface Props {
	children?: ReactNode;
}

export function ContactOptionsWrapper(props: Props) {
	const {children} = props;
	return <ul className="contact-options">{children}</ul>;
}
