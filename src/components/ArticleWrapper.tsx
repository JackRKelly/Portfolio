import React, {ReactNode} from 'react';

interface Props {
	children?: ReactNode;
}

export function ArticleWrapper(props: Props) {
	return <ul className="article-wrapper">{props.children}</ul>;
}
