import {Image} from './image';

export interface ModalDetails {
	description: string;
	tags: string[];
	title: string;
	github?: string;
	preview?: string;
	live?: string;
	images: Image[];
	thumbnail: Image;
	primaryColor?: string;
}

export const splitDescription = (description: string) => {
	const final = {
		split: description.split(' '),
		getSlice() {
			return this.split.slice(0, 29).join(' ');
		},
		getEnd() {
			return this.split.length > 35 ? '...' : '';
		},
	};

	return `${final.getSlice()}${final.getEnd()}`;
};

export const calc = (x: number, y: number) => [
	(x - window.innerWidth) / 2,
	(y - window.innerHeight) / 2,
];

export const zIndexSwitch = (index: number) => {
	switch (index) {
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		case 3:
			return 2;
		case 4:
			return 1;
		default:
			return 1;
	}
};

export const scaleSwitch = (index: number) => {
	switch (index) {
		case 0:
			return 0.5;
		case 1:
			return 0.75;
		case 2:
			return 1;
		case 3:
			return 0.75;
		case 4:
			return 0.5;
		default:
			return 1;
	}
};

export const opacitySwitch = (index: number) => {
	switch (index) {
		case 0:
			return 0;
		case 1:
			return 0.8;
		case 2:
			return 1;
		case 3:
			return 0.8;
		case 4:
			return 0;
		default:
			return 1;
	}
};

export const transitionSwitch = (index: number) => {
	switch (index) {
		case 0:
			return 200;
		case 4:
			return 200;
		default:
			return 450;
	}
};

export const translateSwitch = (index: number) => {
	switch (index) {
		case 0:
			return '-125%';
		case 1:
			return '-100%';
		case 2:
			return '-50%';
		case 3:
			return '0%';
		case 4:
			return '25%';
		default:
			return '-50%';
	}
};

export const encode = (data: Record<string, string>) =>
	Object.keys(data)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');

export const isInViewport = (el: HTMLElement | null): boolean => {
	if (el === null) {
		return false;
	}

	const top = el.offsetTop;
	const left = el.offsetLeft;
	const width = el.offsetWidth;
	const height = el.offsetHeight;

	return (
		top < window.pageYOffset + window.innerHeight &&
		left < window.pageXOffset + window.innerWidth &&
		top + height > window.pageYOffset &&
		left + width > window.pageXOffset
	);
};

export const calcPercent = () => {
	const h = document.documentElement;
	const b = document.body;
	const st = 'scrollTop';
	const sh = 'scrollHeight';

	return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
};

export const onModalOpen = () => {
	const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
	const {body} = document;
	setTimeout(() => {
		body.style.position = 'fixed';
		body.style.top = `-${scrollY}`;
	}, 200);
};

export const onModalClose = () => {
	const {body} = document;
	const scrollY = body.style.top;
	body.style.position = '';
	body.style.top = '';
	window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
};
