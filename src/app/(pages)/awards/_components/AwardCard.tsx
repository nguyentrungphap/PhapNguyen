"use client";

import Image from "next/image";
import { useState } from "react";
import { AwardModal } from "./AwardModal";
import { Corners } from "@/components/Corners";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";

interface AwardCardProps {
  src: string;
  date: string;
  path: string;
  award: string;
  skills: string[];
}
export const AwardCard = ({
  src,
  date,
  path,
  award,
  skills
} : AwardCardProps) => {
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
          {award}
        </h2>
        <aside className="absolute right-3 top-4 z-10 text-2xl text-zinc-400 transition-colors group-hover:text-zinc-50">
          <FiArrowUpRight className="text-base hover:text-emerald-300 transition-all" />
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
      <AwardModal 
        path={path}
        skills={skills}
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
      />
    </>
  );
};
