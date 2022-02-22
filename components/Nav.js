import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import NavMenu from './NavMenu';
import { TiThMenu } from 'react-icons/ti';
import { IoClose } from 'react-icons/io5';

import styles from '../styles/Nav.module.css';
import HomeTitle from './HomeTitle';

function Nav(props) {
	const router = useRouter();
	const [showMenu, setShowMenu] = useState(false);
    console.log(router);
	return (
		<nav className={styles.navbar}>
			<NavMenu />
			<HomeTitle />
		</nav>
	);
}

export default Nav;
