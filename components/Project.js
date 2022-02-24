import React from 'react';

function Project(props) {
    return (
			<div>
				<div>
					<video
						className={styles.video}
						controls
						autoPlay
						loop
						src={video}
						type='video/mp4'></video>
				</div>
			</div>
		);
}

export default Project;