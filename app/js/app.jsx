/* global localStorage */

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
		this.handleClickClear = this.handleClickClear.bind(this);
	}

	componentWillMount() {
		const text = localStorage.getItem('text');
		if (text) {
			this.setState({text});
		}
	}

	_setText(text) {
		this.setState({text}, () => {
			localStorage.setItem('text', text);
		});
	}

	handleChange(text) {
		this._setText(text);
	}

	handleClickClear() {
		this._setText('');
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

				<button
					onClick={this.handleClickClear}
					type="button"
					title="Clear"
					>
					{'×'}
				</button>

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
