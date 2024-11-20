'use client';

import Markdown from "react-markdown";
import { initializeModel } from "@/actions/initialize-model";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiLoader, FiX } from "react-icons/fi";
import { ChatSession, GoogleGenerativeAI } from '@google/generative-ai';
import { questions } from "@/lib/prompt";

export const ChatInterface = ({
    setIsOpen
}: {
    setIsOpen: (isOpen: boolean) => void;
}) => {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const [prompt, setPrompt] = useState("");
    const [chat, setChat] = useState<ChatSession | null>(null);
    const [loading, setIsLoading] = useState(false);
    const [history, setHistory] = useState([
        {
            role: "model",
            parts: `Hi I'm Lonz, your AI Assistant ✨`
        }
    ]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [history]);

    useEffect(() => {
        if (!chat) {
            (async () => {
                const model = initializeModel();
                const chatSession = model.startChat({
                    generationConfig: {
                        temperature: 0,
                        maxOutputTokens: 400
                    }
                });
                setChat(chatSession);
            })();
        }
    }, [chat]);

    const handleConversation = async (promptText: string) => {
        setIsLoading(true);
        setHistory((prev) => [...prev,
        {
            role: "user",
            parts: promptText,
        },
        {
            role: "model",
            parts: "I'm thinking..."
        }
        ]);

        setPrompt("");
        try {
            if (chat) {
                const result = await chat.sendMessage(promptText);
                const text = result.response.text();

                setHistory((prev) => {
                    const newHistory = prev.slice(0, prev.length - 1);
                    newHistory.push({
                        role: "model",
                        parts: text
                    });
                    return newHistory;
                });
                setIsLoading(false);
            }
        } catch (e) {
            setHistory((prev) => {
                const newHistory = prev.slice(0, prev.length - 1);
                newHistory.push({
                    role: "model",
                    parts: "Under Maintenance 👷🏼🛠️",
                });
                return newHistory;
            });
            setIsLoading(false);
            console.error("Failed to initialize chat. Please try again later! Byeeeeeee", e);
        }
    }

    function handlePressEnter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter" && prompt) {
            e.preventDefault();
            handleConversation(prompt);
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleConversation(prompt);
    }

    return (
        <>
            <button onClick={() => setIsOpen(false)} className="absolute rounded-full top-2 right-2 flex items-center p-2 bg-zinc-950 border-zinc-700 hover:bg-rose-600">
                <FiX className="h-4 w-4 text-zinc-50" />
            </button>
            <section className="flex flex-col justify-between w-full h-full mx-auto border border-zinc-700 bg-zinc-900 text-zinc-50">
                <article className="flex flex-col overflow-y-auto flex-1 flex-grow w-full">
                    {history.length === 1 && (
                        <aside className="px-6 py-20 md:px-12 md:py-24">
                            <h1 className="text-2xl text-center leading-tight border rounded border-zinc-800 p-4">
                                Hey <span className="font-bold text-emerald-300">I&apos;m Lonz</span>! Your AI Assistant ✨
                            </h1>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-8">
                                {questions.map((q, i) => (
                                    <button
                                        key={i}
                                        className="mb-2 px-4 py-2 h-full border border-zinc-700 text-sm rounded text-emerald-300 hover:bg-emerald-300 hover:text-zinc-900"
                                        onClick={() => handleConversation(q)}
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </aside>
                    )}


                    {history.length > 1 && history.map((h, i) => (
                        <aside
                            key={i}
                            className={`flex ${h.role === "model" ? "justify-start" : "justify-end"} p-4`}
                        >
                            <div className={`max-w-2xl p-2 border border-md border-zinc-700 rounded-md ${h.role === "model" ? "text-left" : "bg-zinc-800 text-right"}`}>
                                <Markdown>{h.parts}</Markdown>
                            </div>
                        </aside>
                    ))}
                    <div ref={messagesEndRef} />
                </article>
                <form
                    onSubmit={handleSubmit}
                    className="mt-auto relative z-30 flex w-full items-center gap-2 border-t border-zinc-700 bg-zinc-950 py-1.5 pl-6 pr-1.5">
                    <input
                        type="text"
                        value={prompt}
                        onKeyDown={handlePressEnter}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Ask me anything about Alonzo Christopher..."
                        className="w-full bg-transparent text-sm text-white placeholder-zinv-500 focus:outline-0"
                    />
                    <button
                        type="submit"
                        disabled={loading || !prompt}
                        className="group flex shrink-0 items-center gap-1.5 bg-emerald-300 px-4 py-3 text-sm font-medium text-zinc-900 transition-transform active:scale-[0.985]"
                    >
                        {loading ? (
                            <FiLoader className="h-4 w-4 animate-spin" />
                        ) : (
                            <>
                                <span>Send</span>
                                <FiArrowRight className="-mr-4 opacity-0 transition-all group-hover:-mr-0 group-hover:opacity-100" />
                            </>
                        )}
                    </button>
                </form>
            </section>
        </>
    );
}
