import Link from "next/link";
import { FiGithub, FiGlobe, FiWifiOff } from "react-icons/fi";
import { AnimatedTooltip } from "@/components/AnimatedTooltip";

interface ProjectDrawerContentProps {
  project: string;
  problems: string[];
  features: {
    title: string;
    description: string;
  }[];
  imageUrl: string;
  githubUrl: string;
  websiteUrl: string;
  backendStacks: {
    path: string;
    name: string;
  }[];
  frontendStacks: {
    path: string;
    name: string;
  }[];
  clientLibraries: {
    path: string;
    name: string;
  }[];
  longDescription: string;
}
export const ProjectDrawerContent = ({
  project,
  imageUrl,
  websiteUrl,
  longDescription,
}: ProjectDrawerContentProps) => {
  return (
    <article className="mx-auto max-w-4xl space-y-4 text-zinc-700"
    >
      <aside className="h-full w-full border-2 border-zinc-500 rounded-lg">
        <img src={imageUrl} className="h-full w-full rounded-lg" />
      </aside>
      <aside className="grid grid-cols-1  gap-4">
        <div className="col-span-2">
          <header className="flex gap-2 w-full items-center">
            <h2 className="text-4xl font-bold text-zinc-50">{project}</h2>
            <div className="w-full h-[1px] bg-zinc-600" />
            <nav className="flex items-center gap-4">
              {websiteUrl.length > 0 ? (
                <Link href={websiteUrl} target="_blank">
                <FiGlobe className="h-5 w-5 hover:text-emerald-300 text-zinc-200 transition-all" />
              </Link>
              ) : (
                <FiWifiOff className="h-5 w-5 hover:text-emerald-300 text-zinc-200 transition-all" />
              )}
            </nav>
          </header>
          <main className="flex flex-col gap-8 py-4">
            <p className="text-zinc-300 tracking-tight text-base text-justify">
              {longDescription}
            </p>
          </main>
        </div>
      </aside>
        </article>
      );
    };
