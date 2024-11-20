"use client";



import {
    motion,
    useSpring,
    useTransform,
    useMotionValue,
    AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

interface AnimatedTooltipProps {
    stacks: {
        path: string;
        name: string;
    }[]
}

export const AnimatedTooltip = ({
    stacks
}: AnimatedTooltipProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0);

    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig
    );

    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig
    );

    const handleMouseMove = (e: any) => {
        const halfWidth = e.target.offsetWidth / 2;
        x.set(e.nativeEvent.offsetX - halfWidth);
    }
    return (
        <>
            {stacks.map((s, i) => (
                <div
                    key={i}
                    className="mr-4 relative group"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence mode="popLayout">
                        {hoveredIndex === i && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 10
                                    }
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                style={{ translateX, rotate, whiteSpace: "nowrap" }}
                                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-zinc-800 z-50 shadow-xl px-4 py-2"
                            >
                                <div className="font-bold text-zinc-50 relative z-30 text-base">
                                    {s.name}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <Image
                        src={s.path}
                        alt={s.name}
                        width={25}
                        height={25}
                        onMouseMove={handleMouseMove}
                        className="object-cover object-top group-hover:scale-110 group-hover:z-30 relative transition duration-300"
                    />
                </div>
            ))}
        </>
    )
}