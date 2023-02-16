import { Skills, TechSkill } from '@/types'

const SKILLS: { [key: string]: TechSkill } = {
  HTML5: {
    type: Skills.HTML5,
    level: 'High',
    logo: '/logos/html5.png'
  },
  CSS3: {
    type: Skills.CSS3,
    level: 'High',
    logo: '/logos/css3.png'
  },
  JAVA_SCRIPT: {
    type: Skills.JAVA_SCRIPT,
    level: 'High',
    logo: '/logos/javascript.png'
  },
  TYPE_SCRIPT: {
    type: Skills.TYPE_SCRIPT,
    level: 'Medium',
    logo: '/logos/typescript.png'
  },
  TAILWINDCSS: {
    type: Skills.TAILWINDCSS,
    level: 'High',
    logo: '/logos/tailwindcss.png'
  },
  REACTJS: {
    type: Skills.REACTJS,
    level: 'High',
    logo: '/logos/reactjs.png'
  },
  NODE: {
    type: Skills.NODE,
    level: 'Medium',
    logo: '/logos/nodejs.png'
  },
  EXPRESS: {
    type: Skills.EXPRESS,
    level: 'Basic',
    logo: '/logos/express.png'
  },
  MONGODB: {
    type: Skills.MONGODB,
    level: 'Basic',
    logo: '/logos/mongodb.png'
  },
  MYSQL: {
    type: Skills.MYSQL,
    level: 'Medium',
    logo: '/logos/mysql.png'
  },
  GIT: {
    type: Skills.GIT,
    level: 'Medium',
    logo: '/logos/git.png'
  },
  GITHUB: {
    type: Skills.GITHUB,
    level: 'Medium',
    logo: '/logos/github.png'
  },
  API_REST: {
    type: Skills.API_REST,
    level: 'Medium',
    logo: '/logos/apirest.png'
  }
}

export default SKILLS
