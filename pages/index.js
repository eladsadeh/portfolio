import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
		<Layout>
			<div className={styles.container}>
				<div>
					<span className={utilStyles.blue}>let </span>whoAmI
					<span className={utilStyles.red}> = </span>
					<span className={utilStyles.yellow}>[</span>
					<span className={styles.links}>
						<Link href='/education'>
							<a className={styles.link}>Education,</a>
						</Link>
						<Link href='/work'>
							<a className={styles.link}>Work,</a>
						</Link>
						<Link href='/projects'>
							<a className={styles.link}>Projects,</a>
						</Link>
						<Link href='background'>
							<a className={styles.link}>EverythingElse</a>
						</Link>
					</span>
					<span className={utilStyles.yellow}>]</span>
					<div className={styles.reduce}>
						<span className={utilStyles.green}>.reduce</span>
						<span className={utilStyles.yellow}>(</span>
						<span className={utilStyles.purple}>(</span>
						<span className={utilStyles.orange}>me</span>,{' '}
						<span className={utilStyles.orange}>experience</span>
						<span className={utilStyles.purple}>)</span>
						<span className={utilStyles.blue}> => </span>
						<span className={utilStyles.orange}>me</span>
						<span className={utilStyles.red}> + </span>
						<span className={utilStyles.orange}>experience</span>
						<span className={utilStyles.yellow}>)</span>
					</div>
				</div>
			</div>
		</Layout>
	);
}
