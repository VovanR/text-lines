'use strict';

require('normalize.css');
require('styles/App.css');

import React from 'react';
import Input from './InputComponent';
import Output from './OutputComponent';
import Copyright from './CopyrightComponent';

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {text: ''};
  }

  handleChange(text) {
    this.setState({text: text});
  }

  render() {
    return (
      <div className='index'>
        <Input text={this.state.text} onChange={this.handleChange.bind(this)} />
        <Output text={this.state.text} />
        <Copyright repoName='text-lines' />
      </div>
    );
  }
}

export default AppComponent;
