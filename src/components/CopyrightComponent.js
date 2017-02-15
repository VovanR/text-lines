'use strict';

import React from 'react';

require('styles/Copyright.css');

class CopyrightComponent extends React.Component {
	render() {
		return (
			<a
				className="copyright"
				href={`https://github.com/vovanr/${this.props.repoName}`}
				target="_blank"
				rel="noopener noreferrer"
				>
				<span className="copyright__license">
					{'MIT ©'}
				</span>

				{' '}

				<span className="copyright__author">
					{'Vladimir Rodkin'}
				</span>
			</a>
		);
	}
}

CopyrightComponent.displayName = 'CopyrightComponent';

CopyrightComponent.propTypes = {
	repoName: React.PropTypes.string.isRequired
};

export default CopyrightComponent;
