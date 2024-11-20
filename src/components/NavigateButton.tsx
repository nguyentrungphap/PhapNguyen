import Link from "next/link";

interface NavigateButtonProps {
    href: string; 
    children: React.ReactNode; 
}

export const NavigateButton = ({ 
    href, 
    children, 
}: NavigateButtonProps) => {
    return (
        <Link
            href={href}
            className="group relative flex items-center justify-center px-4 py-2 group-hover:px-4 group-hover:py-2 overflow-hidden font-medium text-zinc-100 transition-colors duration-[400ms] hover:text-emerald-300"
        >
            {children}
            {/* TOP */}
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-emerald-300 transition-all duration-100 group-hover:w-full" />

            {/* RIGHT */}
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-emerald-300 transition-all delay-100 duration-100 group-hover:h-full" />

            {/* BOTTOM */}
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-emerald-300 transition-all delay-200 duration-100 group-hover:w-full" />

            {/* LEFT */}
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-emerald-300 transition-all delay-300 duration-100 group-hover:h-full" />
        </Link>
    )
}