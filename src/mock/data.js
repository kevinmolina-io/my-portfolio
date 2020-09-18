import { v4 as uuidv4 } from 'uuid';

// HEAD DATA
export const headData = {
  title: 'KevMo | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my site.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hey, I'm",
  name: 'Kevin Molina.',
  subtitle: 'Software Engineer.',
  cta: 'Projects.',
};

// ABOUT DATA
export const aboutData = {
  img: 'grad.JPG',
  paragraphOne:
    "Former Apple Genius with 6+ years of IT Support Experience who had to the opportunity to work as a Program Manager at Apple Corporate, where I had exposure to the software development life cycle. From there, I took the leap of faith and went to school to pursue a Bachelor's in Computer Science. Now I spend my time building progressive apps and tools, looking to kickstart my professional career.",
  paragraphTwo:
    'As a Latino in Software Engineering, my goal is to be a champion of inclusion and build a community that builds and provides resources for my community and encourage for more representation of underrepresented minorities in tech.',
  paragraphThree: 'For more info, take a look at my resume below.',
  resume: 'https://drive.google.com/file/d/121lvPCCeP4wNW1VCEqkJZB83iwPyFjjN/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'MindFull.png',
    title: 'MindFull [Coming Soon]',
    info:
      'MindFull is a web app that provides an anonymous forum and community for individuals that suffer from mental illnesses to discuss issues',
    info2: '',
    url: '',
    repo: '',
  },
  {
    id: uuidv4(),
    img: 'CalcuRack.png',
    title: 'CalcuRack',
    info:
      'Mobile Calculating Visualization tool that determines minimum number of plates needed to achieve given total weight based on plate selection.',
    info2: 'JavaScript | HTML/CSS | D3.js',
    url: 'https://kevinmolina-io.github.io/barbell-calculator/',
    repo: 'https://github.com/kevinmolina-io/barbell-calculator', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'Phocial.png',
    title: 'Phocial',
    info:
      'Web app that allows users to upload digital content to showcase and interact with other users',
    info2: 'NodeJS | MongoDB | Vue | CSS',
    url: '',
    repo: 'https://github.com/kevinmolina-io/myJourney', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'AIMacDiag.png',
    title: 'AI Mac Triage',
    info:
      'Deterministic Triage tool that assists IT professionals in diagnosing most common Mac issues',
    info2: 'C++ | Ask for Code',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Have a project in mind? Send me a message!',
  btn: "Let's Chat",
  email: 'molina.kevin.a@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv4(),
      name: 'twitter',
      url: 'https://twitter.com/kevmo_',
    },
    {
      id: uuidv4(),
      name: 'instagram',
      url: 'https://instagram.com/kevinmolina.io',
    },
    {
      id: uuidv4(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kevinmolina/',
    },
    {
      id: uuidv4(),
      name: 'github',
      url: 'https://github.com/kevinmolina-io',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
