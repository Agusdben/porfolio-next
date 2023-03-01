import { Project } from '@/types'
import SKILLS from './skills'

const PROJECTS: Project[] = [
  {
    title: 'ToDo List',
    description:
      'Web application made with Reactjs, where I create an API with Nodejs, Express and MongoDB to register users and perform CRUD operations on tasks.',
    images: [
      'todo-list/todos_add.png',
      'todo-list/todos_black.png',
      'todo-list/todos_white.png'
    ],
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
      'Web application that uses the public GIPHY API, where you can search for GIFs, add them to favorites, view your last search, and more.',
    images: [
      'fakegiphy/fakegiphy_home.png',
      'fakegiphy/fakegiphy_search.png',
      'fakegiphy/fakegiphy_gif.png'
    ],
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
    title: 'Hangman',
    description:
      'Hangman game. You can choose to play with hints or let the poor man die!',
    images: [
      'hangman/hangman-index.jpg',
      'hangman/hangman-play.jpg',
      'hangman/hangman-tries.jpg'
    ],
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
      'Game with 12 levels where you have to escape from different mazes.',
    images: [
      'easy-maze/easy-maze-menu.jpg',
      'easy-maze/easy-maze-levels.jpg',
      'easy-maze/easy-maze-options.jpg'
    ],
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
    title: 'QR Generator',
    description: 'Site that allows you to generate a QR image from a text.',
    images: ['qr-generator/qr-generator-1.jpg'],
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
    title: 'Rock paper scissors',
    description: '',
    images: [
      'rock-paper-scissors/rps-index.jpg',
      'rock-paper-scissors/rps-win.jpg',
      'rock-paper-scissors/rps-draw.jpg',
      'rock-paper-scissors/rps-lose.jpg'
    ],
    skills: [SKILLS.JAVA_SCRIPT, SKILLS.CSS3, SKILLS.HTML5],
    url: 'https://rockpaperscissorsplay.netlify.app/',
    repositories: [
      {
        type: 'Frontend',
        url: 'https://github.com/Agusdben/rock-paper-scissors'
      }
    ]
  },
  {
    title: 'Simon Says',
    description: 'Developed with vanilla JavaScript.',
    images: ['simon-says/simon-says-1.jpg'],
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
    description: 'Small project to learn TypeScript with React.',
    images: ['tasky/tasky-index.jpg', 'tasky/tasky-task.jpg'],
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
