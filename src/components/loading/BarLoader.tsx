"use client";

import { variants } from "@/lib/util";
import { motion } from "framer-motion";

export const BarLoader = () => {
    return (
      <motion.div
        transition={{
          staggerChildren: 0.25,
        }}
        initial="initial"
        animate="animate"
        className="flex gap-1"
      >
        <motion.div variants={variants} className="h-12 w-2 bg-emerald-300" />
        <motion.div variants={variants} className="h-12 w-2 bg-emerald-300" />
        <motion.div variants={variants} className="h-12 w-2 bg-emerald-300" />
        <motion.div variants={variants} className="h-12 w-2 bg-emerald-300" />
        <motion.div variants={variants} className="h-12 w-2 bg-emerald-300" />
      </motion.div>
    );
  };