import React from 'react';
import styled from 'styled-components';

const fieldsNames = [
  {
    id: 'day',
    name: 'Dzień',
  },
  {
    id: 'time',
    name: 'Godzina',
  },
  {
    id: 'forecast',
    name: 'Prognoza',
  },
  {
    id: 'temperature',
    name: 'Temperatura',
  },
  {
    id: 'rain',
    name: 'Opady',
  },
  {
    id: 'windDirection',
    name: 'Kierunek Wiartu',
  },
  {
    id: 'windSpeed',
    name: 'Prędkość Wiatru',
  },
  {
    id: 'pressure',
    name: 'Ciśnienie',
  },
];

const Wrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 70px;
  font-size: 11px;
  border-right: 1px solid ${({ theme }) => theme.grey100};
  color: ${({ theme }) => theme.grey300};
`;
const ShadowWrapperLeft = styled.div`
  position: absolute;
  z-index: 2999;
  top: 0;
  left: 70px;
  height: 100%;
  width: 20px;
  box-shadow: inset 10px 0px 8px -2px rgba(0,0,0,0.11);
  pointer-events: none;
`;



const InnerWrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2px;
  border-bottom: 1px solid ${({ theme }) => theme.grey100};
  height: ${({ theme, name }) => theme.height[name]};
`;
const InfoBar = () => (
  <>
    <Wrapper>
      {fieldsNames.map(({ id, name }) => (
        <InnerWrapper name={id} key={id}>
          <span>{name}</span>
        </InnerWrapper>
      ))}
    </Wrapper>
    <ShadowWrapperLeft />
  </>
);

export default InfoBar;
