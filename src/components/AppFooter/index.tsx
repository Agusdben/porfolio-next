import CONTACT from '@/constants/contact'
import useContent from '@/hooks/useContent'
import { colors } from '@/styles/theme'
import Link from 'next/link'
import React from 'react'
import { DiGithub, DiGithubAlt, DiGithubBadge } from 'react-icons/di'
import { FaLinkedin } from 'react-icons/fa'

const AppFooter = () => {
  const { footer } = useContent()
  return (
    <>
      <footer>
        <section>
          <p>
            {footer.createdBy}{' '}
            <span className='creator'>Agustin Di Benedetto</span>
          </p>
        </section>
        <section className='links'>
          <Link href={CONTACT.github} rel='noopener noreferrer' target='_blank'>
            <DiGithubBadge />
          </Link>
          <Link
            href={CONTACT.linkedin}
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaLinkedin />
          </Link>
        </section>
      </footer>
      <style jsx>{`
        footer {
          background: ${colors.black};
          display: flex;
          padding: 1rem;
          align-items: center;
          flex-direction: column;
        }
        .creator {
          color: ${colors.primary};
        }
        .links {
          display: flex;
          gap: 1rem;
        }
        .links > :global(a) > :global(svg) {
          font-size: 1.3rem;
          color: ${colors.white};
        }
        .links > :global(a) > :global(svg):hover {
          color: ${colors.primary};
        }
      `}</style>
    </>
  )
}

export default AppFooter
