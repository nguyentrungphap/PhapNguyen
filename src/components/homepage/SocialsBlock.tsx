import Link from "next/link";
import { Block } from "./Block";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiBriefcase } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa6";



export const SocialsBlock = () => {
  return (
    <>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1,
        }}
        className="group overflow-hidden col-span-6 bg-neutral-800 md:col-span-6"
      >
        <Link
          id="Github Profile"
          aria-label="Github Profile"
          href="https://github.com/nguyentrungphap"
          rel="noopener noreferrer"
          target="_blank"
          className="h-full grid place-items-center text-white overflow-hidden transition-all"
        >
          <SiGithub className="text-2xl md:text-4xl"/>
        </Link>
        
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="group overflow-hidden col-span-6 bg-emerald-500 md:col-span-3"
      >
        <Link
          id="Projects"
          aria-label="Projects"
          href="/projects"
          className="h-full grid place-items-center text-white overflow-hidden transition-all"
        >
          <FiBriefcase className="text-2xl md:text-4xl"/>
        </Link>
        
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="group overflow-hidden col-span-6 bg-rose-500 md:col-span-3"
      >
        <Link
          id="Awards & Education"
          aria-label="Awards & Education"
          href="/awards"
          className="h-full grid place-items-center text-white overflow-hidden transition-all"
        >
          <FaGraduationCap className="text-2xl md:text-4xl" />
        </Link>
      </Block>
    </>
  );
};
