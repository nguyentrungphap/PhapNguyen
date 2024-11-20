"use client";

import { TbRobot } from "react-icons/tb";

export const ChatButton = ({
    setIsOpen
} : {
    setIsOpen: (isOpen: boolean) => void;
}) => {
    return (
        <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 lg:bottom-20 lg:right-20 transition-all z-50">
            <button 
                id="ai-chat" 
                aria-label="Chat with AI" 
                onClick={() => setIsOpen(true)} className="group relative grid h-[50px] w-[50px] bg-opacity-30 backdrop-blur-md place-content-center rounded-full border-2 border-zinc-50 transition-all hover:bg-emerald-500 duration-700 ease-out hover:border-emerald-500 shadow-[3px_3px_0px_#3f3f46] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                <TbRobot className="pointer-events-none relative z-10 text-4xl text-zinc-50 transition-all duration-700 ease-out group-hover:animate-spin group-hover:text-zinc-50" />
            </button>
        </div>
    )
}