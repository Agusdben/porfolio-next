import AboutMe from '@/components/AboutMe'
import AppLayout from '@/components/AppLayout'
import Contact from '@/components/Contact'
import Presentation from '@/components/Presentation'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home () {
  return (
    <AppLayout>
      <Presentation />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </AppLayout>
  )
}
