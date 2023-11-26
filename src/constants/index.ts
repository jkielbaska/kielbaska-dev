import {
  express,
  git,
  github,
  javascript,
  motion,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  jest,
  styledComponents,
  cypress,
  three,
  mysql,
  prisma,
  firebase,
  hookForm,
  reactQuery,
} from "../assets/icons";

import {
  countrySearch,
  scrapeNews,
  starWarsInfo,
  wurstcord,
} from "../assets/images";

export const skills = [
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
    link_to: "https://react.dev/",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
    link_to: "https://nextjs.org/",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
    link_to: "https://www.typescriptlang.org/",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
    link_to: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
    link_to: "https://redux.js.org/",
  },
  {
    imageUrl: reactQuery,
    name: "Tanstact React Query",
    type: "State Management",
    link_to: "https://tanstack.com/query/latest",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
    link_to: "https://nodejs.org/en",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
    link_to: "https://expressjs.com/",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
    link_to: "https://sass-lang.com/",
  },
  {
    imageUrl: styledComponents,
    name: "Styled Components",
    type: "Frontend",
    link_to: "https://styled-components.com/",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
    link_to: "https://tailwindcss.com/",
  },
  {
    imageUrl: motion,
    name: "Framer Motion",
    type: "Animation",
    link_to: "https://www.framer.com/motion/",
  },
  {
    imageUrl: three,
    name: "React Three",
    type: "Animation",
    link_to:
      "https://docs.pmnd.rs/react-three-fiber/getting-started/introduction",
  },
  {
    imageUrl: hookForm,
    name: "React Hook Form",
    type: "Forms",
    link_to: "https://react-hook-form.com/",
  },
  {
    imageUrl: jest,
    name: "Jest",
    type: "Testing",
    link_to: "https://jestjs.io/",
  },
  {
    imageUrl: cypress,
    name: "Cypress.io",
    type: "Testing",
    link_to: "https://www.cypress.io/",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
    link_to: "https://pl.wikipedia.org/wiki/Git_(oprogramowanie)",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
    link_to: "https://github.com/jkielbaska",
  },
  {
    imageUrl: prisma,
    name: "Prisma db",
    type: "Database",
    link_to: "https://www.prisma.io/",
  },
  {
    imageUrl: firebase,
    name: "Google Firebase Database",
    type: "Database",
    link_to: "https://firebase.google.com/",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
    link_to: "https://www.mysql.com/",
  },
];

export const experiences = [
  {
    title: "Front-End Freelancer",
    company_name: "DKT Polska",
    href: "https://dkt-jkielbaska.vercel.app/",
    link_to: "https://dkt-jkielbaska.vercel.app/",
    iconBg: "#E99745",
    date: "05/2023 - 11.2023",
    points: [
      "designing and programming web page using Next (13), Typescript, Firebase, TailwindCSS",
      "writing unit tests using Jest/React Testing Library and E2E tests with cypress",
      "working with client",
    ],
  },
  {
    title: "Junior Front-End (React) Developer",
    company_name: "Fundacja Poszanownia Energii",
    href: false,
    link_to: "https://github.com/jkielbaska",
    iconBg: "#4DFFDA",
    date: "12/2020 - 02/2023",
    points: [
      "programming front-end layer of web application using React, Typescript, REST API, TailwindCSS",
      "writing unit tests using Jest/React Testing Library and E2E tests with Cypress",
      "code review for collegues/pair programming",
      "working with other developers",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: tailwindcss,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/jkielbaska",
  },
];

export const projects = [
  {
    iconUrl: wurstcord,
    theme: "btn-back-red",
    name: "wurstcord",
    description:
      "Full-stack real-time chatting app, built with Next.js 13 and TypeScript. Users can log in or sign up to create or join servers, engage in text, audio, and video channels. Inspired by discord",
    link: "https://github.com/jkielbaska/wurstcord",
  },
  {
    iconUrl: scrapeNews,
    theme: "btn-back-blue",
    name: "scrapeNews",
    description:
      "Users can check newest articles from 21 countries. Content is scraped from web page when API does not provide content description. App is build in Next.js, Typescript and Redux",
    link: "https://github.com/jkielbaska/scrapeNews",
  },
  {
    iconUrl: starWarsInfo,
    theme: "btn-back-yellow",
    name: "StarWarsInfo",
    description:
      "Users can check information about Star Wars movies and characters. Users can express their feelings about movies in comments section (handled by firebase).App is build in Next.js and Typescript",
    link: "https://github.com/jkielbaska/StarWarsInfo",
  },
  {
    iconUrl: countrySearch,
    theme: "btn-back-green",
    name: "country-search",
    description:
      "Country searching app. Users can check where country is located, its currency and population. There is a map which flies to selected country and displays pin on capital ",
    link: "https://github.com/jkielbaska/country-search",
  },
];
