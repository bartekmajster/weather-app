import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import convertWindSpeed from '../utils/convertWindSpeed';

const Wrapper = styled.div`
  height: 50px;
  border-left: 1px solid ${({ theme }) => theme.grey100};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.grey50};

  span:nth-of-type(1) {
    font-size: 10px;
    margin-bottom: 5px;
  }

  span:nth-of-type(2) {
    font-size: 12px;
  }
`;

const WindSpeedWrapper = ({ wind }) => {
  return (
    <Wrapper>
      <span>{convertWindSpeed(wind)}</span>
      <span>{wind.toFixed()} km/h</span>
    </Wrapper>
  );
};

export default WindSpeedWrapper;

WindSpeedWrapper.propTypes = {
  wind: PropTypes.number.isRequired,
};
