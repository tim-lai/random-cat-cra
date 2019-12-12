import React from 'react';
import PropTypes from 'prop-types';

/**
 * DO NOT MODIFY THIS CLASS DIRECTLY
 * (should be modified only via "WithCatRefresh")
 */
export const CatImage = (props) => {
  const { url, ...rest } = props;
  return <img id='cat' src={url} {...rest} />;
}

CatImage.propTypes = {
  url: PropTypes.string.isRequired,
};
