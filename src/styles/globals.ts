import css from 'styled-jsx/css'
import { colors, fonts } from './theme'

export default css.global`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
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
    border: none;
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
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: auto;
  }
`
