import AppLayout from '@/components/AppLayout'
import Presentation from '@/components/Presentation'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home () {
  return (
    <AppLayout>
      <Presentation />
      <Skills />
      <Projects />
    </AppLayout>
  )
}
