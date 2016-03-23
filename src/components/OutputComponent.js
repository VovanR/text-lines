'use strict';

import React from 'react';
import uniq from 'uniq'
import Statistics from './StatisticsComponent';

require('styles/Output.css');

class OutputComponent extends React.Component {
  _getText() {
    let out = this.props.text.trim().split('\n');
    out = uniq(out);
    out = out.join('\n');

    return out;
  }

  render() {
    let text = this._getText();
    return (
      <div className='output-component'>
        <textarea
          readOnly
          value={text}
          placeholder='Output'
        />
        <Statistics text={text} />
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
