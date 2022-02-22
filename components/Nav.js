import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { TiThMenu } from 'react-icons/ti';
import { IoClose } from 'react-icons/io5';

import styles from '../styles/Nav.module.css';

function Nav(props) {
	const router = useRouter();
	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav className={styles.navbar}>
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
						<li>
							<Link href='/crops'>
								<a>Crops</a>
							</Link>
						</li>
						<li>
							<Link href='/varieties'>
								<a>Varieties</a>
							</Link>
						</li>
						<li>
							<Link href='/seeds'>
								<a>Seeds</a>
							</Link>
						</li>
						<li>
							<Link href='/about'>
								<a>About</a>
							</Link>
						</li>
						<li>
							<Link href='/'>
								<a>Home</a>
							</Link>
						</li>
					</ul>
				</div>
			)}
			<h1 className={styles.heading}>
				<a>
					<p className={styles.name}>
						<span>&lt;</span>
						<span className={styles.blue}>Elad Sadeh </span>
						<span className={styles.code}>
							<span className={styles.green}>whatIDo</span>
							<span className={styles.red}>=</span>
							<span className={styles.purple}>&#123;</span>
							<span className={styles.orange}>Software Engineering</span>
							<span className={styles.purple}>&#125;</span>
						</span>{' '}
						/&gt;
					</p>
				</a>
			</h1>
		</nav>
	);
}

export default Nav;
