import { IconBrandGithub, IconMail } from "@tabler/icons-react";
import Bagdes from "./parts/Badges";
import ProfilePicture from "@/assets/profile.jpg";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type Props = {
    className?: string;
};

function Sidebar({ className }: Props) {
    return (
        <nav
            className={cn(
                "relative mt-8 lg:mt-0 lg:sticky lg:top-8 lg:left-0 w-full px-2 space-y-4 ",
                className
            )}
        >
            <img
                src={ProfilePicture}
                width="auto"
                height="auto"
                className="aspect-square rounded-full size-40 lg:size-64 object-cover"
                draggable={false}
                title="Spycho L"
            />
            <div className="overview | space-y-2">
                <h1 className="text-4xl font-bold">Spycho L</h1>
                <Bagdes />
            </div>
            <div className="about | ">
                <p>I enjoy building applications as a hobby</p>
            </div>
            <div className="follow | flex items-center gap-2">
                <Button asChild className="flex items-center" variant="outline">
                    <a
                        href="mailto:spycholonlee@proton.me"
                        target="_blank"
                        className="w-max"
                    >
                        <IconMail />
                        <p>Reach out</p>
                    </a>
                </Button>
                <Button
                    asChild
                    className="flex items-center"
                    variant="secondary"
                >
                    <a
                        href="https://github.com/lonlee-spycho"
                        target="_blank"
                        className="w-max"
                    >
                        <IconBrandGithub />
                        <p>Follow me</p>
                    </a>
                </Button>
            </div>
        </nav>
    );
}

export default Sidebar;
