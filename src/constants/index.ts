import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiSass,
  SiReact,
  SiFastify,
  SiDotnet,
  SiNextdotjs,
  SiMysql,
  SiGraphql,
  SiMongodb,
  SiRedis,
  SiGithub,
  SiVisualstudiocode,
  SiRabbitmq,
  SiDocker,
  SiWebpack,
  SiCypress,
  SiJest,
  SiScikitlearn,
  SiTensorflow,
  SiPython,
  SiPostgresql,
  SiJirasoftware,
  SiFastapi,
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { TbHexagonLetterX } from "react-icons/tb";
import { IconGrpcLogo } from "../../assets/icons/IconGrpcLogo";
import { IconType } from "react-icons";

/**
 * List of one liners to be rendered cyclically on the home page when describing myself
 */
export const ONE_LINERS = [
  "a Full-Stack Developer.",
  "a budding ML Engineer.",
  "a History Buff.",
  "a Fitness Enthusiast.",
];

export const DETAILED_DESC = `I'm an experienced developer with a genuine passion for creating exceptional user experiences. From the back-end architecture to crafting intuitive user interfaces, I love bringing ideas to life. 
  With a robust foundation in Progressive Web Apps and microservices, I offer three years of professional experience in software development. <br /><br/>
  I've recently graduated with an MS in CS from the University of Florida, and am available for co-ops and full-time employment.<br />Scroll on to explore my projects and technical skills!`;

export const REPO_LINK = "https://www.github.com/rb3198/rb3198_web";

export const FRONTEND_DEV_DATA = [
  {
    TechIcon: SiReact,
    label: "React",
  },
  {
    TechIcon: SiTypescript,
    label: "TypeScript",
  },
  {
    TechIcon: SiJavascript,
    label: "JavaScript",
  },
  {
    TechIcon: SiHtml5,
    label: "HTML 5",
  },
  {
    TechIcon: SiSass,
    label: "Sass",
  },
  {
    TechIcon: SiWebpack,
    label: "Webpack",
  },
];

export const BACKEND_DEV_DATA = [
  {
    TechIcon: SiDotnet,
    label: ".NET Framework",
  },
  {
    TechIcon: SiFastify,
    label: "Fastify",
  },
  {
    TechIcon: SiNextdotjs,
    label: "NextJs",
  },
  {
    TechIcon: SiFastapi,
    label: "Fast API",
  },
];

export const MESSAGING_DATA = [
  {
    TechIcon: SiGraphql,
    label: "GraphQL",
  },
  {
    TechIcon: AiFillApi,
    label: "REST APIs",
  },
  {
    TechIcon: IconGrpcLogo as IconType,
    label: "Google RPC",
  },
  {
    TechIcon: SiRabbitmq,
    label: "Rabbit MQ",
  },
];

export const DB_DEV_DATA = [
  {
    TechIcon: SiMysql,
    label: "MySQL",
  },
  {
    TechIcon: SiPostgresql,
    label: "Postgres",
  },
  {
    TechIcon: SiMongodb,
    label: "MongoDB",
  },
  {
    TechIcon: SiRedis,
    label: "Redis",
  },
];

export const TOOLS_DEV_DATA = [
  {
    TechIcon: SiGithub,
    label: "GitHub",
  },
  {
    TechIcon: SiDocker,
    label: "Docker",
  },
  {
    TechIcon: SiVisualstudiocode,
    label: "VS Code",
  },
  {
    TechIcon: SiJirasoftware,
    label: "Jira",
  },
];

export const ML_DEV_DATA = [
  {
    TechIcon: SiPython,
    label: "Python",
  },
  {
    TechIcon: SiTensorflow,
    label: "TensorFlow",
  },
  {
    TechIcon: SiScikitlearn,
    label: "Sci-kit Learn",
  },
];

export const TESTING_DEV_DATA = [
  {
    TechIcon: SiCypress,
    label: "Cypress",
  },
  {
    TechIcon: SiJest,
    label: "Jest",
  },
  {
    TechIcon: TbHexagonLetterX,
    label: "Xunit",
  },
];

export const EMAIL_HASH = "d94d454f3a9d1cd57e67577e35006f93";
export const FORBIDDEN_DOM_KEYS = [
  "containerClasses",
  "children",
  "isValid",
  "as",
  "cat",
  "act",
  "lab",
  "trackClick",
  "trackImp",
  "threshold",
];
