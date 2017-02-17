'use strict';

import React from 'react';
import Statistics from './statistics.jsx';

require('css/output.css');

class Output extends React.Component {
	render() {
		const {
			text
		} = this.props;
		const textFormatted = formatText(text);

		return (
			<div className="output">
				<textarea
					readOnly
					value={textFormatted}
					placeholder="Output"
					/>

				<Statistics text={textFormatted}/>
			</div>
		);
	}
}
Output.propTypes = {
	text: React.PropTypes.string
};
Output.defaultProps = {
	text: ''
};

export default Output;

function formatText(text) {
	const out = text
		.split('\n')
		.sort()
		.reduce((a, b) => {
			const line = b.trim();
			if (line !== '' && !a.includes(line)) {
				a.push(line);
			}
			return a;
		}, [])
		.join('\n');

	return out;
}
