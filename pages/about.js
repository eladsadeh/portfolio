import React from 'react';

import content from '../lib/content/about.json';

import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/about.module.css';

export async function getStaticProps(props) {
	return {
		props: {
			content,
		},
	};
}

function About({content}) {
	return (
		<Layout>
			<div className={styles.container}>
				<h2>{content.title}</h2>
				<ul className={utilStyles.bullets}>
					{content.bullets.map((bullet, idx) => {
						return (
							<li key={idx}>
								<p>{bullet}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</Layout>
	);
}

export default About;
