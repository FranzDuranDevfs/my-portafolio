import next from "../../public/assets/icons/nextjs.svg";
import sass from "../../public/assets/icons/sass.svg";
import postgresql from "../../public/assets/icons/postgresql.svg";
import sequelize from "../../public/assets/icons/sequelize.svg";
import prismic from "../../public/assets/icons/prismic.svg";
import nodejs from "../../public/assets/icons/node-js.svg";
import redux from "../../public/assets/icons/redux.svg";
import figma from "../../public/assets/icons/figma.svg";
import html from "../../public/assets/icons/html5-line.svg";
import css from "../../public/assets/icons/css.svg";
import javascript from "../../public/assets/icons/javascript.svg";
import reactjs from "../../public/assets/icons/reactjs.svg";
import github from "../../public/assets/icons/github.svg";

export const itemsNav = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Experiences", to: "experiences" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Contact", to: "contact" },
];

import pokemon1 from "../../public/assets/imagesProjects/pokemon-1.jpg";
import pokemon2 from "../../public/assets/imagesProjects/pokemon-2.png";
import proyment1 from "../../public/assets/imagesProjects/proyment-1.png";
import proyment2 from "../../public/assets/imagesProjects/proyment-2.png";
import astrogamer1 from "../../public/assets/imagesProjects/astrogamer-1.png";
import astrogamer2 from "../../public/assets/imagesProjects/astrogamer-2.png";
import spaceos1 from "../../public/assets/imagesProjects/spaceos-1.png";
import spaceos2 from "../../public/assets/imagesProjects/spaceos-2.png";
import spaceosProp1 from "../../public/assets/imagesProjects/spaceos-property-1.png";
import spaceosProp2 from "../../public/assets/imagesProjects/spaceos-property-2.png";
import spaceosProp3 from "../../public/assets/imagesProjects/spaceos-property-3.png";
import spaceosProp4 from "../../public/assets/imagesProjects/spaceos-property-4.png";
import blogPrismic from "../../public/assets/imagesProjects/blog-next.webp";
import proymentBlog1 from "../../public/assets/imagesProjects/proyment-blog-1.png";
import proymentBlog2 from "../../public/assets/imagesProjects/proyment-blog-2.png";
import proymentBlog3 from "../../public/assets/imagesProjects/proyment-blog-3.png";

import cartaDigital1 from "../../public/assets/imagesProjects/carta-digital-1.png";
import cartaDigital2 from "../../public/assets/imagesProjects/carta-digital-2.jpeg";
import cartaDigital3 from "../../public/assets/imagesProjects/carta-digital-3.jpeg";

import cartaDelivery1 from "../../public/assets/imagesProjects/carta-delivery-1.png";
import cartaDelivery2 from "../../public/assets/imagesProjects/carta-delivery-2.jpeg";
import cartaDelivery3 from "../../public/assets/imagesProjects/carta-delivery-3.jpeg";

import onlyFansClone1 from "../../public/assets/imagesProjects/onlyFansClone/Captura de pantalla 2025-09-29 231023.png";
import onlyFansClone2 from "../../public/assets/imagesProjects/onlyFansClone/Captura de pantalla 2025-09-29 231123.png";
import onlyFansClone3 from "../../public/assets/imagesProjects/onlyFansClone/Captura de pantalla 2025-09-29 231225.png";
import onlyFansClone4 from "../../public/assets/imagesProjects/onlyFansClone/Captura de pantalla 2025-09-29 231345.png";
import onlyFansClone5 from "../../public/assets/imagesProjects/onlyFansClone/Captura de pantalla 2025-09-29 231451.png";
import colibri1 from "../../public/assets/imagesProjects/colibri-1.png";
import colibri2 from "../../public/assets/imagesProjects/colibri-2.png";
import colibri3 from "../../public/assets/imagesProjects/colibri-3.png";

