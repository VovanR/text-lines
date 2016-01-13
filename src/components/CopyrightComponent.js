'use strict';

import React from 'react';

require('styles/Copyright.css');

class CopyrightComponent extends React.Component {
  render() {
    return (
      <div className='copyright-component'>
        <a href={`https://github.com/VovanR/${this.props.repoName}`} target='_blank'>MIT&nbsp;&copy;&nbsp;<span>Vladimir Rodkin</span></a>
      </div>
    );
  }
}

CopyrightComponent.displayName = 'CopyrightComponent';

CopyrightComponent.propTypes = {
  repoName: React.PropTypes.string
};
CopyrightComponent.defaultProps = {
  repoName: ''
};

export default CopyrightComponent;
