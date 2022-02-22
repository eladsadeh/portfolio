import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => (
	<>
		<Head>
			<title>Elad Sadeh</title>
			<link rel='icon' href='./images/favicon.ico' />
		</Head>
		<div className='main'>
		<Nav />
			<main>{props.children}</main>
		<Footer />
		</div>
	</>
);

export default Layout;
