import css from 'styled-jsx/css'

export const animations = { toLeft: 'toLeft' }

export default css.global`
  @keyframes ${animations.toLeft} {
    0% {
      opacity: 0.75;
      transform: translate(50px);
    }
    100% {
      opacity: 1;
      transform: translate(0px);
    }
  }
`
