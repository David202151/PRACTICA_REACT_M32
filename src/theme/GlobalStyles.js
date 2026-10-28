import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    background: linear-gradient(150deg, ${({ theme }) => theme.colors.bg1} 0%, ${({ theme }) => theme.colors.bg2} 50%, ${({ theme }) => theme.colors.bg3} 100%);
    background-attachment: fixed;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
  }

  button {
    font: inherit;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.accent};
    border: none;
    border-radius: ${({ theme }) => theme.radius.pill};
    padding: 12px 24px;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.18s ease, transform 0.12s ease;
  }

  button:hover {
    background: ${({ theme }) => theme.colors.accentDark};
  }

  button:active {
    transform: translateY(1px);
  }

  button:focus-visible {
    outline: none;
    box-shadow: ${({ theme }) => theme.ring};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    button {
      width: 100%;
      text-align: center;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyles;
