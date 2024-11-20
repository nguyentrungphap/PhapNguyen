
"use client";

import { motion } from "framer-motion";

const LOOP_DURATION = 4;

export const AIPingIcon = () => {
    return (
        <div className="relative">
            <Logo />
            <Band delay={0} />
            <Band delay={LOOP_DURATION * 0.25} />
            <Band delay={LOOP_DURATION * 0.5} />
            <Band delay={LOOP_DURATION * 0.75} />
        </div>
    )
}

const Logo = () => {
    return (
        <motion.svg
            width="50"
            height="50"
            version="1.0"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"

            initial={{
                opacity: 0,
                scale: 0.85,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1,
                ease: "easeOut",
            }}
        >
            <path
                fill="#6EE7B7"
                fillOpacity="1"
                fillRule="nonzero"
                d="M 56.53125 254.679688 C 56.421875 249.316406 56.285156 242.640625 55.933594 241.1875 L 55.769531 240.621094 L 55.742188 240.0625 C 55.609375 237.59375 56.460938 235.253906 58.148438 233.472656 C 59.207031 232.351562 60.539062 231.53125 61.992188 231.078125 C 52.941406 218.269531 47.625 202.632812 47.625 185.757812 C 47.625 142.324219 82.832031 107.121094 126.261719 107.121094 C 164.832031 107.121094 196.910156 134.890625 203.609375 171.523438 C 213.367188 152.113281 223.511719 131.609375 231.757812 114.910156 C 209.175781 80.652344 170.363281 58.035156 126.261719 58.035156 C 56.523438 58.035156 -0.0078125 114.566406 -0.0078125 184.304688 C -0.0078125 229.671875 23.925781 269.449219 59.847656 291.707031 C 57.484375 284.609375 56.894531 272.570312 56.53125 254.679688 Z M 375.007812 304.488281 L 322.566406 304.488281 C 318.308594 294.636719 306.09375 266.40625 302.714844 256.671875 L 352.8125 256.671875 L 375.007812 304.488281 "
            />
            <path
                fill="#6EE7B7"
                fillOpacity="1"
                fillRule="nonzero"
                d="M 60.960938 239.773438 C 62.652344 245.65625 60.148438 291.902344 67.769531 294.304688 C 96.226562 312.667969 134.132812 316.96875 166.0625 305.585938 C 226.21875 284.25 239.355469 212.074219 264.246094 161.1875 L 286.503906 215.605469 L 333.753906 215.605469 L 263.191406 63.578125 C 260.316406 67.457031 178.273438 238.300781 172.015625 240.828125 C 153.191406 262.734375 119.652344 264.882812 93.429688 252.964844 C 84.570312 249.101562 75.730469 243.679688 66.90625 236.699219 C 64.425781 234.730469 60.789062 236.617188 60.960938 239.773438 "
            />
        </motion.svg>
    )
}

const Band = ({ delay }: { delay: number }) => {
    return (
        <motion.span
            style={{
                translateX: "-50%",
                translateY: "-50%",
            }}
            initial={{
                opacity: 0,
                scale: 0.1,
            }}
            animate={{
                opacity: [0, 1, 1, 0],
                scale: 1
            }}
            transition={{
                delay,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                duration: LOOP_DURATION,
                times: [0, 0.5, 0.75, 1],
            }}
            className="absolute left-[50%] top-[50%] z-0 h-32 w-32 rounded-full border-[1px] border-emerald-300 bg-gradient-to-br from-emerald-300/50 to-emerald-800/20 shadow-xl shadow-emerald-500/40"
        />
    )
}