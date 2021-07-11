import React from 'react';
import {AboutShapes} from '../assets/svg';
import ArticleCard from '../components/ArticleCard';
import ArticleWrapper from '../components/ArticleWrapper';
import Content from '../components/Content';
import {images} from '../util/image';

interface Props {
	isMobile: boolean;
}

export function Articles(props: Props) {
	const {isMobile} = props;

	return (
		<section id="articles">
			<Content>
				{isMobile ? null : <AboutShapes />}
				<h1>Articles</h1>
				<ArticleWrapper>
					<ArticleCard
						description="How to create and publish a full stack application using React.js, Nginx, Strapi, MongoDB, and DigitalOcean."
						title="Create a Full-Stack App"
						image={images.articles.fullstack}
						tags={['Tutorial', 'Cloud Hosting']}
						link="https://dev.to/jackrkelly/create-a-full-stack-web-application-using-react-strapi-nginx-mongodb-and-digitalocean-bkh"
					/>
					<ArticleCard
						description="Learn about the importance of networking, and how to network successfully as a Software Engineer."
						title="The importance of networking"
						image={images.articles.networking}
						tags={['Career', 'Beginners']}
						link="https://dev.to/jackrkelly/the-importance-of-networking-2o7o"
					/>
					<ArticleCard
						description="How to have a professional online appearance to help you land that next position as a developer/designer."
						title="Professional online appearance"
						image={images.articles.appearance}
						tags={['Career', 'Beginners']}
						link="https://dev.to/jackrkelly/how-to-have-a-professional-online-appearance-39gk"
					/>
				</ArticleWrapper>
			</Content>
		</section>
	);
}
