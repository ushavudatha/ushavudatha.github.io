module.exports = {
  siteTitle: 'Usha Vudatha | Software Developer',
  siteDescription:
    'Usha Vudatha hold a masters degree in computer science from stony brook university',
  siteKeywords:
    'Usha Vudatha, Usha, Vudatha, ushavudatha, software developer, software engineer, Sentiment analysis, Competitive Programmer, web developer, python developer, Sperry Technologies, Stony Brook, New York, ',
  siteUrl: 'https://ushavudatha.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Usha Vudatha',
  location: 'Stony Brook, New York',
  email: 'ushavudatha@gmail.com',
  github: 'https://github.com/ushavudatha',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ushavudatha',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/usha-vudatha/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/usha_v17',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#D76E00',
    navy: '#f2ead3',
    darkNavy: '#ece1bf',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
