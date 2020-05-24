import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import Statistics from '../Statistics';
import './styles.css';

function Input({
  text,
  onChange,
}) {
  const handleChange = useCallback(({target: {value}}) => onChange(value));

  return (
    <div className="input">
      <textarea
        value={text}
        placeholder="Input"
        autoFocus="on"
        onChange={handleChange}
      />

      <Statistics text={text}/>
    </div>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string,
};

Input.defaultProps = {
  text: '',
};

export default Input;
