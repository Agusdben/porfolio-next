import AppLayout from '@/components/AppLayout'
import Projects from '@/components/Projects'
import { Project } from '@/types'
import { GetStaticProps } from 'next'

interface Props {
  navbar: { [key: string]: string }
  projects: Project[]
}

export default function Home ({ navbar, projects }: Props) {
  return (
    <AppLayout>
      <Projects projects={projects} title={navbar.projects} />
    </AppLayout>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const { locale } = context
  const localeToUse = locale || 'es'

  const projects = await import(`../locales/${localeToUse}/projects.ts`)
  const navbar = await import(`../locales/${localeToUse}/navbar.ts`)

  return {
    props: {
      projects: projects.default,
      navbar: navbar.default
    }
  }
}
