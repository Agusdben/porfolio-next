import { Skills, TechSkill } from '@/types'

const SKILLS: { [key in Skills]: TechSkill } = {
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
  JavaScript: {
    type: Skills.JAVA_SCRIPT,
    level: 'Alto',
    logo: '/logos/javascript.png'
  },
  TypeScript: {
    type: Skills.TYPE_SCRIPT,
    level: 'Medio',
    logo: '/logos/typescript.png'
  },
  Tailwindcss: {
    type: Skills.TAILWINDCSS,
    level: 'Alto',
    logo: '/logos/tailwindcss.png'
  },
  ReactJS: {
    type: Skills.REACTJS,
    level: 'Alto',
    logo: '/logos/reactjs.png'
  },
  NodeJS: {
    type: Skills.NODE,
    level: 'Medio',
    logo: '/logos/nodejs.png'
  },
  ExpressJS: {
    type: Skills.EXPRESS,
    level: 'Básico',
    logo: '/logos/express.png'
  },
  MongoDB: {
    type: Skills.MONGODB,
    level: 'Básico',
    logo: '/logos/mongodb.png'
  },
  MySQL: {
    type: Skills.MYSQL,
    level: 'Medio',
    logo: '/logos/mysql.png'
  },
  Git: {
    type: Skills.GIT,
    level: 'Medio',
    logo: '/logos/git.png'
  },
  GitHub: {
    type: Skills.GITHUB,
    level: 'Medio',
    logo: '/logos/github.png'
  },
  'Api REST': {
    type: Skills.API_REST,
    level: 'Medio',
    logo: '/logos/apirest.png'
  }
}

export default SKILLS
