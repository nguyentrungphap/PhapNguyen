import { Testimonial } from "@/lib/testimonials";
import { Dispatch, SetStateAction } from "react"
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialCards = ({
    testimonials,
    selected,
    setSelected
}: {
    testimonials: Testimonial[],
    selected: number,
    setSelected: Dispatch<SetStateAction<number>>
}) => {
    return (
        <article className="p-4 relative h-[450px] lg:h-[500px] shadow-xl">
            {testimonials.map((t, i) => {
                return (
                    <TestimonialCard
                        {...t}
                        key={i}
                        position={i}
                        selected={selected}
                        setSelected={setSelected}
                    />
                );
            })}
        </article>
    )
}