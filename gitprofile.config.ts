// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'skandansn', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Skandan Senthil Nathan',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'skandansn',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'skandansenthilnathan@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1FlpMu32zDEc_170r4p9wjijmTY3F0cmW', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Go',
    'PHP',
    'Laravel',
    'Python',
    'FastAPI',
    'Django',
    'Java',
    'JavaScript',
    'TypeScript'
    'React.js',
    'Next.js',
    'Node.js',
    'Flutter',
    'SQL (MySQL, Postgres)',
    'NoSQL (MongoDB)'
    'Git',
    'Docker',
    'AWS',
    'Firebase'
  ],
  experiences: [
    {
      company: 'Razorpay',
      position: 'Software Development Engineer',
      from: 'July 2022',
      to: 'July 2023',
      companyLink: 'https://razorpay.com',
    },
    {
      company: 'Razorpay',
      position: 'Software Development Engineer Intern',
      from: 'Jan 2022',
      to: 'July 2022',
      companyLink: 'https://razorpay.com',
    },
  ],
  certifications: [
    {
      name: 'AWS Academy Cloud Foundations',
      body: '',
      year: '',
      link: '',
    },
     {
      name: 'AWS Academy Cloud Architecting',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Northeastern University',
      degree: 'Master of Science in Computer Science (MS CS)',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'Amrita Vishwa Vidyapeetham',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      from: '2018',
      to: '2022',
    },
  ],
  publications: [
    {
      title: 'A Secured BlockChain Based Facial Recognition System for Two Factor Authentication Process',
      conferenceName: 'ICEEE 2022',
      journalName: 'Springer Nature',
      authors: 'Skandan Senthil Nathan',
      link: 'https://link.springer.com/chapter/10.1007/978-981-19-1677-9_44',
      description:
        'Published a technical paper discussing the design of a unique account management system.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
