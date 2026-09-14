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
import onlyFansClone6 from "../../public/assets/imagesProjects/onlyFansClone/Captura de pantalla 2025-09-29 231533.png";
import onlyFansClone7 from "../../public/assets/imagesProjects/onlyFansClone/Captura de pantalla 2025-09-29 231651.png";
import onlyFansClone8 from "../../public/assets/imagesProjects/onlyFansClone/Captura de pantalla 2025-09-29 231858.png";
import onlyFansClone9 from "../../public/assets/imagesProjects/onlyFansClone/Captura de pantalla 2025-09-29 232000.png";
import onlyFansClone10 from "../../public/assets/imagesProjects/onlyFansClone/Captura de pantalla 2025-09-29 232713.png";

export const dataProjects = [
  {
    id: 8,
    href: "/",
    developer: "Developed by me.",
    images: [
      onlyFansClone1,
      onlyFansClone1,
      onlyFansClone2,
      onlyFansClone3,
      onlyFansClone4,
      onlyFansClone5,
      onlyFansClone6,
      onlyFansClone7,
      onlyFansClone8,
      onlyFansClone9,
      onlyFansClone10,
    ], // Screenshots reales de tu proyecto
    tittle: "Content Creator Platform - OnlyFans Style",
    category: "NEXT-JS",
    stack:
      "Next.js - React - PostgreSQL - Prisma - Mercado Pago API - NextAuth  - SCSS Modules - Vercel ",
    description:
      "A full-featured web platform inspired by OnlyFans, built to allow creators to monetize content through subscriptions, one-time purchases, and tips. Includes advanced features such as dynamic commission rates per creator, weekly automatic payouts, real-time Mercado Pago integration via webhooks, secure content access control, private chat, and admin panel for managing creators, transactions, and KYC verification. Designed with a scalable architecture using Next.js, PostgreSQL, and Prisma.",
    date: "Published on September 20, 2025.",
    url: "https://onlymj.vercel.app/", // Si tienes demo pública la agregas aquí
    urlGithub: "", // Link al repo
    color: "#1f1f1f",
  },
  {
    id: 7,
    href: "/",
    developer: "Developed by me.",
    images: [cartaDelivery1, cartaDelivery2, cartaDelivery3],
    tittle: "Digital Delivery Menu - La Esquina Bar",
    category: "NEXT-JS",
    stack:
      "Next.js - React - Google Sheets - Google Apps Script - WhatsApp API - SCSS Modules - Vercel",
    description:
      "A responsive web app built with Next.js, React, and SCSS Modules. Users can browse the menu by category, add items with custom notes to the cart, and send their order via WhatsApp. Menu data is dynamically loaded from Google Sheets using Google Apps Script, enabling easy updates without code changes. Features a modern design with pure CSS animations.",
    date: "Published on March 5, 2025.",
    url: "https://qrcartadelivery.vercel.app/",
    urlGihub: "",
    color: "#4b423b",
  },
  {
    id: 6,
    href: "/",
    developer: "Developed by me.",
    images: [cartaDigital1, cartaDigital2, cartaDigital3],
    tittle: "Digital Menu - La Esquina Bar",
    category: "NEXT-JS",
    stack:
      "Next.js - React - Google Sheets - Google Apps Script - SCSS Modules - Vercel",
    description:
      "Responsive web app built with Next.js and React to digitize a bar's menu. It displays categories like burgers, cocktails, and desserts, each with name, description, price, and optional image. Data is dynamically loaded from a Google Sheets spreadsheet via Google Apps Script, allowing easy updates without modifying the code. Features include section-based navigation, conditional image rendering, and a modern dark-themed design with neon accents.",
    date: "Published on February 21, 2025.",
    url: "https://qrcarta.vercel.app/",
    urlGihub: "",
    color: "#4b423b",
  },
  {
    id: 5,
    href: "/project/spaceos-property",
    developer: "Developed in collaboration with a colleague.",
    images: [spaceosProp1, spaceosProp2, spaceosProp3, spaceosProp4],
    tittle: "SpaceOs Property",
    category: "NEXT-JS",
    stack: "Next.js - React.js - Google Maps - Prisma - Sass - Html",
    description:
      "This page offers an engaging visual experience of a property with detailed information, high-quality images, and videos. We use advanced technologies like Next.js to ensure fast performance and smooth navigation. Users can explore details, amenities, location, and communicate directly via WhatsApp for instant inquiries. Our design provides an immersive and compelling experience to help visitors make informed decisions. Additionally, the page features a search function that redirects to a section with two columns: on the left, property search results; on the right, the location of the properties on a map with their respective prices. This organization facilitates easy comparison and visualization of properties. In the development of the project, I was responsible for the design and interface of the property details page and the search results page, as well as the integration of the map. Although the backend was developed by a colleague, I collaborated on creating some routes. I also designed the interface for the administration panel for property uploads and management. My focus was on creating an intuitive and efficient user experience.",
    date: "Published on October 27, 2023.",
    url: "https://spaceos.vercel.app/buscador",
    urlGihub: "",
    color: "#4b423b",
  },
  {
    id: 4,
    href: "/project/proymet-blog",
    developer: "Developed in collaboration with a colleague.",
    images: [proymentBlog1, proymentBlog2, proymentBlog3],
    tittle: "Proyment Blog",
    category: "REACT-JS",
    stack: "React.js - Markdown - Sass - Html",
    description:
      "The blog of the consulting and professional services company has been meticulously designed and developed to offer an informative and engaging experience. Seamlessly integrated into the website, it features a cohesive and organized design that allows users to easily explore relevant content. Utilizing modern technologies, the blog offers interactive features such as comments and social media sharing options. Additionally, it is optimized for search engines, with additional features like newsletter subscriptions implemented to enhance the user experience and strengthen the company's online presence. The blog was developed in collaboration with a colleague. As the developer, I was responsible for the layout and design of the blog's landing page and all its navigational elements, ensuring an intuitive and attractive interface that facilitates navigation and improves content accessibility.",
    date: "Published on September 29, 2023.",
    url: "https://proyment-xokp.vercel.app/blog",
    urlGihub: "",
    color: "#183263",
  },
  {
    id: 3,
    href: "/project/spaceos",
    developer: "Developed in collaboration with a colleague.",
    images: [spaceos1, spaceos2],
    tittle: `SpaceOs`,
    category: "NEXT-JS",
    stack: "Next.js - React.js - Sass - Html",
    description:
      "Development and design of a comprehensive web platform dedicated to the promotion and dissemination of properties, including apartments, houses, and land in the real estate market. The platform focused on providing clear and accessible information to interested users, facilitating direct communication through WhatsApp redirection buttons for specific inquiries and requests. Technologies such as Next.js, JavaScript, SASS, and HTML were used.",
    date: "Published on july 24, 2023.",
    url: "https://spaceos.vercel.app/",
    urlGihub: "",
    color: "#4b423b",
  },
  {
    id: 2,
    href: "/project/proyment",
    developer: "Developed in collaboration with a colleague",
    images: [proyment1, proyment2],
    tittle: "Proyment",
    category: "REACT-JS",
    stack: "React.js - Firebase - Sass - Html",
    description:
      "Design and development of a dynamic website dedicated to a consulting and professional services company. The website serves as a comprehensive platform for clients to access specialized advice and services. It features multiple pages with concise and seamlessly integrated information, along with WhatsApp buttons for direct communication, enhancing user engagement. Technologies such as React.js, JavaScript, SASS, and HTML were employed. Additionally, all pages include a contact form and are connected to a database through one of the Cloud services offered by Firebase.",
    date: "Published on April 18, 2023.",
    url: "https://proyment-xokp.vercel.app/",
    urlGihub: "",
    color: "#183263",
  },
  /* {
    id: 3,
    href: "/project/blog-next-prismic",
    images: [blogPrismic, blogPrismic],
    tittle: "Blog Next Prismic",
    category: "NEXT-JS",
    description:
      "The project involves creating a blog using Next.js technology and integrating a CMS called Prismic. This choice is based on Next.js's ability to offer optimal performance and a fast user experience through server-side rendering. Implementing Prismic as the CMS will allow efficient content management, separating the blog's presentation logic and facilitating content loading. This combination ensures a highly functional blog with an optimized user interface and easy content administration.",
    date: "Published on july 30, 2023.",
    url: "https://blog-next-prismic.vercel.app/",
    urlGihub: "",
    color: "#183263",
  }, */
  /* {
    id: 4,
    href: "/project/astroGamer-app",
    images: [astrogamer1, astrogamer2],
    tittle: "AstroGamer App",
    category: "REACT-JS",
    description:
      "The objective was to design and develop an e-commerce platform that includes: third-party login and authentication, payment gateway, local storage, combined filters, email notifications, and an admin dashboard. My main contribution was in the Front-End development, where the core technologies used were React.js, Redux.js, CSS, and Bootstrap.",
    date: "Published on December 2, 2022.",
    url: "https://p-grupal.vercel.app",
    urlGihub: "https://github.com/miguelbel00/p-grupal",
    color: "#5355a8",
  }, */
  {
    id: 1,
    href: "/project/pokemon-app",
    developer: "Developed by me",
    images: [pokemon1, pokemon2],
    tittle: "Pokemon App",
    category: "REACT-JS",
    stack: "React.js - Redux - Css - Html",
    description:
      "This project consists of a Single Page Application in which you can search for Pokémon by name, filter by types and information source. Each card on the home page displays a Pokémon, and clicking on it allows you to view the details. You can sort alphabetically and by attack level. Additionally, you can create a new Pokémon by filling out the form.",
    date: "Published on August 30, 2022.",
    url: "https://pokemon-front.netlify.app",
    //urlGihub: "https://github.com/FranzDuran/Pokemon-Front",
    color: "#68ad82",
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
