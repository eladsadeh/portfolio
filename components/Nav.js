import React, { useState } from 'react';
import { useRouter } from 'next/router';
import NavMenu from './NavMenu';

import styles from '../styles/Nav.module.css';
import HomeTitle from './HomeTitle';
import WorkTitle from './WorkTitle'
import EducationTitle from './EducationTitle';
import ProjectsTitle from './ProjectsTitle';
import Header from '../components/Header'

function Nav(props) {
	const router = useRouter();
    const page = router.pathname;

	return (
		<nav className={styles.navbar}>
			<NavMenu />
			{page === '/work' && <Header header={'Work Experience'} />}
			{page === '/education' && <Header header={'Education'} />}
			{page === '/projects' && <Header header={'Projects'} />}
			{page === '/about' && <Header header={'About Me'} />}
			{page === '/' && <Header header={'Elad Sadeh'} subHeader/>}
		</nav>
	);
}

export default Nav;
