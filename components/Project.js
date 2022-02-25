import React from 'react';

import styles from '../styles/project.module.css';
import utilStyles from '../styles/utils.module.css';

function Project({ project }) {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h3 className={styles.title}>{project.title}</h3>
				<p className={styles.description}>{project.description}</p>
				<ul className={utilStyles.bullets}>
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
					src={`/videos/${project.video}`}
					type='video/mp4'></video>
				<ul className={styles.links}>
					<span className={utilStyles.yellow}>[</span>
					{project.links.map((link, idx) => {
						return (
							<li key={idx}>
								{idx ? <span>,</span> : ''}
								<a href={link.url}>{link.name}</a>
							</li>
						);
					})}
					<span className={utilStyles.yellow}>]</span>
				</ul>
			</div>
		</div>
	);
}

export default Project;
