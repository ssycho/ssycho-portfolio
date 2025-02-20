import { cn } from "@/lib/utils";
import Project from "./parts/Project";
import type { Project as TProject } from "@/types/project";

type Props = {
    projects: TProject[];
    className?: string;
};
function Projects({ projects, className }: Props) {
    return (
        <div className={cn("min-h-screen", className)}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {projects.map((project) => (
                    <Project {...project} key={project.title} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
