import React, {useState} from 'react';
import AccordionItem from './AccordionItem';

function Accordion({ contents, firstOpen }) {
    const initialState = new Array(contents.length).fill(false).map((el,idx) => !idx  && firstOpen ? true: false);
	
    const [showContent, setShowContent] = useState(initialState);

	function toggleContent(index) {
		const newState = showContent.map((val, idx) => {
			return idx === index ? !val : false;
		});
		setShowContent(newState);
	}
	return (
		<div>
			{contents.map((content, idx) => {
				return (
					<AccordionItem
						key={idx}
						idx={idx}
						content={content}
						showContent={showContent[idx]}
						toggleContent={toggleContent}
					/>
				);
			})}
		</div>
	);
}

export default Accordion;
