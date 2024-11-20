import Link from "next/link";

export const Footer = () => {
    return (
      <footer className="mt-12">
        <Link 
          target="_blank"
          href="mailto:achris.alonzo30@gmail.com"
          className="text-[14px] sm:text-base text-center text-zinc-400 font-medium hover:text-[#6EE7B7]"
        >
          🚀 Let&apos;s Build Something Great Together 🚀
        </Link>
      </footer>
    );
  };