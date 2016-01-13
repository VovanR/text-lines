'use strict';

import React from 'react';

require('styles/Statistics.css');

class StatisticsComponent extends React.Component {
  _calcLines(text) {
    return text.split('\n').length;
  }

  render() {
    return (
      <div className='statistics-component'>
        {this._calcLines(this.props.text)}
      </div>
    );
  }
}

StatisticsComponent.displayName = 'StatisticsComponent';

StatisticsComponent.propTypes = {
  text: React.PropTypes.string
};
StatisticsComponent.defaultProps = {
  text: ''
};

export default StatisticsComponent;
