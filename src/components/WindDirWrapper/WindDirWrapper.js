import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrow from '../../assets/arrow.png';
import convertWindDeg from '../../utils/convertWindDeg';

const Wrapper = styled.div`
  height: 60px;
  border-left: 1px solid ${({ theme }) => theme.grey100};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.grey50};

  span {
    font-size: 10px;
  }
`;

const Arrow = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
  transform: rotate(${({ deg }) => `${deg + 180}deg `});
`;

const WindDirWrapper = ({ wind }) => {
  return (
    <Wrapper>
      <Arrow src={arrow} deg={wind} />
      <span>{convertWindDeg(wind)}</span>
    </Wrapper>
  );
};

export default WindDirWrapper;

WindDirWrapper.propTypes = {
  wind: PropTypes.number.isRequired,
};
