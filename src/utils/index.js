/* Tech Stack */
import CSS3 from "../assets/TechStack/CSS3.png";
import ExpressJS from "../assets/TechStack/ExpressJS.png";
import Git from "../assets/TechStack/Git.png";
import GitHub from "../assets/TechStack/GitHub.png";
import HTML5 from "../assets/TechStack/HTML5.png";
import JavaScript from "../assets/TechStack/Javascript.png";
import MongoDB from "../assets/TechStack/MongoDB.png";
import NodeJS from "../assets/TechStack/NodeJS.png";
import PostgreSQL from "../assets/TechStack/PostgreSQL.png";
import ReactJS from "../assets/TechStack/ReactJS.png";
import Redux from "../assets/TechStack/Redux.png";
import Sequelize from "../assets/TechStack/Sequelize.png";
import TypeScript from "../assets/TechStack/TypeScript.png";
import GraphQL from "../assets/TechStack/GraphQL.png";
import Prisma from "../assets/TechStack/Prisma.png";

/*Profile Pic*/
import profilePic from "../assets/profilePic.png";

/* Logo nav */
import logoNav from "../assets/logo.png";

/* img about me */
import typingBro from "../assets/Code typing-bro.png";

/* formation */
import obraje from "../assets/formationImgs/logoObraje.jpg";
import henry1 from "../assets/formationImgs/LogoHenry.png";
import UTNLogo from "../assets/formationImgs/UTNLogo.jpg";
import oxford from "../assets/formationImgs/oxford.png";
import golang from "../assets/formationImgs/logoGo.png"


/* utils */
import externalLink from "../assets/externalLink.png";

/*Projects*/
import HypeShop from "../assets/projectsImgs/HypeShop.png";
import PokedexAPP from "../assets/projectsImgs/PokedexAPP.png";
import videogamesAPI from "../assets/projectsImgs/videogamesAPI.png";
import reactFeatures from "../assets/projectsImgs/reactFeatures.png";

const images = {
  profilePic,
  logoNav,
  typingBro,
  externalLink,
};

const techStack = [
  {
    name: "Golang",
    image: golang
  },
  {
    name: "JavaScript",
    image: JavaScript,
  },
  {
    name: "TypeScript",
    image: TypeScript,
  },
  {
    name: "NodeJS",
    image: NodeJS,
  },
  {
    name: "ExpressJS",
    image: ExpressJS,
  },
  {
    name: "GraphQL",
    image: GraphQL,
  },
  {
    name: "MongoDB",
    image: MongoDB,
  },
  {
    name: "PostgreSQL",
    image: PostgreSQL,
  },
  {
    name: "Sequelize",
    image: Sequelize,
  },
  {
    name: "Prisma",
    image: Prisma,
  },
  {
    name: "Git",
    image: Git,
  },
  {
    name: "GitHub",
    image: GitHub,
  },
];

const formation = [
  {
    title: "Systems engineering",
    site: "UTN: National University of Cordoba",
    type: "University education",
    state: "In progress",
    logo: UTNLogo,

    webLink: "https://www.frc.utn.edu.ar/",
  },
  
  {
    title: "Golang Backend Development",
    site: "Self-taught (using Udemy courses, personal study and projects)",
    type: "Complementary Education",
    state: "In Progress",
    logo: golang,
  },
  
  {
    title: "Full stack web developer",
    site: "SoyHenry Bootcamp",
    type: "Bootcamp",
    state: "Graduate",
    logo: henry1,
    diplomaLink: "/diplomaSoyHenry_ValentinMorardo.pdf",
    webLink: "https://www.soyhenry.com/",
  },
  
  {
    title: "Advanced knowledge of English",
    site: "Oxford Institute - Alta Gracia, Cordoba",
    type: "English academy",
    state: "In progress",
    logo: oxford,

    webLink: "https://www.instagram.com/oxfordaltagracia/",
  },
  {
    title: "Professional and Personal Computer Technician",
    site: "El Obraje Parochial Technical Institute",
    type: "Secondary education",
    state: "Graduate",
    logo: obraje,
    diplomaLink: "/diplomaObraje_ValentinMorardo.pdf",
    webLink: "https://www.elobraje.edu.ar/",
  },





];

const projects = [
  {
    id: 1,
    title: "HypeShop",
    description:
      "Final project of SoyHenry's full stack development bootcamp. HypeShop is Online shoe store simulator application",
    techStack: [
      ReactJS,
      Redux,
      JavaScript,
      HTML5,
      CSS3,
      NodeJS,
      ExpressJS,
      PostgreSQL,
      Sequelize,
    ],
    logo: HypeShop,
    repositoryLink: "https://github.com/Littyfever/PF-Hype-Shop",
    demoLink: "https://hype-kappa.vercel.app/",
    videoLink: "https://youtu.be/JowFmyuF_c0",
  },
  {
    id: 1,
    title: "Pokedex APP",
    description:
      "Remake of my individual project of SoyHenry's full stack development bootcamp. Pokedex APP is a web application where you can view the available Pokémon with their statistics, create your own Pokémon, and make donations.",
    techStack: [
      ReactJS,
      Redux,
      JavaScript,
      HTML5,
      CSS3,
      NodeJS,
      ExpressJS,
      MongoDB,
    ],
    logo: PokedexAPP,
    repositoryLink: "https://github.com/valenmorardo/Pokemon_RMK",
    demoLink: "https://pokemon-rmk-valenmorardo.vercel.app/",
    videoLink: "https://youtu.be/bauxt6v6Sm4",
  },
  
  {
    id: 2,
    title: "Videogames CRUD - API Restful",
    description:
      "CRUD RESTful API for video games. It includes a registration and login system with JWT authentication and data encryption for users. Each user can view, create, update, and delete their own video games. Administrator system with authentication.",
    techStack: [TypeScript, NodeJS, ExpressJS, Sequelize, PostgreSQL],
    logo: videogamesAPI,
    repositoryLink: "https://github.com/valenmorardo/crud-TypeScript",
    demoLink: "https://videogamestscrud.onrender.com/api",
    videoLink: "https://youtu.be/ZOkqqzmp5nw?si=N10Mb4B1mc0ei-VZ",
  },
];

const skills = [
  "Teamwork",
  "Effective communication",
  "Adaptability",
  "Self-taught",
  "Fast learning",
  "Problem-solving",
  "Empathy",
];

export { images, formation, projects, techStack, skills };
