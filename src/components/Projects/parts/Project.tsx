import { IconBrandGithubFilled, IconRocket } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/types/project";

function Project({
    title,
    description,
    icon,
    illustration,
    projectUrl,
    repositoryUrl,
}: Project) {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <img
                        src={icon}
                        alt={title}
                        width="auto"
                        height="auto"
                        className="size-10 aspect-square object-cover rounded-lg"
                    />
                    <p>{title}</p>
                </CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="px-0">
                <img
                    src={illustration}
                    alt={title + " illustration"}
                    width="auto"
                    height="auto"
                    className="w-full h-52 aspect-video object-cover object-top"
                />
            </CardContent>
            {(projectUrl || repositoryUrl) && (
                <CardFooter className="w-full flex items-center justify-end gap-2">
                    {repositoryUrl && (
                        <Button
                            asChild
                            variant="outline"
                            className="flex items-center w-max"
                        >
                            <a href={repositoryUrl} target="_blank">
                                <IconBrandGithubFilled />
                                <p>View Repository</p>
                            </a>
                        </Button>
                    )}
                    {projectUrl && (
                        <Button
                            asChild
                            variant="default"
                            className="flex items-center w-max"
                        >
                            <a href={projectUrl} target="_blank">
                                <IconRocket />
                                <p>View Live</p>
                            </a>
                        </Button>
                    )}
                </CardFooter>
            )}
        </Card>
    );
}

export default Project;
