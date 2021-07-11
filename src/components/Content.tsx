import React, {ReactNode} from 'react';

interface Props {
	children?: ReactNode;
}

function Content(props: Props) {
	const {children} = props;
	return <div className="content">{children}</div>;
}

export default Content;
