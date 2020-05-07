import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import convertDay from '../../utils/convertDay';

const Wrapper = styled.div`
  font-size: 11px;
  font-weight: 400;
  text-transform: uppercase;
  padding-left: 6px;
  height: 15px;
  line-height: 15px;
  color: ${({ theme }) => theme.grey200};
  border-left: ${({ theme, border }) => (border ? `1px solid ${theme.grey100}` : 'none')}};
`;

const DayWrapper = ({ time }) => {
  const isTomorrow = time.slice(11, 16) === '00:00';

  const checkDate = (date) => {
    const nextDay = new Date().getDay() + 1 > 7 ? 1 : new Date().getDay() + 1;
    const newDate = new Date(date).getDay();
    if (nextDay === newDate) {
      return 'Jutro';
    }
    return convertDay(newDate);
  };

  return <Wrapper border={isTomorrow}>{isTomorrow && <span>{checkDate(time)}</span>}</Wrapper>;
};

export default DayWrapper;

DayWrapper.propTypes = {
  time: PropTypes.string.isRequired,
};
