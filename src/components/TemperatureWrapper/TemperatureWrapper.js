import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-left: 1px solid ${({ theme }) => theme.grey100};
  height: ${({ theme }) => theme.height.temperature};
`;

const TemperatureWrapper = () => {
  return <Wrapper />;
};

export default TemperatureWrapper;

TemperatureWrapper.propTypes = {
  temp: PropTypes.number.isRequired,
};
