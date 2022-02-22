import React, { useState } from 'react';
import { useRouter } from 'next/router';
import NavMenu from './NavMenu';

import styles from '../styles/Nav.module.css';
import HomeTitle from './HomeTitle';
import WorkTitle from './WorkTitle'

function Nav(props) {
	const router = useRouter();
    const page = router.pathname;

	return (
		<nav className={styles.navbar}>
			<NavMenu />
			{(page === '/work') && <WorkTitle />}
			{(page === '/') && <HomeTitle />}
		</nav>
	);
}

export default Nav;
