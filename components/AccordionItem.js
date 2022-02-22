import React from 'react';

function AccordionItem({ content, toggleContent, idx, showContent }) {
	return (
		<div>
			<div
				className={
					showContent ? 'accordion_item_title active' : 'accordion_item_title'
				}
				onClick={() => toggleContent(idx)}>
				<h2>{content.title}</h2>
				<span>{showContent ? '-' : '+'}</span>
			</div>
			{showContent && (
				<div>
					<div className='description'>{content.description}</div>
					<ul className='bullets'>
						{content.bullets.map((bullet, idx) => {
							return <li key={idx}>{bullet}</li>;
						})}
					</ul>
				</div>
			)}
		</div>
	);
}

export default AccordionItem;
