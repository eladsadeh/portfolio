import React from 'react';

import styles from '../styles/header.module.css';
import utilStyles from '../styles/utils.module.css';

function Header({ header, subHeader }) {
	return (
		<div className={styles.title}>
			<span className={styles.header}>
				<span>&lt;</span>
				<h1 className={utilStyles.blue}>{header}&nbsp;</h1>
			</span>
			{subHeader && (
				<span className={styles.code}>
					<span className={utilStyles.green}>whatIDo</span>
					<span className={utilStyles.red}>=</span>
					<span className={utilStyles.purple}>&#123;</span>
					<span className={utilStyles.orange}>Software Engineering</span>
					<span className={utilStyles.purple}>&#125;</span>
				</span>
			)}
			<span className={styles.header}>&nbsp;/&gt;</span>
		</div>
	);
}

export default Header;
