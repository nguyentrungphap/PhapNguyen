"use client";

import { useState } from "react";
import { Tracks } from "./Tracks";
import { testimonials } from "@/lib/testimonials";
import { TestimonialCards } from "./TestimonialCards";

export const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    return (
        <section className="bg-zinc-800  px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden">
            <article className="p-4">
                <h3 className="text-4xl font-semibold text-zinc-50">Testimonials</h3>
                <Tracks numTracks={testimonials.length} selected={selected} setSelected={setSelected} />
            </article>
            <TestimonialCards 
                testimonials={testimonials}
                selected={selected}
                setSelected={setSelected}
            />
        </section>
    )
}