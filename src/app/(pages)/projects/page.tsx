import { src } from "@/lib/util";
import { projects } from "@/lib/projects";
import { TitleCard } from "@/components/TitleCard";
import { ProjectCard } from "./_components/ProjectCard";


export default function ProjectsPage() {
    return (
        <section className="bg-zinc-800 p-4 text-zinc-50 md:p-12">
            <article className="mx-auto grid max-w-5xl grid-cols-1 divide-zinc-700 border border-zinc-700 md:grid-cols-3">
                <TitleCard title="Projects" />
                {projects.map((p) => (
                    <ProjectCard 
                        key={p.id} 
                        src={src} 
                        {...p} 
                    />
                ))}
            </article>
        </section>
    )
}