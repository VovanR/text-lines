'use strict';

import React from 'react';

require('css/copyright.css');

const Copyright = props => (
	<a
		className="copyright"
		href={`https://github.com/${props.username}/${props.repo}`}
		target="_blank"
		rel="noopener noreferrer"
		tabIndex="-1"
		>
		<span className="copyright__license">
			{'MIT ©'}
		</span>

		{' '}

		<span className="copyright__author">
			{props.author}
		</span>
	</a>
);
Copyright.propTypes = {
	author: React.PropTypes.string.isRequired,
	repo: React.PropTypes.string.isRequired,
	username: React.PropTypes.string.isRequired
};
Copyright.defaultProps = {
};

export default Copyright;
