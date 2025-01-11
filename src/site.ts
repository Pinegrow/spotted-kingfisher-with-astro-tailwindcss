// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: 'Spotted Kingfisher',
  description: "Help the world's most iconic species",
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
  navs: {
    primary: [
      {
        title: 'Home',
        icon: 'i-mdi-home',
        to: '/',
      },
    ],
    secondary: [
      {
        title: 'Contact Us',
        icon: 'i-mdi-home',
        to: '/contact-us',
      },
    ],
  },
}
