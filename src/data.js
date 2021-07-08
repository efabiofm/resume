import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const headerText = {
  name: 'Fabio Flores Manrique',
  profession: 'Software Engineer',
  description: 'Full-Stack Web Developer with +5 years of experience building web and hybrid apps for many different industries. Critical thinking with self-motivation, adaptability, problem-solving and fast learning skills.'
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
    from: 'Set. 2020',
    to: 'To Date',
    company: 'Cecropia Solutions',
    position: 'Front-End Developer',
    description: [
      'Work on internal projects creating new views using Angular 9, code refactoring and styling improvements.',
      'Integrate shipping services with e-commerce platforms using ShipEngine.',
      'Read data created by machine learning algorithms to create plots, tables and other UI elements using Vue.js.'
    ],
    participation: {
      architectureAndDesign: '20%',
      development: '80%',
      qa: '0%',
      devOps: '0%'
    }
  },
  {
    from: 'Feb. 2019',
    to: 'Set. 2020',
    company: 'Gorilla Logic LLC',
    position: 'Full-Stack Developer',
    description: [
      'Add new features and bug fixes to web applications built in Vue.js, Node.js, Golang and MongoDB.',
      'Create landing pages with lead generation forms using vanilla JavaScript and GTM for A/B testing.',
      'Implement React, AWS Lambdas and S3 to add extra functionality to single page websites.'
    ],
    participation: {
      architectureAndDesign: '10%',
      development: '80%',
      qa: '5%',
      devOps: '5%'
    }
  },
  {
    from: 'Sep. 2015',
    to: 'Feb. 2019',
    company: 'Ciris Informatic Solutions',
    position: 'Full-Stack Developer',
    description: [
      'Develop web applications using Vue.js and AngularJS.',
      'Build hybrid applications using Ionic and NativeScript.',
      'Create RESTful web services using Node.js and Express.js.',
      'Design database schemas using MongoDB and Firebase.',
      'Setup continuous integration and delivery pipelines.'
    ],
    participation: {
      architectureAndDesign: '40%',
      development: '40%',
      qa: '0%',
      devOps: '20%'
    }
  }
];

export const projectItems = [
  {
    name: 'DDMRP Simulation',
    date: '(03/2021 - To Date)',
    description: 'Material Requirements Planning dashboard built in Vue.js.'
  },
  {
    name: 'JumpCloud',
    date: '(07/2020 - 10/2020)',
    description: 'Directory-as-a-Service admin portal built in Vue.js, Node.js, and MongoDB.'
  },
  {
    name: 'A Place for Mom',
    date: '(06/2018 – 06/2019)',
    description: 'Landing pages built in vanilla JavaScript, React, AWS and GTM.'
  },
  {
    name: 'UACFel',
    date: '(11/2018 – 06/2019)',
    description: 'Progressive Web App built in Vue.js, Node.js and MongoDB.'
  },
  {
    name: 'Agrotico',
    date: '(07/2017 – 07/2018)',
    description: 'Hybrid application built in Vue.js, Cordova, Node.js and MongoDB.'
  },
  {
    name: 'FireLab Aries',
    date: '(12/2015 – 12/2017)',
    description: 'Hybrid and Web application built in Ionic, AngularJS, Node.js, Firebase and MongoDB'
  }
]

export const skillsItems = [
  'JavaScript',
  'Node.js',
  'Express.js',
  'Vue.js',
  'React.js',
  'Angular',
  'Mongoose',
  'Docker',
  'MongoDB',
  'HTML',
  'CSS',
  'SCSS',
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
  'Cypress',
  'REST',
  'SQL',
  'Scrum',
  'Svelte'
];
