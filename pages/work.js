import React from 'react';
import Layout from '../components/Layout';
import Accordion from '../components/Accordion';
import contents from '../lib/content/work.json';

export async function getStaticProps(props) {
	return {
		props: {
			contents,
		},
	};
}

function Work({contents}) {
	return (
		<Layout>
			<div>Work</div>
            <Accordion contents={contents} />
		</Layout>
	);
}

export default Work;
