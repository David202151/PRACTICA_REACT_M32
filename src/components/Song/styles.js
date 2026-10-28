import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.article`
  background: ${({ theme, $detail }) => ($detail ? theme.colors.surfaceHi : theme.colors.surface)};
  border: 1px solid ${({ theme, $detail }) => ($detail ? theme.colors.borderHi : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ $detail }) => ($detail ? '28px' : '18px')};
  display: flex;
  flex-direction: column;
  gap: ${({ $detail }) => ($detail ? '10px' : '6px')};
  height: 100%;
  width: ${({ $detail }) => ($detail ? '100%' : 'auto')};
  box-shadow: ${({ theme, $detail }) => ($detail ? theme.shadow : 'none')};
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease,
              background 0.18s ease;

  &:hover {
    transform: ${({ $detail }) => ($detail ? 'none' : 'translateY(-3px)')};
    background: ${({ theme }) => theme.colors.surfaceHi};
    border-color: ${({ theme }) => theme.colors.borderHi};
    box-shadow: ${({ theme }) => theme.shadow};
  }

  button {
    margin-top: auto;
    padding: 10px 14px;
    font-size: 0.85rem;
    border-radius: ${({ theme }) => theme.radius.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    button {
      width: 100%;
    }
  }

  ${({ $detail }) =>
    $detail &&
    css`
      h3 {
        font-size: 1.6rem;
        line-height: 1.25;
      }

      p {
        font-size: 0.98rem;
      }
    `}
`;

const Title = styled.h3`
  font-size: 1.05rem;
  line-height: 1.3;
  margin-bottom: 4px;
`;

const TitleLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: color 0.16s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.amber};
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  &:focus-visible {
    outline: none;
    color: ${({ theme }) => theme.colors.amber};
    box-shadow: ${({ theme }) => theme.ring};
    border-radius: 4px;
  }
`;

const Info = styled.p`
  color: ${({ theme }) => theme.colors.textDim};
  font-size: 0.88rem;
`;

export { Card, Title, TitleLink, Info };
