'use strict';

import React from 'react';
import Input from './input.jsx';
import Output from './output.jsx';
import Copyright from './copyright.jsx';

require('css/app.css');

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {text: ''};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(text) {
		this.setState({text});
	}

	render() {
		const {
			text
		} = this.state;

		return (
			<div className="app">
				<Input
					text={text}
					onChange={this.handleChange}
					/>

				<Output text={text}/>

				<Copyright
					author="Vladimir Rodkin"
					repo="text-lines"
					username="vovanr"
					/>
			</div>
		);
	}
}
App.propTypes = {
};
App.defaultProps = {
};

export default App;
