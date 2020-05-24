import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import {calculateLines} from './utils.js';

function Statistics({text}) {
  return (
    <div className="statistics">
      {calculateLines(text)}
    </div>
  );
};

Statistics.propTypes = {
  text: PropTypes.string,
};

Statistics.defaultProps = {
  text: '',
};

export default Statistics;
