"use client";

import { useEffect, useRef } from "react";
import {
    motion,
    useInView,
    useAnimation,
} from "framer-motion";

export const Reveal = ({
    children,
    width = "w-fit"
}: {
    children: React.ReactNode,
    width?: string
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    return (
        <div
            ref={ref}
            className={`relative overflow-hideen ${width}`}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" }
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-emerald-300"
            />
        </div>
    )
}