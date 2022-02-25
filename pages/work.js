import React from 'react';
import Layout from '../components/Layout';
import Accordion from '../components/Accordion';
import contents from '../lib/content/work.json';
import styles from '../styles/work.module.css';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps(props) {
	return {
		props: {
			contents,
		},
	};
}

function Work({ contents }) {
	return (
		<Layout>
			<div className={styles.container}>
                <div className={styles.heading}>
                    <span className={styles.left}>
                        <span className={utilStyles.yellow}>[</span>
                        <span className=''>What, I, did, so, far</span>
                        <span className={utilStyles.yellow}>]</span>
                        <span className={utilStyles.red}> = </span>
                    </span>
                    <span className={styles.right}>
                        <span className={utilStyles.purple}>&#123;</span>
                        <span className={utilStyles.orange}> ...atWork </span>
                        <span className={utilStyles.purple}>&#125;</span>
                    </span>
                </div>
                <div className={styles.accordion}>
                    <Accordion contents={contents} />
                </div>
            </div>
		</Layout>
	);
}

export default Work;
