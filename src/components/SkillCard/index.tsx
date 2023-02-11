import { colors } from '@/styles/theme'
import { TechSkill } from '@/types'
import { addOpacityToColor } from '@/utiles'
import Image from 'next/image'
import React from 'react'

const SkillCard = ({ level, logo, type }: TechSkill) => {
  return (
    <>
      <div className='container'>
        <Image className='img' src={logo} alt={``} width={50} height={50} />
        <div className='text'>
          <h3>{type}</h3>
          <p>{level}</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          flex: 1;
          width: 18ch;
          padding: 12px;
          display: flex;
          flex-direction: column;
          text-align: center;
          align-items: center;
          border-radius: 6px;
          gap: 0.5rem;
          background: ${colors.secondary};
        }

        .container > :global(img) {
          object-fit: contain;
          padding: 6px;
          background-color: ${colors.tertiary};
          border-radius: 12px;
        }

        .text {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        h3 {
          color: ${colors.primary};
        }

        p,
        h3 {
          margin: 0;
        }
      `}</style>
    </>
  )
}

export default SkillCard
