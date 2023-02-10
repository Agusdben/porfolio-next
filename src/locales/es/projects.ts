import { Project } from '@/types'
import SKILLS from './skills'

const PROJECTS: Project[] = [
  {
    title: 'Lista ToDo',
    description:
      'Aplicación web realizada con Reactjs, donde creo una api con Nodejs, express y mongoDB para poder registrar usuarios y hacer un CRUD de tareas.',
    images: [],
    skills: [
      SKILLS.MONGODB,
      SKILLS.EXPRESS,
      SKILLS.REACTJS,
      SKILLS.NODE,
      SKILLS.CSS3,
      SKILLS.API_REST
    ],
    url: 'https://mytodosmylife.netlify.app/',
    repositories: [
      {
        type: 'Frontend',
        url: 'https://github.com/Agusdben/Todos-frontend'
      },
      {
        type: 'Backend',
        url: 'https://github.com/Agusdben/Todos-backend'
      }
    ]
  },
  {
    title: 'Fake Giphy',
    description:
      'Aplicación web que utiliza la api pública GIPHY, donde puedes buscar gifs, agregarlos a favoritos, ver tu última búsqueda y más.',
    images: [],
    skills: [SKILLS.REACTJS, SKILLS.CSS3, SKILLS.API_REST],
    url: 'https://fakegiphy.netlify.app/',
    repositories: [
      {
        type: 'Frontend',
        url: 'https://github.com/Agusdben/fake-giphy'
      }
    ]
  },
  {
    title: 'Ahorcado',
    description:
      'El juego del ahorcado ¡Podrás elegir si jugar con pistas, o dejar morir al pobre hombre!',
    images: [],
    skills: [SKILLS.REACTJS, SKILLS.TAILWINDCSS],
    url: 'https://easyhangman.netlify.app/',
    repositories: [
      {
        type: 'Frontend',
        url: 'https://github.com/Agusdben/hangman-game'
      }
    ]
  },
  {
    title: 'Easy maze',
    description:
      'Juego que cuenta con 12 niveles, donde tienes que escapar de distintos laberintos.',
    images: [],
    skills: [SKILLS.REACTJS, SKILLS.TAILWINDCSS, SKILLS.TYPE_SCRIPT],
    url: 'https://easymaze.netlify.app/',
    repositories: [
      {
        type: 'Frontend',
        url: 'https://github.com/Agusdben/labyrinth-react-ts'
      }
    ]
  },
  {
    title: 'Generador QR',
    description: 'Sitio que te permite generar imagen QR a partir de un texto.',
    images: [],
    skills: [SKILLS.JAVA_SCRIPT, SKILLS.CSS3, SKILLS.HTML5],
    url: 'https://qrpngmaker.netlify.app/',
    repositories: [
      {
        type: 'Frontend',
        url: 'https://github.com/Agusdben/qr-generator'
      }
    ]
  },
  {
    title: 'Piedra papel ó tijeras',
    description: '',
    images: [],
    skills: [SKILLS.JAVA_SCRIPT, SKILLS.CSS3, SKILLS.HTML5],
    url: 'https://rockpaperscissorsplay.netlify.app/',
    repositories: [
      {
        type: '',
        url: 'https://github.com/Agusdben/rock-paper-scissors'
      }
    ]
  },
  {
    title: 'Simon Dice',
    description: 'Desarrollado con javascript vanilla.',
    images: [],
    skills: [SKILLS.JAVA_SCRIPT, SKILLS.CSS3, SKILLS.HTML5],
    url: 'https://simonalwayssays.netlify.app/',
    repositories: [
      {
        type: 'Frontend',
        url: 'https://github.com/Agusdben/simon-says'
      }
    ]
  },
  {
    title: 'Tasky',
    description: 'Proyecto pequeño para aprender TypeScript con React.',
    images: [],
    skills: [SKILLS.TYPE_SCRIPT, SKILLS.REACTJS, SKILLS.TAILWINDCSS],
    url: 'https://taskyts.netlify.app/',
    repositories: [
      {
        type: 'Frontend',
        url: 'https://github.com/Agusdben/tasks-ts'
      }
    ]
  }
]

export default PROJECTS
