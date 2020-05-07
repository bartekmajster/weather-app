import React from 'react';
import styled, { css } from 'styled-components';

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

const InnerWrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2px;
  border-bottom: 1px solid ${({ theme }) => theme.grey100};

  ${({ name }) => {
    switch (name) {
      case 'day':
        return css`
          height: 16px;
        `;
      case 'time':
        return css`
          height: 30px;
        `;
      case 'forecast':
        return css`
          height: 35px;
        `;
      case 'temperature':
        return css`
          height: 110px;
        `;
      case 'rain':
        return css`
          height: 60px;
        `;
      case 'windDirection':
        return css`
          height: 60px;
        `;
      case 'windSpeed':
        return css`
          height: 50px;
        `;
      case 'pressure':
        return css`
          height: 100px;
          border-bottom: 0;
        `;
      default:
        return null;
    }
  }}
`;
const InfoBar = () => (
  <Wrapper>
    {fieldsNames.map(({ id, name }) => (
      <InnerWrapper name={id} key={id}>
        <span>{name}</span>
      </InnerWrapper>
    ))}
  </Wrapper>
);

export default InfoBar;
