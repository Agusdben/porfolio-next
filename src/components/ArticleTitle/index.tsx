import { colors } from '@/styles/theme'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const ArticleTitle = ({ children }: Props) => {
  return (
    <>
      <h3>{children}</h3>
      <style jsx>{`
        h3 {
          text-transform: uppercase;
          font-size: 1.3em;
          color: ${colors.primary};
          margin: 1rem 0;
        }
        }
      `}</style>
    </>
  )
}

export default ArticleTitle
