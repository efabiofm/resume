import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const headerText = {
  name: 'Fabio Flores Manrique',
  profession: 'Software Engineer',
  description: 'Full-Stack Web Developer with 9 years of experience building web and hybrid apps for many different industries. Critical thinking with self-motivation, adaptability, problem-solving and fast learning skills.'
};

export const contactItems = [
  {
    icon: faEnvelope,
    value: 'efabiofm@gmail.com'
  },
  {
    icon: faPhone,
    value: '(+506) 7015-4077'
  },
  {
    icon: faMapMarkerAlt,
    value: 'San José, Costa Rica'
  },
  {
    icon: faLinkedin,
    value: 'linkedin.com/in/efabiofm'
  }
];

export const educationItems = [
  {
    from: 'Jan. 2014',
    to: 'Dic. 2020',
    institute: 'Universidad Cenfotec',
    degree: 'Bachelor\'s in Software Engineering'
  },
  {
    from: 'Jan. 2011',
    to: 'Dec. 2012',
    institute: 'Universidad Técnica Nacional',
    degree: 'Associate\'s in Electronics'
  }
];

export const languagesItems = [
  {
    language: 'English',
    level: 'C1 BELT Standard February 2019',
    percentage: 85
  },
  {
    language: 'Spanish',
    level: 'Native speaker',
    percentage: 100
  }
];

export const experienceItems = [
  {
    from: 'Sep. 2021',
    to: 'To Date',
    company: 'Keeper Solutions',
    position: 'Front-End Developer',
    description: [
      'Developed a new product with Nuxt, TypeScript, Node and MongoDB from scratch for clients to build and publish custom websites online. Worked on main features such as responsive templates creation, image and video uploading, text editing and site previewing and publishing.'
    ]
  },
  {
    from: 'Mar. 2021',
    to: 'Sep. 2021',
    company: 'Cecropia Solutions',
    position: 'Front-End Developer',
    description: [
      'Worked on company\'s internal product built in Angular 9 that was used to post ads on their website and manage applicants information.',
      'Worked on UI and performance improvements and implementing different charts to display data coming from machine learning based services.',
      'Worked with ShipEngine on a product that connects shipping services with e-commerce platforms.'
    ]
  },
  {
    from: 'Feb. 2019',
    to: 'Sep. 2020',
    company: 'Gorilla Logic LLC',
    position: 'Full-Stack Developer',
    description: [
      'Worked on a cloud-based platform built in Vue, Node and MongoDB for IT departments to manage users and devices remotely.',
      'Developed an admin dashboard with React, Redux and AWS that was used to manage multiple nursing homes information.',
      'Created landing pages with lead generation forms using vanilla JavaScript and Google Tag Manager for A/B testing.'
    ]
  },
  {
    from: 'Sep. 2015',
    to: 'Feb. 2019',
    company: 'Ciris Informatic Solutions',
    position: 'Full-Stack Developer',
    description: [
      'Developed several web and mobile applications from scratch using Vue, Angular, Node, Express, Ionic, NativeScript-Vue, MongoDB and Firebase for multiple industries such as Health, Food, Materials, Media, Business Support and Wildlife Protection.',
      'Setup NGNIX web servers, register domains and implement continuous integration and delivery on GitLab for production deployments.',
      'Contributed with improvements of company\'s codebase and implemented new tech on projects.',
      'Meet clients in-situ for requirements gathering and design frontend and backend architecture for each project.'
    ]
  },
  // {
  //   from: 'Oct. 2014',
  //   to: 'Sep. 2015',
  //   company: 'Sykes Latin America',
  //   position: 'Customer Service Agent',
  //   description: ''
  // },
  // {
  //   from: 'Jan. 2013',
  //   to: 'Apr. 2014',
  //   company: 'Ingram Micro CR',
  //   position: 'Electronic Technician',
  //   description: ''
  // }
];

export const projectItems = [
  {
    name: 'Harvest',
    date: '(07/2021 - To Date)',
    description: [
      'Page builder application built in Nuxt.js, Node.js and MongoDB'
    ]
  },
  {
    name: 'JumpCloud',
    date: '(07/2020 - 10/2020)',
    description: [
      'Admin portal built in Vue.js, Node.js, Golang and MongoDB.'
    ]
  },
  {
    name: 'UACFel',
    date: '(11/2018 – 06/2019)',
    description: [
      'Progressive Web App built in Vue.js, Node.js and MongoDB'
    ]
  },
  {
    name: 'Agrotico',
    date: '(07/2017 – 07/2018)',
    description: [
      'Hybrid application built in Vue.js, Cordova, Node.js and MongoDB'
    ]
  },
  {
    name: 'FireLab Aries',
    date: '(12/2015 – 12/2017)',
    description: [
      'Hybrid and Web application built in Ionic, AngularJS, Node.js, Firebase and MongoDB'
    ]
  }
]

export const skillsItems = [
  'JavaScript',
  'Node',
  'Express',
  'Vue',
  'React',
  'Redux',
  'Angular',
  'TypeScript',
  'MongoDB',
  'HTML',
  'CSS',
  'SCSS',
  'Tailwind',
  'PWA',
  'NativeScript',
  'Git',
  'Ionic',
  'NPM',
  'AWS',
  'Firebase',
  'CD/CI',
  'Java',
  'Jest',
  'Linux',
  'REST',
  'SQL',
  'Svelte'
];
