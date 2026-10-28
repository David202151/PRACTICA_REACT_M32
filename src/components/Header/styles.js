import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 26px 32px;
  margin-bottom: 26px;
  text-align: center;
  backdrop-filter: blur(6px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px 18px;
  }
`;

const Title = styled.h1`
  font-size: clamp(1.7rem, 4vw, 2.4rem);
  letter-spacing: 0.5px;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.amber});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export { HeaderContainer, Title };
