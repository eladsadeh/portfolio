import React from 'react';

import styles from '../styles/project.module.css';

function Project({ project }) {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}>{project.title}</h3>
				<p className={styles.description}>{project.description}</p>
				<ul className={styles.bullets}>
					{project.bullets.map((bullet, idx) => {
						return (
							<li key={idx}>
								<p>{bullet}</p>
							</li>
						);
					})}
				</ul>
			</div>
			<div className={styles.videoWrap}>
				<video
					className={styles.video}
					controls
					autoPlay
					loop
					src={`/videos/${project.video}`}
					type='video/mp4'></video>
				<ul className={styles.links}>
					{project.links.map((link, idx) => {
						return (
							<li key={idx}>
								<a href={link.url}>{link.name}</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default Project;
