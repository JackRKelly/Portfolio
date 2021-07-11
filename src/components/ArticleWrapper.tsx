import React, {ReactNode} from 'react';

interface Props {
	children?: ReactNode;
}

function ArticleWrapper(props: Props) {
	return <ul className="article-wrapper">{props.children}</ul>;
}

export default ArticleWrapper;
