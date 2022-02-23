import React from 'react';

import styles from '../styles/title.module.css';
import utilStyles from '../styles/utils.module.css';

function WorkTitle(props) {
	return (
		<div className={styles.title}>
			<span className={styles.name}>
				<span>&lt;</span>
				<h1 className={utilStyles.blue}>Work Experience&nbsp;</h1>
			</span>
			<span className={styles.name}>&nbsp;/&gt;</span>
		</div>
	);
}

export default WorkTitle;