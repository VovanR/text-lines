import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Statistics from '../Statistics';
import {formatText} from './utils.js';

function Output({text}) {
  const textFormatted = formatText(text);

  return (
    <div className="output">
      <textarea
        readOnly
        value={textFormatted}
        placeholder="Output"
      />

      <Statistics text={textFormatted}/>
    </div>
  );
}

Output.propTypes = {
  text: PropTypes.string,
};

Output.defaultProps = {
  text: '',
};

export default Output;

