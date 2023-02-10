import { Project } from '@/types'
import { SKILLS_ES } from './skills'

const PROJECTS: Project[] = [
  {
    title: 'ToDo List',
    description:
      'Aplicación web realizada con Reactjs, donde creo una api con Nodejs, express y mongoDB para poder registrar usuarios y hacer un CRUD de tareas.',
    images: [],
    skills: [
      SKILLS_ES.MONGODB,
      SKILLS_ES.EXPRESS,
      SKILLS_ES.REACTJS,
      SKILLS_ES.NODE,
      SKILLS_ES.CSS3,
      SKILLS_ES.API_REST
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
    skills: [SKILLS_ES.REACTJS, SKILLS_ES.CSS3, SKILLS_ES.API_REST],
    url: 'https://fakegiphy.netlify.app/',
    repositories: [
      {
        type: 'Frontend',
        url: 'https://github.com/Agusdben/fake-giphy'
      }
    ]
  },
  {
    title: 'Hangman',
    description:
      'El juego del ahorcado ¡Podrás elegir si jugar con pistas, o dejar morir al pobre hombre!',
    images: [],
    skills: [SKILLS_ES.REACTJS, SKILLS_ES.TAILWINDCSS],
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
    skills: [SKILLS_ES.REACTJS, SKILLS_ES.TAILWINDCSS, SKILLS_ES.TYPE_SCRIPT],
    url: 'https://easymaze.netlify.app/',
    repositories: [
      {
        type: 'Frontend',
        url: 'https://github.com/Agusdben/labyrinth-react-ts'
      }
    ]
  },
  {
    title: 'QR Generator',
    description: 'Sitio que te permite generar imagen QR a partir de un texto.',
    images: [],
    skills: [SKILLS_ES.JAVA_SCRIPT, SKILLS_ES.CSS3, SKILLS_ES.HTML5],
    url: 'https://qrpngmaker.netlify.app/',
    repositories: [
      {
        type: 'Frontend',
        url: 'https://github.com/Agusdben/qr-generator'
      }
    ]
  },
  {
    title: 'Rock papper scissors',
    description: '',
    images: [],
    skills: [SKILLS_ES.JAVA_SCRIPT, SKILLS_ES.CSS3, SKILLS_ES.HTML5],
    url: 'https://rockpaperscissorsplay.netlify.app/',
    repositories: [
      {
        type: '',
        url: 'https://github.com/Agusdben/rock-paper-scissors'
      }
    ]
  },
  {
    title: 'Simon Says',
    description: 'Desarrollado con javascript vanilla.',
    images: [],
    skills: [SKILLS_ES.JAVA_SCRIPT, SKILLS_ES.CSS3, SKILLS_ES.HTML5],
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
    skills: [SKILLS_ES.TYPE_SCRIPT, SKILLS_ES.REACTJS, SKILLS_ES.TAILWINDCSS],
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
