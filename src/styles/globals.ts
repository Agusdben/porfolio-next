import css from 'styled-jsx/css'
import { colors, fonts } from './theme'

export default css.global`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 18px;
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
    flex-direction: column;
  }

  main {
    flex: 1;
  }
`
