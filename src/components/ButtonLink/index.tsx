import { colors } from '@/styles/theme'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  href: string
  children: React.ReactNode
  target?: string
  rel?: string
}

const ButtonLink = ({ href, children, target, rel }: Props) => {
  const { locale } = useRouter()
  return (
    <span>
      <Link href={href} target={target} rel={rel} locale={locale}>
        {children}
      </Link>
      <style jsx>{`
        span > :global(a) {
          color: ${colors.white};
          border-radius: 4px;
          border: 1px solid ${colors.tertiary};
          padding: 8px 12px;
          gap: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        span > :global(a):hover {
          transition: background-color 200ms;
          background-color: ${colors.tertiary};
        }
      `}</style>
    </span>
  )
}

export default ButtonLink
