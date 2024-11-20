import { TechBadge } from "./TechBadge"

export const TechStacks = () => {
    return (
        <section className="relative">
            <article>
                <h4 className="font-bold mb-6">
                    Front-End Stacks
                </h4>
                <aside className="flex flex-wrap gap-2 mb-8">
                    <TechBadge>HTML5</TechBadge>
                    <TechBadge>CSS</TechBadge>
                    <TechBadge>SASS</TechBadge>
                    <TechBadge>React</TechBadge>
                    <TechBadge>Javascript</TechBadge>
                    <TechBadge>TailwindCSS</TechBadge>
                </aside>
            </article>
            <article>
                <h4 className="font-bold mb-6">
                    Back-End Stacks
                </h4>
                <aside className="flex flex-wrap gap-2 mb-8">
                    <TechBadge>NodeJS</TechBadge>
                    <TechBadge>Express</TechBadge>
                    <TechBadge>Axios</TechBadge>
                    <TechBadge>REST API</TechBadge>
                </aside>
            </article>
            <article>
                <h4 className="font-bold mb-6">
                    Databases
                </h4>
                <aside className="flex flex-wrap gap-2 mb-8">
                    <TechBadge>MongoDB</TechBadge>
                </aside>
            </article>
            <article>
                <h4 className="font-bold mb-6">
                    Other Tools
                </h4>
                <aside className="flex flex-wrap gap-2 mb-8">
                    <TechBadge>Github</TechBadge>
                </aside>
            </article>
        </section>
    )
}