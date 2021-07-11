import React, {ReactNode} from 'react';

interface Props {
	children?: ReactNode;
}

export function WorkWrapper(props: Props) {
	const {children} = props;

	return <ul className="work-wrapper">{children}</ul>;
}
