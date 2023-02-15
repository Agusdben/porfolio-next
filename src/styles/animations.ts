import css from 'styled-jsx/css'

export const animations = {
  toLeft: 'toLeft',
  toRight: 'toRight',
  morphingBorder: 'morphingBorder',
  fallAndBounce: 'fallAndBounce',
  appear: 'appear'
}

export default css.global`
  @keyframes ${animations.appear} {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes ${animations.toLeft} {
    0% {
      transform: translate(100%);
    }
    100% {
      transform: translate(0px);
    }
  }

  @keyframes ${animations.toRight} {
    0% {
      transform: translate(-100%);
    }
    100% {
      transform: translate(0px);
    }
  }

  @keyframes ${animations.morphingBorder} {
    0%,
    100% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
    }
    25% {
      border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
      box-shadow: -10px -5px 50px rgba(0, 0, 0, 0.2);
    }
    75% {
      border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
    }
  }

  @keyframes ${animations.fallAndBounce} {
    0% {
      transform: translate(0px, -50px);
    }
    50% {
      transform: translate(0px, 0px);
    }
    75% {
      transform: translate(0px, -15px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
`
