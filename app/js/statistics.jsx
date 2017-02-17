'use strict';

import React from 'react';

require('css/statistics.css');

const Statistics = props => (
	<div className="statistics">
		{calculateLines(props.text)}
	</div>
);
Statistics.propTypes = {
	text: React.PropTypes.string
};
Statistics.defaultProps = {
	text: ''
};

export default Statistics;

function calculateLines(text) {
	return text.split('\n').length;
}
