import "./App.css";
import Sidebar from "@/components/Sidebar";
import { ThemeToggle } from "@/components/ui/theme-toogle";
import Projects from "@/components/Projects";
import PROJECTS from "@/components/Projects/data/projects";
import Copyright from "@/components/Copyright";

export default function App() {
    return (
        <div className="container mx-auto min-h-screen flex lg:flex-row flex-col gap-4">
            <div className="fixed right-4 top-4">
                <ThemeToggle />
            </div>
            <Sidebar className="flex-1 lg:flex-3/12 self-start" />
            <main className="flex-1 lg:flex-9/12 pt-8">
                <Projects projects={PROJECTS} className="lg:px-0 px-6" />
                <Copyright />
            </main>
        </div>
    );
}
