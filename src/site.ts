export default {
  name: 'Spotted Kingfisher',
  description: `Help the world's most iconic species`,
  // logo: 'i-emojione-rocket',
  logo: 'i-fa6-solid-feather-pointed',
  author: 'Pinegrow',
  url: 'https://spotted-kingfisher-astro-tailwindcss.netlify.app',
  github:
    'https://github.com/pinegrow/spotted-kingfisher-with-astro-tailwindcss',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: 'Home', link: '/', type: 'primary', icon: 'i-mdi-home' },
    {
      text: 'Contact Us',
      link: '/contact-us',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
  ],
}
