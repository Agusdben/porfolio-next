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

export interface SvgProps {
  fill?: string
  stroke?: string
  width: number
  height: number
}

export interface Url {
  type: string
  url: string
}

export interface Skill {
  type: Skills
  logo: string
}

export interface TechSkill extends Skill {
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

export interface Contact extends Url {
  icon: string
}
