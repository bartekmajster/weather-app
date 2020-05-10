import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: ${({ theme }) => theme.height.rain};
  border-left: 1px solid ${({ theme }) => theme.grey100};
`;

const InnerWrapper = styled.div`
  height: 100%;
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const RainBar = styled.span`
  display: block;
  height: ${({ height }) => `${height}%`};
  background-color: ${({ theme }) => theme.blue};
  width: 100%;
`;

const RainWrapper = ({ rain, maxRain }) => {
  const height = ((rain * 100) / (maxRain + 2)).toFixed();

  return (
    <Wrapper>
      <InnerWrapper>
        {rain !== 0 && <span>{rain.toFixed(1)} mm</span>}
        <RainBar height={height} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default RainWrapper;

RainWrapper.propTypes = {
  rain: PropTypes.number.isRequired,
  maxRain: PropTypes.number.isRequired,
};
