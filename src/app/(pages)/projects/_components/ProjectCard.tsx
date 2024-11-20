"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


import { FiGithub, FiGlobe, FiCalendar } from "react-icons/fi";

import { Corners } from "@/components/Corners";
import { ProjectDrawerContent } from "./ProjectDrawerContent";
import { ProjectShowcaseDrawer } from "./ProjectShowcaseDrawer";

interface ProjectCardProps {
  src: string;
  date: string;
  project: string;
  videoUrl: string;
  problems: string[];
  features: {
    title: string;
    description: string;
  }[];
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
  shortDescription: string;
  longDescription: string;
  clientLibraries: {
    path: string;
    name: string;
  }[];
}
export const ProjectCard = ({
  src,
  date,
  project,
  videoUrl,
  problems,
  features,
  githubUrl,
  websiteUrl,
  backendStacks,
  frontendStacks,
  shortDescription,
  longDescription,
  clientLibraries,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <aside
        onClick={() => setIsOpen(true)}
        className="group border relative cursor-pointer flex h-56 flex-col justify-end overflow-hidden p-6 transtion-colors hover:bg-neutral-950 md:h-80 md:p-9"
      >
        <aside className="absolute left-3 top-5 z-10 flex items-center gap-1.5 text-xs uppercase text-zinc-400 transition-colors duration-500 group-hover:text-zinc-50">
          <FiCalendar className="text-base" />
          <span>{date}</span>
        </aside>
        <h2 className="relative z-10 font-medium text-2xl leading-tight transition-transform duration-500 group-hover:-translate-y-3">
          <span className="font-bold text-3xl underline">{project}</span>{" "}
          {shortDescription}
        </h2>
        <aside className="absolute flex items-center gap-4 right-3 top-4 z-10 text-2xl text-zinc-400 transition-colors group-hover:text-zinc-50">
          <Link href={githubUrl} target="_blank">
            <FiGithub className="text-base hover:text-emerald-300 transition-all" />
          </Link>
          <Link href={websiteUrl} target="_blank">
            <FiGlobe className="text-base hover:text-emerald-300 transition-all" />
          </Link>
        </aside>
        <Image
          src={src}
          width={200}
          height={200}
          quality={100}
          priority={true}
          alt="Background Image"
          className="absolute h-full w-full bg-cover bg-center bottom-0 left-0 right-0 top-0 opacity-0 blur-sm grayscale transition-all group-hover:opacity-10 group-active:scale-105 group-active:opacity-30 group-active:blur-0 group-active:grayscale-0"
        />
        <Corners />
      </aside>
      <ProjectShowcaseDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <ProjectDrawerContent
          project={project}
          problems={problems}
          features={features}
          videoUrl={videoUrl}
          githubUrl={githubUrl}
          websiteUrl={websiteUrl}
          backendStacks={backendStacks}
          frontendStacks={frontendStacks}
          clientLibraries={clientLibraries}
          longDescription={longDescription}
        />
      </ProjectShowcaseDrawer>
    </>
  );
};
