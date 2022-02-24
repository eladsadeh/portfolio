import React from 'react';
import Languages from '../components/Languages';
import Layout from '../components/Layout';

import styles from '../styles/projects.module.css';
import Project from '../components/Project'

function Projects(props) {
	const video = '/videos/trellis.mp4';
	return (
		<Layout>
			<Project video={video} project/>
			<Languages />
		</Layout>
	);
}

export default Projects;
