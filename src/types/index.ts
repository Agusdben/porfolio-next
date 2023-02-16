export enum Skills {
  HTML5 = 'HTML5',
  CSS3 = 'CSS3',
  JAVA_SCRIPT = 'JavaScript',
  TYPE_SCRIPT = 'TypeScript',
  TAILWINDCSS = 'Tailwindcss',
  REACTJS = 'ReactJS',
  NODE = 'NodeJS',
  EXPRESS = 'ExpressJS',
  MONGODB = 'MongoDB',
  MYSQL = 'MySQL',
  GIT = 'Git',
  GITHUB = 'GitHub',
  API_REST = 'Api REST'
}

export enum FormFields {
  name = 'name',
  email = 'email',
  subject = 'subject',
  message = 'message'
}

export enum SendingStatuses {
  loading = 'loading',
  error = 'error',
  success = 'success'
}

export interface Navbar {
  [key: string]: string
}

export interface Url {
  type: string
  url: string
}

export interface SoftSkill {
  type: string
  image: string
  description: string
}

export interface TechSkill {
  type: string
  logo: string
  level: string
}

export interface Project {
  title: string
  description: string
  images: string[]
  url: string
  repositories: Url[]
  skills: TechSkill[]
}

export interface Footer {
  createdBy: string
}

export interface ContactFormFields {
  error: string
  placeholder: string
}

export type ContactForm = {
  fields: {
    [key in FormFields]: ContactFormFields
  }
  button: string
  sendingStatus: { [key in SendingStatuses]: string }
}

export interface Content {
  navbar: Navbar
  presentation: string
  resume: string
  softSkills: SoftSkill[]
  skills: TechSkill[]
  projects: Project[]
  footer: Footer
  contactForm: ContactForm
}
