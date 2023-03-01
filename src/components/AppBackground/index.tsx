import { colors } from '@/styles/theme'

const AppBackground = () => {
  return (
    <>
      <div className='bg' />
      <style jsx>{`
        .bg {
          position: fixed;
          z-index: -10;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: 300% 300%;
          filter: brightness(85%);
          background-image: linear-gradient(
            -45deg,
            ${colors.black} 0%,
            ${colors.secondary} 100%
          );

          animation: AnimateBG 10s ease-out infinite;
        }

        @keyframes AnimateBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  )
}

export default AppBackground
