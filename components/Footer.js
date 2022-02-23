import React from 'react';
import { FaReact, FaPython, FaNodeJs, FaGithub } from 'react-icons/fa';
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
	SiLinkedin,
	SiGmail,
} from 'react-icons/si';

import styles from '../styles/footer.module.css';

function Footer(props) {
	return (
		<div className={styles.container}>
			
			<div className={styles.connect}>
				<div className={styles.heading}>Connect</div>
				<div className={styles.icons}>
					<a href='https://github.com/eladsadeh'>
						<FaGithub
							style={{
								color: 'white',
								backgroundColor: 'black',
								borderRadius: '50%',
							}}
						/>
					</a>
					<a href='https://www.linkedin.com/in/esadeh/'>
						<SiLinkedin
							style={{
								color: 'DodgerBlue',
								backgroundColor: 'white',
								borderRadius: '4px',
							}}
						/>
					</a>
					<a href='mailto:elad.sadeh1@gmail.com'>
						<SiGmail
							style={{
								color: 'Crimson',
								backgroundColor: 'white',
								borderRadius: '4px',
							}}
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
