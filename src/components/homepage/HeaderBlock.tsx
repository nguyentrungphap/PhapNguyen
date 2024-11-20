import Image from "next/image";
import { Block } from "./Block";
import { Button } from "../Button";
import { FiArrowRight } from "react-icons/fi";

export const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <Image
        width={50}
        height={50}
        quality={100}
        priority={true}
        src="/headshot.jpg"
        alt="Christopher Alonzo Profile Picture"
        className="mb-4 size-14 rounded-full"
      />
      <h1 className="mb-3 md:mb-6 lg:mb-12 text-xl md:text-2xl lg:text-4xl font-medium leading-tight">
        Hi, I&apos;m Nguyễn Trung Pháp
      </h1>
      <nav className="flex items-center justify-between">
        <a
          href="/about"
          className="group flex items-center gap-1 text-sm md:text-base text-zinc-50 hover:underline"
        >
          About me{" "}
          <FiArrowRight className="group-hover:translate-x-2 transition-all duration-200" />
        </a>
        <Button />
      </nav>
    </Block>
  );
};
