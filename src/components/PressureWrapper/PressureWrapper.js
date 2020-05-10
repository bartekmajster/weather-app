import styled from 'styled-components';

const PressureWrapper = styled.div`
  height: ${({ theme }) => theme.height.pressure};
  border-left: 1px solid ${({ theme }) => theme.grey100};
`;

export default PressureWrapper;
