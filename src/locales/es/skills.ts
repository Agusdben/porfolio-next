import { Skills, TechSkill } from '@/types'

const SKILLS: { [key: string]: TechSkill } = {
  HTML5: {
    type: Skills.HTML5,
    level: 'Alto',
    logo: '/logos/html5.png'
  },
  CSS3: {
    type: Skills.CSS3,
    level: 'Alto',
    logo: '/logos/css3.png'
  },
  JAVA_SCRIPT: {
    type: Skills.JAVA_SCRIPT,
    level: 'Alto',
    logo: '/logos/javascript.png'
  },
  TYPE_SCRIPT: {
    type: Skills.TYPE_SCRIPT,
    level: 'Medio',
    logo: '/logos/typescript.png'
  },
  TAILWINDCSS: {
    type: Skills.TAILWINDCSS,
    level: 'Alto',
    logo: '/logos/tailwindcss.png'
  },
  REACTJS: {
    type: Skills.REACTJS,
    level: 'Alto',
    logo: '/logos/reactjs.png'
  },
  NODE: {
    type: Skills.NODE,
    level: 'Medio',
    logo: '/logos/nodejs.png'
  },
  EXPRESS: {
    type: Skills.EXPRESS,
    level: 'Básico',
    logo: '/logos/express.png'
  },
  MONGODB: {
    type: Skills.MONGODB,
    level: 'Básico',
    logo: '/logos/mongodb.png'
  },
  MYSQL: {
    type: Skills.MYSQL,
    level: 'Medio',
    logo: '/logos/mysql.png'
  },
  GIT: {
    type: Skills.GIT,
    level: 'Medio',
    logo: '/logos/git.png'
  },
  GITHUB: {
    type: Skills.GITHUB,
    level: 'Básico',
    logo: '/logos/github.png'
  },
  API_REST: {
    type: Skills.API_REST,
    level: 'Básico',
    logo: '/logos/apirest.png'
  }
}

export default SKILLS
