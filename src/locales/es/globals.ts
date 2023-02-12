import { Content } from '@/types'
import FOOTER from './footer'
import NAVBAR from './navbar'
import PRESENTATION from './presentation'
import PROJECTS from './projects'
import RESUME from './resume'
import SKILLS from './skills'
import SOFT_SKILLS from './softSkills'

const GLOBAL: Content = {
  footer: FOOTER,
  navbar: NAVBAR,
  presentation: PRESENTATION,
  projects: PROJECTS,
  resume: RESUME,
  skills: Object.values(SKILLS),
  softSkills: SOFT_SKILLS
}

export default GLOBAL
