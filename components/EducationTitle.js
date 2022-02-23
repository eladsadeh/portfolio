import React from 'react';

import styles from '../styles/title.module.css';
import utilStyles from '../styles/utils.module.css';

function EducationTitle(props) {
	return (
		<div className={styles.title}>
			<span className={styles.name}>
				<span>&lt;</span>
				<h1 className={utilStyles.blue}>Education&nbsp;</h1>
			</span>
			<span className={styles.name}>&nbsp;/&gt;</span>
		</div>
	);
}

export default EducationTitle;
