import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => (
	<>
		<Head>
			<title>Elad Sadeh</title>
			<link rel='icon' href='./images/favicon.ico' />
		</Head>
		<Nav />
		<main className='main'>{props.children}</main>
		<Footer />
	</>
);

export default Layout;
