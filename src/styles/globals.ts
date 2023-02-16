import css from 'styled-jsx/css'
import { breakPoints, colors, fonts, headerConfig } from './theme'

export default css.global`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  html {
    --scroll-behavior: smooth !important; /** because in nextjs smooth not working without !important */
    scroll-behavior: smooth !important;
    scroll-padding-top: 75px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    display: block;
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 400;
    font-family: ${fonts.base};
    color: ${colors.white};
    background-color: ${colors.black};
    overflow-x: hidden;
  }

  .app {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }

  main {
    flex: 1;
    padding: 0 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: auto;
  }

  body::-webkit-scrollbar {
    width: 5px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${colors.primary};
  }

  @media (min-width: ${breakPoints.desktop}) {
    html {
      scroll-padding-top: 0;
    }
    main,
    .app > :global(footer) {
      width: calc(100vw - ${headerConfig.desktop.width});
      margin-left: ${headerConfig.desktop.width};
    }
  }
`
