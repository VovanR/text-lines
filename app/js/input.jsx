'use strict';

import React from 'react';
import Statistics from './statistics.jsx';

require('css/input.css');

class Input extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.onChange(event.target.value);
	}

	render() {
		const {
			text
		} = this.props;

		return (
			<div className="input">
				<textarea
					onChange={this.handleChange}
					defaultValue={text}
					placeholder="Input"
					autoFocus="on"
					/>

				<Statistics text={text}/>
			</div>
		);
	}
}
Input.propTypes = {
	onChange: React.PropTypes.func.isRequired,
	text: React.PropTypes.string
};
Input.defaultProps = {
	text: ''
};

export default Input;
