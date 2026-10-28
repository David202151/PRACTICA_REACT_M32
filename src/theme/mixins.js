import { css } from 'styled-components';

const gridSection = css`
  margin-bottom: 34px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 16px;
  align-items: start;

  h2 {
    grid-column: 1 / -1;
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: ${({ theme }) => theme.colors.amber};
    border-left: 3px solid ${({ theme }) => theme.colors.accent};
    padding-left: 12px;
    margin-bottom: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const navButton = css`
  display: inline-block;
  margin-top: 8px;
  padding: 12px 24px;
  font-size: 0.92rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radius.pill};
  text-decoration: none;
  transition: background 0.18s ease, transform 0.12s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accentDark};
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${({ theme }) => theme.ring};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    text-align: center;
  }
`;

const statusBox = css`
  grid-column: 1 / -1;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px dashed ${({ theme, $error }) => ($error ? theme.colors.accent : theme.colors.borderHi)};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 28px 20px;
  text-align: center;
  color: ${({ theme, $error }) => ($error ? theme.colors.text : theme.colors.textDim)};
  font-size: 0.95rem;

  p {
    margin-bottom: 14px;
    color: ${({ theme, $error }) => ($error ? theme.colors.accent : theme.colors.textDim)};
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export { gridSection, navButton, statusBox };
