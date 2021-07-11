import React, {ReactNode} from 'react';

interface Props {
	children?: ReactNode;
}

function WorkWrapper(props: Props) {
	const {children} = props;

	return <ul className="work-wrapper">{children}</ul>;
}

export default WorkWrapper;
