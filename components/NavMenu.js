import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from '../styles/NavMenu.module.css';

function NavMenu(props) {
	const router = useRouter();
	const [showMenu, setShowMenu] = useState(false);

	return (
		<>
			<div
				className={styles.menuIcon}
				onClick={() => {
					setShowMenu(!showMenu);
				}}>
				<div
					className={
						showMenu ? `${styles.menuline} ${styles.topline}` : styles.menuline
					}></div>
				<div
					className={
						showMenu ? `${styles.menuline} ${styles.midline}` : styles.menuline
					}></div>
				<div
					className={
						showMenu
							? `${styles.menuline} ${styles.bottomline}`
							: styles.menuline
					}></div>
			</div>
			<div className={showMenu ? styles.navmenu : styles.hideMenu}>
				<ul className={styles.navitems}>
					<li className={styles.link}>
						<Link href='/work'>
							<a>Work Experience</a>
						</Link>
					</li>
					<li className={styles.link}>
						<Link href='/projects'>
							<a>Projects</a>
						</Link>
					</li>
					<li className={styles.link}>
						<Link href='/education'>
							<a>Education</a>
						</Link>
					</li>
					<li className={styles.link}>
						<Link href='/about'>
							<a>Everything Else</a>
						</Link>
					</li>
					<li className={styles.link}>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}

export default NavMenu;
