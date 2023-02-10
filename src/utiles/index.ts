import { TechSkill } from '@/types'

export const importNavbar = ({ locale }: { locale: string }) => {
  return import(`../locales/${locale}/navbar.ts`).then(res => res.default)
}

export const importPresentation = ({ locale }: { locale: string }) => {
  return import(`../locales/${locale}/presentation.ts`).then(res => res.default)
}

export const importResume = ({ locale }: { locale: string }) => {
  return import(`../locales/${locale}/resume.ts`).then(res => res.default)
}

export const importSoftSkills = ({ locale }: { locale: string }) => {
  return import(`../locales/${locale}/softSkills.ts`).then(res => res.default)
}

export const importSkills = ({
  locale
}: {
  locale: string
}): Promise<{ [key: string]: TechSkill }> => {
  return import(`../locales/${locale}/skills.ts`).then(res => res.default)
}

export const importProjects = ({ locale }: { locale: string }) => {
  return import(`../locales/${locale}/projects.ts`).then(res => res.default)
}

export const importFooter = ({ locale }: { locale: string }) => {
  return import(`../locales/${locale}/footer.ts`).then(res => res.default)
}
