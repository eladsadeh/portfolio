import React from 'react';
import { FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import {
	SiMongodb,
	SiJavascript,
	SiDjango,
	SiNextdotjs,
	SiExpress,
	SiHtml5,
	SiCss3,
	SiVisualstudiocode,
	SiPostgresql,
} from 'react-icons/si';

import styles from '../styles/languages.module.css';

function Languages(props) {
	return (
		<div className={styles.container}>
			<div className={styles.languages}>
				<div className={styles.heading}>Languages & Frameworks</div>
				<div className={styles.icons}>
					<SiHtml5 style={{ color: 'coral' }} />
					<SiCss3 style={{ color: 'DodgerBlue' }} />
					<SiJavascript style={{ color: 'gold' }} title='JavaScript' />
					<FaReact style={{ color: 'DeepSkyBlue' }} title='React' />
					<SiNextdotjs style={{ color: 'white' }} title='Next.js' />
					<FaNodeJs style={{ color: 'LimeGreen' }} title='Node.js' />
					<SiExpress
						style={{
							color: 'black',
							backgroundColor: 'white',
							padding: '0 2px',
						}}
						title='Express.js'
					/>
					<SiMongodb style={{ color: 'green' }} title='MongoDB' />
					<FaPython style={{ color: 'gold' }} title='Python' />
					<SiDjango
						style={{
							color: 'black',
							backgroundColor: 'white',
							padding: '0 2px',
						}}
						title='Django'
					/>
					<SiPostgresql style={{ color: 'SteelBlue' }} title='PostgreSQL' />
					<SiVisualstudiocode style={{ color: 'DodgerBlue' }} />
				</div>
			</div>
			
		</div>
	);
}

export default Languages;
