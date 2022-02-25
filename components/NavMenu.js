import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { TiThMenu } from 'react-icons/ti';
import { IoClose } from 'react-icons/io5';

import styles from '../styles/NavMenu.module.css';

function NavMenu(props) {
	const router = useRouter();
	const [showMenu, setShowMenu] = useState(false);

	return (
		<>
			<button
				className={styles.showButton}
				onClick={() => {
					setShowMenu(!showMenu);
				}}>
				{showMenu ? <IoClose /> : <TiThMenu />}
			</button>
			{showMenu && (
				<div className={showMenu ? styles.navmenu : styles.slideout}>
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
			)}
		</>
	);
}

export default NavMenu;
