import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchedDataAction } from '../actions';
import InfoBar from '../components/InfoBar/InfoBar';
import SingleForecast from '../components/SingleForecast/SigleForecast';

const Wrapper = styled.div`
  position: relative;
  margin: 15px;
  height: 470px;
  display: flex;
`;

const ForecastWrapper = styled.div`
  box-shadow: inset 31px 0px 17px -32px rgba(0, 0, 0, 0.18);
  position: absolute;
  display: flex;
  left: 70px;
  width: calc(85px * 48);
  top: 0;
  height: 100%;
`;

const Root = ({ data, maxRain, fetchedData }) => {
  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <Wrapper>
      <InfoBar />
      <ForecastWrapper>
        {data.map((item) => (
          <SingleForecast data={item} key={item.ts} maxRain={maxRain} />
        ))}
      </ForecastWrapper>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  maxRain: state.maxRain,
});

const mapDispatchToProps = (dispatch) => ({
  fetchedData: () => dispatch(fetchedDataAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);

Root.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  maxRain: PropTypes.number.isRequired,
  fetchedData: PropTypes.func.isRequired,
};
Root.defaultProps = {
  data: [],
};

/*<div>
  <p>{item.timestamp_utc}</p>
  <p>{item.weather.icon}</p>
  <p>{item.temp}</p>
  <p>{item.precip}</p>
  <p>{item.wind_dir}</p>
  <p>{item.wind_spd}</p>
  <p>{item.pres}</p>
</div>*/
