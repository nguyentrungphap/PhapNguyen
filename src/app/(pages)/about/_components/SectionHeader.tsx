import { Reveal } from "@/components/Reveal";

export const SectionHeader = ({ title, dir = "r" }: { title: string, dir?: "r" | "l" }) => {
  return (
    <header
      className="flex items-center gap-8 mb-12"
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className="w-full h-[1px] bg-zinc-700" />
      <h2>
        <Reveal>
          <span className="text-3xl md:text-5xl font-black text-end">
            {title}
            <span className="text-emerald-500">.</span>
          </span>
        </Reveal>
      </h2>
    </header>
  );
};
