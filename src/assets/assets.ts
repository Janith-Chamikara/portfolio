import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiJsonwebtokens } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaStripe } from "react-icons/fa";
import { CiCloud } from "react-icons/ci";
import empowerAcademy from "./Blue Illustration Digital Marketing Strategy YouTube Thumbnail.jpg";
import letsChat from "./maxresdefault.webp";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export const navLinks = [
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export const socials = [
  {
    name: "github",
    to: "https://github.com/Janith-Chamikara",
    icon: FaGithubSquare,
  },
  {
    name: "linkedin",
    to: "https://www.linkedin.com/in/janith-chamikara/",
    icon: FaLinkedin,
  },
];

export const icons = [
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "HTML", icon: TiHtml5 },
  { name: "MongoDB", icon: SiMongodb },
  { name: "NodeJs", icon: FaNodeJs },
  { name: "JsonWebTokens", icon: SiJsonwebtokens },
  { name: "Express Js", icon: FaNodeJs },
  { name: "Firebase", icon: IoLogoFirebase },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Chakra UI", icon: SiChakraui },
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Framer Motion", icon: TbBrandFramerMotion },
  { name: "Redis", icon: DiRedis },
  { name: "Cloudinary", icon: CiCloud },
  { name: "Stripe", icon: FaStripe },
  { name: "C++", icon: TbBrandCpp },
  { name: "Python", icon: FaPython },
];

export const projects = [
  {
    name: "Empower Academy",
    description:
      "Empower Academy offers a practical MERN stack platform with Chakra UI and Framer Motion animations, making online education accessible and enjoyable. Switch effortlessly between Dark Mode and Light Mode for a personalized experience. Key features include secure transactions, real-time communication via Nodemailer, easy resource management with Cloudinary, an intuitive Admin Panel, and a robust Learning Management System.",
    imgLink: empowerAcademy,
    linkedin:
      "https://www.linkedin.com/posts/janith-chamikara_empoweracademy-mernstack-activity-7167417905733718016-fGqK?utm_source=share&utm_medium=member_desktop",
    yt: "https://youtu.be/wwZABPAmIVM?si=HWfEZo9rdA6_PLHZ",
    techstack: [
      { name: "React", icon: FaReact },
      { name: "ChakraUI", icon: SiChakraui },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Framer Motion", icon: TbBrandFramerMotion },
      { name: "Stripe", icon: FaStripe },
      { name: "Cloudinary", icon: CiCloud },
      { name: "NodeJs", icon: FaNodeJs },
      { name: "Redis", icon: DiRedis },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    name: "Let's Chat",
    description:
      "A fully interactive chat app with one to one chat capabilities, User authentications and many more...",
    imgLink: letsChat,
    linkedin:
      "https://www.linkedin.com/posts/janith-chamikara_a-fully-interactive-chat-app-with-one-to-activity-7125199566185934848-fNqy?utm_source=share&utm_medium=member_desktop",
    yt: "https://youtu.be/NmDHkv7mI2E?si=OC_BnbqUfqFUDgUg",
    github:
      "https://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbTlLYnhHUWlQZmNpTDhrNXRBdi1tdjZqbXM2UXxBQ3Jtc0trazRzcVhZbjROeHFxX3hBSXAzbm5TQ2ZtR3JtUzRlR0NhelVIdThJUjJUcjVwNThoX1d1MXNJdllnaGUwM29OR3g1Wmd5V1lVMWRKeEotVE9kY1l3d1VkUVhvVXBlMmNBek1jamdDUzkxaDkxdVA3QQ&q=https%3A%2F%2Fgithub.com%2FJanith-Chamikara%2Fchat-app-beta.git&stzid=UgyxgIqZTHl2_ceJzKN4AaABAg",
    techstack: [
      { name: "React", icon: FaReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "FireBase", icon: IoLogoFirebase },
    ],
  },
];
