import React from 'react';

import styles from '../styles/title.module.css';
import utilStyles from '../styles/utils.module.css';

function HomeTitle(props) {
	const code =true;
	return (
		<span className={styles.title}>
			<span className={styles.header}>
				<span>&lt;</span>
				<h1 className={utilStyles.blue}>Elad Sadeh&nbsp;</h1>
			</span>
			{code && <span className={styles.code}>
				<span className={utilStyles.green}>whatIDo</span>
				<span className={utilStyles.red}>=</span>
				<span className={utilStyles.purple}>&#123;</span>
				<span className={utilStyles.orange}>Software Engineering</span>
				<span className={utilStyles.purple}>&#125;</span>
			</span>}
			<span className={styles.header}>&nbsp;/&gt;</span>
		</span>
	);
}

export default HomeTitle;
