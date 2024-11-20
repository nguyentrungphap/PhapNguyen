"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { usePathname } from "next/navigation";
import { ChatModal } from "@/components/chat/ChatModal";
import { ChatButton } from "@/components/chat/ChatButton";

const routes = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about",
    href: "/about",
  },
  {
    name: "projects",
    href: "/projects",
  },
  {
    name: "education",
    href: "/awards",
  },
]


export default function LayoutPage({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        type: "spring",
        bounce: 0,
        duration: 0.5,
      },
    },
  };
  
  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center bg-zinc-900 px-4 py-8 text-zinc-50">
      <header className="flex flex-col items-center gap-2 pb-4 md:pb-10">
        <Logo />
        <motion.nav
        className="flex items-center gap-4"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {routes.map(({ name, href }, i) => (
          <motion.div key={i} variants={staggerItem}>
            <Link
              href={href}
              className={`${pathname === href ? "border-b border-emerald-300 text-emerald-300" : "text-zinc-50"} hover:border-b hover:border-emerald-300 hover:text-emerald-300 py-2 text-sm md:text-base font-semibold uppercase transition-colors duration-100 ease-in-out`}
            >
              {name}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
      </header>
      
      {children}
      <ChatButton setIsOpen={setIsOpen} />
      {isOpen && (
        <ChatModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      <Footer />
    </main>
  )
}