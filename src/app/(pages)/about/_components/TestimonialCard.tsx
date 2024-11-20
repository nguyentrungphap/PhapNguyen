"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"
import { Testimonial } from "@/lib/testimonials"
import { Dispatch, SetStateAction } from "react"

export const TestimonialCard = ({
    src,
    title,
    name,
    testimonial,
    position,
    selected,
    setSelected
} : Testimonial & {
    position: number,
    selected: number,
    setSelected: Dispatch<SetStateAction<number>>
}) => {
    const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
    const offset = position <= selected ? 0 : 99 + (position - selected) * 3;
    const background = position % 2 ? "#27272A" : "#FAFAFA";
    const color = position % 2 ? "#FAFAFA" : "#27272A";
    return (
        <motion.div
            initial={false}
            style={{
                zIndex: position,
                transformOrigin: "left bottom",
                background,
                color
            }}
            animate={{
                x: `${offset}%`, 
                scale
            }}
            whileHover={{
                translateX: position === selected ? 0 : -3
            }}
            transition={{
                duration: 0.5,
                ease: "easeOut"
            }}
            onClick={() => setSelected(position)}
            className="absolute top-0 left-0 w-full min-h-full p-8  flex flex-col justify-between"
        >
            <Image src={src} alt={name} width={100} height={100} className="rounded-full object-cover mx-auto" />
            <p className="text-base lg:text-lg font-light italic my-8 leading-tight text-pretty line-clamp-6">
                {testimonial}
            </p>
            <Link 
                href="https://www.linkedin.com/in/lonzochris/details/recommendations/?detailScreenTabIndex=0"
                target="_blank"
                className="text-sm italic hover:text-emerald-500 transition-all"
            >
                Read more...
            </Link>
            <div>
                <span className="block font-semibold text-sm lg:text-lg">
                    {name}
                </span>
                <span className="block text-xs lg:text-sm">{title}</span>
            </div>
        </motion.div>
    )
}