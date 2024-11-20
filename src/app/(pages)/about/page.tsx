"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";

import { Reveal } from "@/components/Reveal";
import { TechStacks } from "./_components/TechStacks";
import { Testimonials } from "./_components/Testimonials";
import { SectionHeader } from "./_components/SectionHeader";


export default function AboutPage() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);


    return (
        <main className=" mx-auto max-w-5xl px-4 md:px-8 space-y-12 pb-24">
            <section className="section-wrapper mx-auto">
                <SectionHeader title="AboutMe" dir="l" />
                <article className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
                    <aside className="space-y-4">
                        <Reveal>
                            <p className="leading-relaxed text-zinc-300">
                                Hi! 🤗 I&apos;m Pháp, I love to build things that solves
                                problems. I am a passionate front-end developer, committed to creating innovative solutions to everyday challenges. My stack of expertise includes:
                                {" "}
                                <span className="font-bold">
                                    ReactJS, TailwindCSS, and NodeJS.
                                </span>
                                {" "}I'm always looking for opportunities to enhance my skill set
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className="leading-relaxed text-zinc-300">
                                Besides coding, I find balance through cooking, which boosts my creativity and productivity.
                            </p>
                        </Reveal>

                        <Reveal>
                            <p className="leading-relaxed text-zinc-300">
                                I look forward to contributing my skills to a dynamic team.{" "}
                                <span className="font-bold">Let&apos;s connect!</span>
                            </p>
                        </Reveal>

                        <Reveal>
                            <div className="flex items-center w-full justify-between gap-6">
                                <div className="group flex items-center gap-4 text-sm text-emerald-300">
                                    <span>Socials</span>
                                    <FiArrowRight className="group-hover:translate-x-2 transition-all duration-300" />
                                </div>
                                <div className="flex items-center text-lg gap-4">
                                    <Link
                                        target="_blank"
                                        rel="noreferrer nofollow"
                                        href="https://linkedin.com/in/lonzochris"
                                        className="text-zinc-300 hover:text-emerald-300 transition-colors"
                                    >
                                        <FiLinkedin />
                                    </Link>
                                    <Link
                                        target="_blank"
                                        rel="noreferrer nofollow"
                                        href="https://github.com/nguyentrungphap"
                                        className="text-zinc-300 hover:text-emerald-300 transition-colors"
                                    >
                                        <FiGithub />
                                    </Link>
                                </div>
                            </div>
                        </Reveal>
                    </aside>
                    <TechStacks />
                </article>
            </section>
            <motion.div ref={ref} style={{ scale, opacity }}>
                <Testimonials />
            </motion.div>
        </main>
    )
}