import { Project } from "@/types/project";
import PortfolioIllustration from "@/assets/portfolio.png";
import VeedIllustration from "@/assets/vee-d.png";
import VeedIcon from "@/assets/vee-d-icon.webp";

const PROJECTS: Project[] = [
    {
        title: "Spycho L",
        description: "Spycho L - Silly NextJs and NodeJs Developer",
        icon: "/favicon.ico",
        illustration: PortfolioIllustration,
        projectUrl: "https://spycho.vercel.app",
        repositoryUrl: "https://github.com/lonlee-spycho/spycho",
    },
    {
        title: "Vee'd",
        description: "Vee'd - [vidy] is an e-commerce app made with Nextjs",
        icon: VeedIcon,
        illustration: VeedIllustration,
        projectUrl: "https://vee-d.vercel.app",
        repositoryUrl: "https://github.com/lonlee-spycho/vee-d",
    },
];

export default PROJECTS;
