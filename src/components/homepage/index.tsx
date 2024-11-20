"use client";

import { motion } from "framer-motion";
import { AboutBlock } from "./AboutBlock";
import { HeaderBlock } from "./HeaderBlock";
import { SocialsBlock } from "./SocialsBlock";

export const Homepage = () => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            transition={{
                staggerChildren: 0.05,
            }}
            className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4 py-6"
        >
            <HeaderBlock />
            <SocialsBlock />
            <AboutBlock />
        </motion.div>
    )
}