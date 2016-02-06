'use strict';

import React from 'react';

require('styles/Copyright.css');

class CopyrightComponent extends React.Component {
	render() {
		return (
			<div className="copyright-component">
				<a
					className="copyright-component__link"
					href={`https://github.com/VovanR/${this.props.repoName}`}
					target="_blank"
					>
					<span className="copyright-component__license">
						MIT&nbsp;&copy;&nbsp;
					</span>
					<span className="copyright-component__author">
						Vladimir Rodkin
					</span>
				</a>
			</div>
		);
	}
}

CopyrightComponent.displayName = 'CopyrightComponent';

CopyrightComponent.propTypes = {
	repoName: React.PropTypes.string.isRequired
};

export default CopyrightComponent;
