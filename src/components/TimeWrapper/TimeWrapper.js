import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 11px;
  font-weight: 400;
  text-transform: uppercase;
  padding-left: 6px;
  height: ${({ theme }) => theme.height.time};
  line-height: 30px;
  color: ${({ theme }) => theme.grey200};
  border-left: 1px solid ${({ theme }) => theme.grey100};
  text-align: center;

  span {
    font-size: 14px;
    font-weight: bold;
    color: #000;
  }
`;

const TimeWrapper = ({ time }) => {
  return (
    <Wrapper>
      <span>{time.slice(11, 16)}</span>
    </Wrapper>
  );
};

export default TimeWrapper;

TimeWrapper.propTypes = {
  time: PropTypes.string.isRequired,
};
