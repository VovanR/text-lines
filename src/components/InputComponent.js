'use strict';

import React from 'react';

require('styles/Input.css');

class InputComponent extends React.Component {
  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="input-component">
        <textarea
          onChange={this.handleChange.bind(this)}
          defaultValue={this.props.text}
          placeholder="Input"
        />
      </div>
    );
  }
}

InputComponent.displayName = 'InputComponent';

InputComponent.propTypes = {
  text: React.PropTypes.string
};
InputComponent.defaultProps = {
  text: ''
};

export default InputComponent;
