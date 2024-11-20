
export const TitleCard = ({ title }: { title: string }) => {
    return (
        <div className="group relative flex h-full w-full flex-col justify-between bg-zinc-950 p-6 md:h-80 md:p-9">
            <h2 className="text-4xl uppercase leading-tight">
                <span className="text-zinc-400 transition-colors duration-500 group-hover:text-emerald-300">
                    {title}
                </span>
            </h2>
        </div>
    )
}