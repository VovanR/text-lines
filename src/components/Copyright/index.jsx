import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Copyright({
  author,
  repo,
  username,
}) {
  return (
    <a
      className="copyright"
      href={`https://github.com/${username}/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex="-1"
    >
      <span className="copyright__license">
        MIT ©
      </span>

      {' '}

      <span className="copyright__author">
        {author}
      </span>
    </a>
  );
}

Copyright.propTypes = {
  author: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

Copyright.defaultProps = {
};

export default Copyright;
