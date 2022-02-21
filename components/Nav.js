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
			<div className={styles.links}>
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
					<Link href='/'>
						<a>
							<p className={styles.name}>
								&lt;Elad Sadeh{' '}
								<code>whatIDo=&#123;Software Engineer&#125;</code>
								/&gt;
							</p>
						</a>
					</Link>
				</h1>
			</div>
		</nav>
	);
}

export default Nav;
