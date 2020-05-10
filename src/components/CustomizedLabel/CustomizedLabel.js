import React from 'react';
import PropTypes from 'prop-types';

const CustomizedLabel = ({ x, y, value, temp }) => (
  <text
    x={x}
    y={y}
    dy={-8}
    dx={3}
    fontSize={temp ? '16' : '11'}
    fontWeight={temp ? 'bold' : null}
    textAnchor="middle"
  >
    {temp ? value : value + 1000}
    {temp ? '°' : ` hPa`}
  </text>
);

export default CustomizedLabel;

CustomizedLabel.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
  temp: PropTypes.bool,
};
CustomizedLabel.defaultProps = {
  x: null,
  y: null,
  value: null,
  temp: false,
};
