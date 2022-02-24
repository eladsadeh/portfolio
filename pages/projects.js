import React from 'react';
import Languages from '../components/Languages';
import Layout from '../components/Layout';
import projects from '../lib/content/projects.json';


import styles from '../styles/projects.module.css';
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
			{projects.map((project,idx) => {
                return <Project key={idx} project={project}/>}

            )}
			<Languages />
		</Layout>
	);
}

export default Projects;
