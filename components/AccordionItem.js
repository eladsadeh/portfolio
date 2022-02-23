import React from 'react';
import { FiChevronLeft, FiChevronDown } from 'react-icons/fi';
import styles from '../styles/accordionItem.module.css';

function AccordionItem({ content, toggleContent, idx, showContent }) {
	return (
		<div className={styles.container}>
			<div className={showContent? `${styles.active} ${styles.title}`: styles.title} onClick={() => toggleContent(idx)}>
				<h2>{content.title}</h2>
				{showContent ? <FiChevronDown className={styles.icon}/> : <FiChevronLeft />}
			</div>
			{showContent && (
				<div className={styles.content}>
					<div className={styles.description}>{content.description}</div>
					<ul className={styles.bullets}>
						{content.bullets.map((bullet, idx) => {
							return <li key={idx}><p>{bullet}</p></li>;
						})}
					</ul>
				</div>
			)}
		</div>
	);
}

export default AccordionItem;
