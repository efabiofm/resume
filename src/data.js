import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const headerText = {
  name: 'Fabio Flores Manrique',
  profession: 'Software Engineer',
  description: 'Full-stack web developer with 4+ years of experience building web & hybrid apps for many different industries. Critical thinking with self-motivation, adaptability, problem-solving and fast learning skills.'
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
    to: 'To Date',
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
    from: 'Feb. 2019',
    to: 'To Date',
    company: 'Gorilla Logic LLC',
    position: 'Web Developer',
    description: [
      'Create different versions of landing pages with lead generation forms using vanilla JavaScript for A/B testing.',
      'Customize UI components using Vanilla JavaScript and SASS',
      'Create reusable React components to speed up the landing pages delivery process.',
      'Create AWS lambda functions for landing pages to consume.'
    ]
  },
  {
    from: 'Sep. 2015',
    to: 'Feb. 2019',
    company: 'Ciris Informatic Solutions',
    position: 'Web Developer',
    description: [
      'Develop web applications using Vue.js and AngularJS.',
      'Build hybrid applications using Ionic and NativeScript.',
      'Create RESTful web services using Node.js and Express.js.',
      'Design database schemas using MongoDB and Firebase.',
      'Setup and maintain Linux servers for production deployments.',
      'Setup continuous integration and delivery pipelines.'
    ]
  },
  {
    from: 'Oct. 2014',
    to: 'Sep. 2015',
    company: 'Sykes Latin America',
    position: 'Customer Service Agent',
    description: ['Responsible for providing high quality and accurate resolutions to Intel’s internal customers in the United States by answering general inquiries via phone or email.']
  },
  {
    from: 'Jan. 2013',
    to: 'Apr. 2014',
    company: 'Ingram Micro CR',
    position: 'Electronic Technician',
    description: ['Responsible for troubleshooting and circuit board repair of mobile devices from a wide range of well-known brands coming from T-Mobile in the United States.']
  }
];

export const projectItems = [
  {
    name: 'A Place for Mom',
    date: '(06/2019 – 06/2018)',
    description: [
      'Lead generation forms built with vanilla JavaScript and React.js'
    ]
  },
  {
    name: 'UACFel',
    date: '(11/2018 – 06/2019)',
    description: [
      'Progressive Web App built with Vue.js, Node.js and MongoDB'
    ]
  },
  {
    name: 'Laboratorio Histocito',
    date: '(07/2017 – 08/2018)',
    description: [
      'Migration from Scala to Node.js',
      'Zoho invoice module integration'
    ]
  },
  {
    name: 'Agrotico',
    date: '(07/2017 – 07/2018)',
    description: [
      'Hybrid application built with Vue.js, Cordova, Node.js and MongoDB'
    ]
  },
  {
    name: 'FireLab Aries',
    date: '(12/2015 – 12/2017)',
    description: [
      'Hybrid and Web application built with Ionic, AngularJS, Node.js, Firebase and MongoDB'
    ]
  }
]

export const skillsItems = [
  'JavaScript',
  'Node.js',
  'Express.js',
  'Vue.js',
  'React.js',
  'Angular',
  'MongoDB',
  'HTML',
  'CSS/SCSS',
  'Git',
  'NPM',
  'AWS',
  'Firebase',
  'Ionic',
  'NativeScript',
  'CD/CI',
  'TDD',
  'PWA',
  'Gulp',
  'Webpack',
  'Jest',
  'Linux',
  'Java',
  'Selenium',
  'JUnit',
  'Scrum',
  'REST API',
  'MySQL',
  'A/B Testing'
];
