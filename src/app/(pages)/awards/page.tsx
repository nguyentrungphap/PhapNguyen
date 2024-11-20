import { src } from "@/lib/util";
import { awards } from "@/lib/awards";
import { TitleCard } from "@/components/TitleCard";
import { AwardCard } from "./_components/AwardCard";

export default function AwardsPage() {
    return (
        <section className="bg-zinc-800 p-4 text-zinc-50 md:p-12">
            <article className="mx-auto grid max-w-5xl grid-cols-1 divide-zinc-700 border border-zinc-700 md:grid-cols-3">
                <TitleCard title="Awards & Education" />
                {awards.map((a) => (
                    <AwardCard
                        {...a}
                        key={a.id}
                        src={src}
                    />
                ))}

            </article>
        </section>
    )
}