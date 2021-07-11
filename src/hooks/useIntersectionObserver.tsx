import React, {MutableRefObject} from 'react';

interface Props {
	target: MutableRefObject<null> | MutableRefObject<Element>;
	onIntersect: IntersectionObserverCallback;
	threshold?: number;
	rootMargin?: string;
}

export const useIntersectionObserver = (props: Props) => {
	const {target, onIntersect, threshold = 0.1, rootMargin = '0px'} = props;

	React.useEffect(() => {
		const observer = new IntersectionObserver(onIntersect, {
			rootMargin,
			threshold,
		});

		const {current} = target;

		if (current) {
			observer.observe(current);
		}

		return () => {
			if (current) {
				observer.unobserve(current);
			}
		};
	});
};
