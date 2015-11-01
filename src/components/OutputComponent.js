'use strict';

import React from 'react';
import {sortBy, uniq} from 'lodash'

require('styles/Output.css');

class OutputComponent extends React.Component {
  _getText() {
    let out = this.props.text.trim().split('\n');
    out = sortBy(out);
    out = uniq(out);
    out = out.join('\n');

    return out;
  }

  render() {
    return (
      <div className="output-component">
        <textarea
          readOnly
          value={this._getText()}
          placeholder="Output"
        />
      </div>
    );
  }
}

OutputComponent.displayName = 'OutputComponent';

OutputComponent.propTypes = {
  text: React.PropTypes.string
};
OutputComponent.defaultProps = {
  text: ''
};

export default OutputComponent;
