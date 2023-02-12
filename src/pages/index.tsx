import AppLayout from '@/components/AppLayout'
import Contact from '@/components/Contact'
import Presentation from '@/components/Presentation'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import SoftSkills from '@/components/SoftSkills'

export default function Home () {
  return (
    <AppLayout>
      <Presentation />
      <SoftSkills />
      <Skills />
      <Projects />
      <Contact />
    </AppLayout>
  )
}
