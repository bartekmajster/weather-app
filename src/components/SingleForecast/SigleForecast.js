import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DayWrapper from '../DayWrapper/DayWrapper';
import TimeWrapper from '../TimeWrapper/TimeWrapper';
import ForecastWrapper from '../ForecastWrapper/ForecastWrapper';
import TemperatureWrapper from '../TemperatureWrapper/TemperatureWrapper';
import RainWrapper from '../RainWrapper/RainWrapper';
import WindDirWrapper from '../WindDirWrapper/WindDirWrapper';
import WindSpeedWrapper from '../../WindSpeedWrapper/WindSpeedWrapper';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.grey100};
`;

const SingleForecast = ({ data, maxRain }) => (
  <Wrapper>
    <DayWrapper time={data.timestamp_local} />
    <TimeWrapper time={data.timestamp_local} />
    <ForecastWrapper image={data.weather.icon} />
    <TemperatureWrapper temp={data.temp} />
    <RainWrapper rain={data.precip} maxRain={maxRain} />
    <WindDirWrapper wind={data.wind_dir} />
    <WindSpeedWrapper wind={data.wind_spd} />
  </Wrapper>
);
export default SingleForecast;

SingleForecast.propTypes = {
  data: PropTypes.object.isRequired,
  maxRain: PropTypes.number.isRequired,
};
