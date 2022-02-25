import React from 'react';
import Link from 'next/link';
import styles from '../styles/links.module.css';
import utilStyles from '../styles/utils.module.css';

function Links(props) {
	return (
		<span>
			<span className={utilStyles.yellow}>[</span>
			<span className={styles.links}>
				<Link href='/work'>
					<a className={styles.link}>Work,</a>
				</Link>
				<Link href='/projects'>
					<a className={styles.link}>Projects,</a>
				</Link>
				<Link href='/education'>
					<a className={styles.link}>Education,</a>
				</Link>
				<Link href='/about'>
					<a className={styles.link}>EverythingElse</a>
				</Link>
			</span>
			<span className={utilStyles.yellow}>]</span>
		</span>
	);
}

export default Links;
