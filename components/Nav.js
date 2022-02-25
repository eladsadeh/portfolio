import React, { useState } from 'react';
import { useRouter } from 'next/router';
import NavMenu from './NavMenu';

import styles from '../styles/Nav.module.css';
import Header from '../components/Header';

function Nav(props) {
	const router = useRouter();
	let header = '';
	let subHeader = false;

	switch (router.pathname) {
		case '/work':
			header = 'Work Experience';
			break;
		case '/education':
			header = 'Education';
			break;
		case '/projects':
			header = 'Projects';
			break;
		case '/about':
			header = 'About Me';
			break;
		case '/':
			header = 'Elad Sadeh';
			subHeader = true;
			break;
	}
	
	return (
		<nav className={styles.navbar}>
			<NavMenu />
			<Header header={header} subHeader={subHeader} />
		</nav>
	);
}

export default Nav;
