import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  border-left: 1px solid ${({ theme }) => theme.grey100};
`;

const Icon = styled.div`
  background-image: ${({ image }) =>
    `url('https://www.weatherbit.io/static/img/icons/${image}.png')`};
  width: 35px;
  height: 35px;
  background-position: center;
  background-size: contain;
`;

const ForecastWrapper = ({ image }) => {
  return (
    <Wrapper>
      <Icon image={image} />
    </Wrapper>
  );
};

export default ForecastWrapper;

ForecastWrapper.propTypes = {
  image: PropTypes.string.isRequired,
};
