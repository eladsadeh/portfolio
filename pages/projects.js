import React from 'react';
import Languages from '../components/Languages';
import Layout from '../components/Layout';
import projects from '../lib/content/projects.json';


import styles from '../styles/projects.module.css';
import utilStyles from '../styles/utils.module.css'
import Project from '../components/Project'

export async function getStaticProps(props) {
	return {
		props: {
			projects,
		},
	};
}

function Projects({projects}) {
	return (
		<Layout>
			<div className={styles.heading}>
				<span className={utilStyles.yellow}>[</span>
				<span className=''>What, I, Built, so, far</span>
				<span className={utilStyles.yellow}>]</span>
				<span className={utilStyles.red}> = </span>
				<span className={styles.right}>
					<span className={utilStyles.purple}>&#123;</span>
					<span className={utilStyles.orange}> ...atGitHub </span>
					<span className={utilStyles.purple}>&#125;</span>
				</span>
			</div>
			<div className={styles.projects}>
				{projects.map((project, idx) => {
					return <Project key={idx} project={project} />;
				})}
			</div>
			<Languages />
		</Layout>
	);
}

export default Projects;