export const dataProjects = [
  {
    id: 9,
    title: "Colibrí OS",
    category: "NEXT-JS",
    role: "Frontend Developer",

    summary:
      "Web platform focused on tracking, evaluating and visualizing the progress of entrepreneurial projects through structured workflows and evidence-based data.",

    solution:
      "I developed and maintained frontend interfaces for the platform's project dashboard, connecting reusable React components with REST APIs and building role-based experiences for entrepreneurs, evaluators and other platform users.",

    highlights: [
      "Role-based dashboard experiences",
      "REST API integration",
      "Dynamic project data",
      "Evidence management workflows",
      "Human evaluation interfaces",
      "Reusable React components",
      "Responsive interface design",
      "Project progress visualization",
      "Git and GitHub collaboration",
    ],

    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Zustand",
      "Framer Motion",
      "Swiper",
      "Git",
      "GitHub",
    ],

    images: [colibri1, colibri2, colibri3],

    url: "https://colibri-os.vercel.app/home",

    github: "",

    featured: true,
  },
  {
    id: 8,

    title: "Content Creator Platform",

    category: "NEXT-JS",

    role: "Frontend / Full Stack",

    summary:
      "A subscription-based content platform built for creators to monetize their content through subscriptions, one-time purchases and tips.",

    solution:
      "I built the application interface and core product flows around authentication, paid content, creator management and transactions. The platform integrates Mercado Pago through webhooks and uses protected routes and server-side validation to control access to private content.",

    highlights: [
      "Mercado Pago integration",
      "Webhook-based payment flow",
      "Authentication and authorization",
      "Protected content",
      "Creator and admin dashboards",
      "Responsive interface",
    ],

    stack: [
      "Next.js",
      "React",
      "PostgreSQL",
      "Prisma",
      "Mercado Pago",
      "NextAuth",
      "SCSS Modules",
      "Vercel",
    ],

    images: [
      onlyFansClone1,
      onlyFansClone2,
      onlyFansClone3,
      onlyFansClone4,
      onlyFansClone5,
    ],

    url: "https://onlymj.vercel.app/",

    github: "",

    featured: true,
  },

  {
    id: 5,

    title: "SpaceOs Property",

    category: "NEXT-JS",

    role: "Frontend Developer",

    summary:
      "Real estate platform focused on property discovery, detailed property views and map-based search.",

    solution:
      "I was responsible for the property detail interface, search results interface and Google Maps integration. I also contributed to routes and designed the administration interface for property management.",

    highlights: [
      "Google Maps integration",
      "Property search experience",
      "Responsive property details",
      "Search results interface",
      "Admin interface",
      "Backend collaboration",
    ],

    stack: ["Next.js", "React", "Google Maps", "Prisma", "Sass", "JavaScript"],

    images: [spaceosProp1, spaceosProp2, spaceosProp3, spaceosProp4],

    url: "https://spaceos.vercel.app/buscador",

    github: "",

    featured: true,
  },

  {
    id: 1,

    title: "Pokemon App",

    category: "REACT-JS",

    role: "Frontend Developer",

    summary:
      "React single-page application for exploring, filtering, sorting and creating Pokémon using external API data.",

    solution:
      "I implemented the application interface, API data consumption and global state management with Redux. The application allows users to search Pokémon, combine filters, sort results and create new Pokémon through a form.",

    highlights: [
      "REST API integration",
      "Redux state management",
      "Combined filters",
      "Search and sorting",
      "Dynamic detail views",
      "Form validation",
    ],

    stack: ["React", "Redux", "JavaScript", "REST API", "CSS", "HTML"],

    images: [pokemon1, pokemon2],

    url: "https://pokemon-front.netlify.app",

    github: "",

    featured: true,
  },

  {
    id: 7,

    title: "Digital Delivery Menu",

    category: "NEXT-JS",

    role: "Frontend Developer",

    summary:
      "Responsive ordering interface that allows customers to browse a dynamic menu, customize products and send orders through WhatsApp.",

    solution:
      "I built the responsive interface, product browsing experience and cart interaction. Menu content is loaded dynamically from Google Sheets through Google Apps Script, allowing the business to update products without modifying the application code.",

    highlights: [
      "Dynamic data from Google Sheets",
      "Shopping cart",
      "Product customization",
      "WhatsApp ordering",
      "Responsive UI",
      "Reusable components",
    ],

    stack: [
      "Next.js",
      "React",
      "Google Sheets",
      "Google Apps Script",
      "WhatsApp API",
      "SCSS Modules",
      "Vercel",
    ],

    images: [cartaDelivery1, cartaDelivery2, cartaDelivery3],

    url: "https://qrcartadelivery.vercel.app/",

    github: "",

    featured: true,
  },

  /*
  ========================================
  Secondary projects
  ========================================
  */

  {
    id: 6,

    title: "Digital Menu - La Esquina Bar",

    category: "NEXT-JS",

    role: "Frontend Developer",

    summary:
      "Responsive digital menu with dynamic content loaded from Google Sheets.",

    solution:
      "Built the interface and integrated the menu with Google Sheets through Google Apps Script.",

    highlights: ["Dynamic content", "Responsive design", "Category navigation"],

    stack: ["Next.js", "React", "Google Sheets", "SCSS"],

    images: [cartaDigital1, cartaDigital2, cartaDigital3],

    url: "https://qrcarta.vercel.app/",

    github: "",

    featured: false,
  },

  {
    id: 4,

    title: "Proyment Blog",

    category: "REACT-JS",

    role: "Frontend Developer",

    summary:
      "Content-focused blog experience developed for a professional services company.",

    solution:
      "I was responsible for the landing page layout and navigation experience, focusing on accessibility of content and clear information hierarchy.",

    highlights: [
      "Responsive layout",
      "Content navigation",
      "Reusable components",
      "SEO-oriented structure",
    ],

    stack: ["React", "Markdown", "Sass", "HTML"],

    images: [proymentBlog1, proymentBlog2, proymentBlog3],

    url: "https://proyment-xokp.vercel.app/blog",

    github: "",

    featured: false,
  },

  {
    id: 2,

    title: "Proyment",

    category: "REACT-JS",

    role: "Frontend Developer",

    summary:
      "Professional services website with multiple pages, contact flows and Firebase integration.",

    solution:
      "I contributed to the interface and responsive implementation while integrating contact forms with Firebase services.",

    highlights: [
      "Responsive UI",
      "Firebase integration",
      "Contact forms",
      "Reusable layouts",
    ],

    stack: ["React", "Firebase", "JavaScript", "Sass", "HTML"],

    images: [proyment1, proyment2],

    url: "https://proyment-xokp.vercel.app/",

    github: "",

    featured: false,
  },

  {
    id: 3,

    title: "SpaceOs",

    category: "NEXT-JS",

    role: "Frontend Developer",

    summary:
      "Real estate platform for presenting properties and facilitating direct communication with potential customers.",

    solution:
      "Implemented responsive interfaces and property presentation flows using Next.js and JavaScript.",

    highlights: [
      "Responsive design",
      "Property presentation",
      "WhatsApp integration",
      "Reusable UI",
    ],

    stack: ["Next.js", "React", "Sass", "JavaScript"],

    images: [spaceos1, spaceos2],

    url: "https://spaceos.vercel.app/",

    github: "",

    featured: false,
  },
];

export const dataSkills = [
  { image: next, name: "next" },
  { image: reactjs, name: "reactjs" },
  { image: javascript, name: "javascript" },
  { image: redux, name: "redux" },
  { image: sass, name: "sass" },
  { image: css, name: "css" },
  { image: html, name: "html" },
  { image: nodejs, name: "nodejs" },
  { image: sequelize, name: "sequelize" },
  { image: postgresql, name: "postgresql" },
  { image: prismic, name: "prismic" },
  { image: figma, name: "figma" },
  { image: github, name: "github" },
];
