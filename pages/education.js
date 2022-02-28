import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import Languages from '../components/Languages';
import styles from '../styles/education.module.css';
import utilStyles from '../styles/utils.module.css';

import technionLogo from '../public/images/technion.png';
import GALogo from '../public/images/generalAssembly.png';

// export async function getStaticProps(props) {
// 	return {
// 		props: {
// 			contents,
// 		},
// 	};
// }

function Education({ contents }) {
	return (
		<Layout>
			<div className={styles.container}>
				<div className={styles.heading}>
					<span className={utilStyles.yellow}>[</span>
					<span className=''>What, I, Learned, so, far</span>
					<span className={utilStyles.yellow}>]</span>
					<span className={utilStyles.red}> = </span>
					<span className={utilStyles.purple}>&#123;</span>
					<span className={utilStyles.orange}> ...atSchool </span>
					<span className={utilStyles.purple}>&#125;</span>
				</div>
				<div className={styles.content}>
					<div className={styles.school}>
						<div className={styles.image}>
							<Image src={GALogo} alt='General Assembly' layout='responsive' />
						</div>
						<div className={styles.description}>
							<h3>General Assembly</h3>
							<p>Software Engineering</p>
							<p>
								Focused on JavaScript, Python, React, Next.js, Express, Django,
								CSS, HTML.
							</p>
						</div>
					</div>
					<div className={styles.school}>
						<div className={styles.image}>
							<Image src={technionLogo} alt='Technion' layout='responsive' />
						</div>
						<div className={styles.description}>
							<h3>Technion - Israel Institute of Technology</h3>
							<p>B. Sc. - Electrical Engineering • Cum Laude</p>
							<p>Focused on Semiconductors, Computer Science, and physics.</p>
						</div>
					</div>
				</div>
			</div>
			<Languages />
		</Layout>
	);
}

export default Education;
