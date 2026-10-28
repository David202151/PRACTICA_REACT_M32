import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 28px 20px 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 18px 14px 48px;
  }
`;

export { AppContainer };
