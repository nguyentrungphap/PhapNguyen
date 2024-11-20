import { Block } from "./Block";

export const AboutBlock = () => {
  return (
    <Block className="col-span-12 text-lg md:text-xl leading-snug">
      <p>
      I'm a front-end developer,{" "}
        <span className="text-zinc-400">
          I&apos;m passionate about creating creative solutions to everyday problems. I believe that technology has the power to make a difference and I use my skills to create useful products
        </span>
      </p>
    </Block>
  );
};
