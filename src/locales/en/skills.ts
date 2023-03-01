import { Skills, TechSkill } from '@/types'

const SKILLS: { [key in Skills]: TechSkill } = {
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
  JavaScript: {
    type: Skills.JAVA_SCRIPT,
    level: 'High',
    logo: '/logos/javascript.png'
  },
  TypeScript: {
    type: Skills.TYPE_SCRIPT,
    level: 'Medium',
    logo: '/logos/typescript.png'
  },
  Tailwindcss: {
    type: Skills.TAILWINDCSS,
    level: 'High',
    logo: '/logos/tailwindcss.png'
  },
  ReactJS: {
    type: Skills.REACTJS,
    level: 'High',
    logo: '/logos/reactjs.png'
  },
  NodeJS: {
    type: Skills.NODE,
    level: 'Medium',
    logo: '/logos/nodejs.png'
  },
  ExpressJS: {
    type: Skills.EXPRESS,
    level: 'Basic',
    logo: '/logos/express.png'
  },
  MongoDB: {
    type: Skills.MONGODB,
    level: 'Basic',
    logo: '/logos/mongodb.png'
  },
  MySQL: {
    type: Skills.MYSQL,
    level: 'Medium',
    logo: '/logos/mysql.png'
  },
  Git: {
    type: Skills.GIT,
    level: 'Medium',
    logo: '/logos/git.png'
  },
  GitHub: {
    type: Skills.GITHUB,
    level: 'Medium',
    logo: '/logos/github.png'
  },
  'Api REST': {
    type: Skills.API_REST,
    level: 'Medium',
    logo: '/logos/apirest.png'
  }
}

export default SKILLS
