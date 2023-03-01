import RESUME from '@/locales/es/resume'
import NAVBAR from '@/locales/es/navbar'
import PRESENTATION from '@/locales/es/presentation'
import { Content } from '@/types'
import SOFT_SKILLS from '@/locales/es/softSkills'
import SKILLS from '@/locales/es/skills'
import PROJECTS from '@/locales/es/projects'
import FOOTER from '@/locales/es/footer'
import CONTACT_FORM from '@/locales/es/contactForm'

export const CONTENT_INITIAL_STATE: Content = {
  navbar: NAVBAR,
  presentation: PRESENTATION,
  resume: RESUME,
  softSkills: SOFT_SKILLS,
  skills: Object.values({ ...SKILLS }),
  projects: PROJECTS,
  footer: FOOTER,
  contactForm: CONTACT_FORM
}
