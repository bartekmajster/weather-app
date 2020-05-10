import React, { useEffect } from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchedDataAction } from '../actions';
import InfoBar from '../components/InfoBar/InfoBar';
import Forecast from '../components/Forecast/Forecast';
import Carousel from '../components/Carousel/Carousel';

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  margin: 15px;
`;

const InnerWrapper = styled.div`
  width: 720px;
  overflow: hidden;
  transform: translateX(-1px);
`;

const Root = ({ data, chartsData, fetchedData }) => {
  useEffect(() => {
    fetchedData();
  }, []);

  const setting = {
    dragSpeed: 1.25,
    itemWidth: 60,
    itemHeight: 260,
    itemSideOffsets: 15,
  };

  const ShadowWrapperRight = styled.div`
    position: absolute;
    z-index: 2999;
    top: 0;
    right: 0;
    height: 100%;
    width: 30px;
    box-shadow: inset -20px 0px 31px -4px rgba(255, 255, 255, 0.69);
  `;

  return (
    <>
      <Wrapper>
        <InfoBar />
        <InnerWrapper>
          <Carousel _data={data} {...setting}>
            <Forecast data={data} charts={chartsData} />
          </Carousel>
          <ShadowWrapperRight />
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
  chartsData: state.chartsData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchedData: () => dispatch(fetchedDataAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);

Root.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  chartsData: PropTypes.shape({
    maxRain: PropTypes.number,
    minTemp: PropTypes.number,
    maxTemp: PropTypes.number,
    temp: PropTypes.arrayOf(PropTypes.object),
  }),
  fetchedData: PropTypes.func.isRequired,
};
Root.defaultProps = {
  data: [],
  chartsData: {
    maxRain: null,
    minTemp: null,
    maxTemp: null,
    temp: [],
  },
};
