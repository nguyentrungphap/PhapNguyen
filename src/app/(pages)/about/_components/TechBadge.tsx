export const TechBadge = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="text-xs px-2 py-1 rounded bg-zinc-700 hover:bg-zinc-800 transition-colors">
            {children}
        </span>
    )
}