import { Project } from '@/types'
import SKILLS from './skills'

const PROJECTS: Project[] = [
  {
    title: 'Lista ToDo',
    description:
      'Aplicación web realizada con ReactJS, donde creo una api con Nodejs, express y mongoDB para poder registrar usuarios y hacer un CRUD de tareas.',
    images: [
      'todo-list/todos_add.png',
      'todo-list/todos_black.png',
      'todo-list/todos_white.png'
    ],
    skills: [
      SKILLS.MongoDB,
      SKILLS.ExpressJS,
      SKILLS.ReactJS,
      SKILLS.NodeJS,
      SKILLS.CSS3,
      SKILLS['Api REST']
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
    images: [
      'fakegiphy/fakegiphy_home.png',
      'fakegiphy/fakegiphy_search.png',
      'fakegiphy/fakegiphy_gif.png'
    ],
    skills: [SKILLS.ReactJS, SKILLS.CSS3, SKILLS['Api REST']],
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
    images: [
      'hangman/hangman-index.jpg',
      'hangman/hangman-play.jpg',
      'hangman/hangman-tries.jpg'
    ],
    skills: [SKILLS.ReactJS, SKILLS.Tailwindcss],
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
    images: [
      'easy-maze/easy-maze-menu.jpg',
      'easy-maze/easy-maze-levels.jpg',
      'easy-maze/easy-maze-options.jpg'
    ],
    skills: [SKILLS.ReactJS, SKILLS.Tailwindcss, SKILLS.TypeScript],
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
    images: ['qr-generator/qr-generator-1.jpg'],
    skills: [SKILLS.JavaScript, SKILLS.CSS3, SKILLS.HTML5],
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
    images: [
      'rock-paper-scissors/rps-index.jpg',
      'rock-paper-scissors/rps-win.jpg',
      'rock-paper-scissors/rps-draw.jpg',
      'rock-paper-scissors/rps-lose.jpg'
    ],
    skills: [SKILLS.JavaScript, SKILLS.CSS3, SKILLS.HTML5],
    url: 'https://rockpaperscissorsplay.netlify.app/',
    repositories: [
      {
        type: 'Frontend',
        url: 'https://github.com/Agusdben/rock-paper-scissors'
      }
    ]
  },
  {
    title: 'Simon Dice',
    description: 'Desarrollado con javascript vanilla.',
    images: ['simon-says/simon-says-1.jpg'],
    skills: [SKILLS.JavaScript, SKILLS.CSS3, SKILLS.HTML5],
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
    images: ['tasky/tasky-index.jpg', 'tasky/tasky-task.jpg'],
    skills: [SKILLS.TypeScript, SKILLS.ReactJS, SKILLS.Tailwindcss],
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
