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
  videoUrl: string;
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
  problems,
  features,
  videoUrl,
  githubUrl,
  websiteUrl,
  backendStacks,
  frontendStacks,
  clientLibraries,
  longDescription,
}: ProjectDrawerContentProps) => {
  return (
    <article className="mx-auto max-w-4xl space-y-4 text-zinc-700"
    >
      <aside className="h-full w-full border-2 border-zinc-500 rounded-lg">
        <video
          loop
          muted
          controls
          src={videoUrl}
          className="h-full w-full rounded-lg"
        />
      </aside>
      <aside className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <header className="flex gap-2 w-full items-center">
            <h2 className="text-4xl font-bold text-zinc-50">{project}</h2>
            <div className="w-full h-[1px] bg-zinc-600" />
            <nav className="flex items-center gap-4">
              <Link href={githubUrl} target="_blank">
                <FiGithub className="h-5 w-5 hover:text-emerald-300 text-zinc-200 transition-all" />
              </Link>
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

            <hgroup className="flex flex-col gap-2">
              <h3 className="text-zinc-200 font-bold text-lg tracking-tight leading-3">
                Problem Addressed:
              </h3>
              {problems.map((p, i) => (
                <li key={i} className="text-zinc-300 text-base tracking-tight leading-2">{p}</li>
              ))}
            </hgroup>

            <hgroup className="flex flex-col gap-2">
              <h3 className="text-zinc-200 font-bold text-lg tracking-tight leading-3">
                Key Features Developed:
              </h3>
              {features.map(({ title, description }, i) => (
                <li
                  key={i}
                  className="text-zinc-300 text-base tracking-tight leading-2"
                >
                  <span className="font-semibold underline text-justify">{title}</span>{" "}{description}
                </li>
              ))}
            </hgroup>
          </main>
        </div>
        <footer className="flex flex-col gap-4 pt-2.5 md:p-2.5">
          <nav className="flex flex-col gap-4">
            <h4 className="text-zinc-100 font-bold tracking-tight leading-3">
              Front-End Stack:{" "}
            </h4>
            <ul className="flex gap-4 items-center">
              <AnimatedTooltip stacks={frontendStacks} />
            </ul>
          </nav>

          <nav className="flex flex-col gap-4">
            <h4 className="text-zinc-100 font-bold tracking-tight leading-3">
              Back-End Stack:{" "}
            </h4>
            <ul className="flex gap-4 items-center">
              <AnimatedTooltip stacks={backendStacks} />
            </ul>
          </nav>

          {clientLibraries.length > 0 && (
            <nav className="flex flex-col gap-4">
              <h4 className="text-zinc-100 font-bold tracking-tight leading-3">
                Other Libraries:{" "}
              </h4>
              <ul className="flex gap-4 items-center">
                <AnimatedTooltip stacks={clientLibraries} />
              </ul>
            </nav>
          )}
        </footer>
      </aside>
    </article>
  );
};
