import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LineChart, Line, YAxis } from 'recharts';
import CustomizedLabel from '../CustomizedLabel/CustomizedLabel';
import SingleForecast from '../SingleForecast/SigleForecast';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: calc(85px * 48);
  height: 100%;
  transform: translateX(-2610px);
`;

const StyledTempChart = styled.div`
  position: absolute;
  z-index: 999;
  top: 95px;
  left: 0;
`;

const StyledPressChart = styled.div`
  position: absolute;
  z-index: 999;
  top: 365px;
  left: 0;
`;

const Forecast = ({ data, charts }) => (
  <Wrapper>
    <StyledTempChart>
      <LineChart
        width={2880}
        height={110}
        data={charts.temp}
        margin={{
          top: 5,
          right: 30,
          left: -30,
          bottom: 5,
        }}
        stackOffset="sign"
      >
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#fddb5d"
          label={<CustomizedLabel temp />}
          strokeWidth={1.5}
          dot={{ r: 4, stroke: 'black' }}
        />
        <YAxis type="number" domain={[-40, 40]} hide/>
      </LineChart>
    </StyledTempChart>
    <StyledPressChart>
      <LineChart
        width={2880}
        height={100}
        data={charts.pressure}
        margin={{
          top: 25,
          right: 30,
          left: 30,
          bottom: 10,
        }}
      >
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#000"
          label={<CustomizedLabel />}
          strokeWidth={1.5}
          dot={{ r: 4 }}
        />
      </LineChart>
    </StyledPressChart>
    {data.map((item) => (
      <SingleForecast data={item} key={item.ts} maxRain={charts.maxRain} />
    ))}
  </Wrapper>
);

export default Forecast;

Forecast.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  charts: PropTypes.shape({
    maxRain: PropTypes.number,
    minTemp: PropTypes.number,
    maxTemp: PropTypes.number,
    temp: PropTypes.arrayOf(PropTypes.object),
  }),
};
Forecast.defaultProps = {
  data: [],
  charts: {
    maxRain: null,
    minTemp: null,
    maxTemp: null,
    temp: [],
  },
};
