import { BarLoader } from "@/components/loading/BarLoader";

export default function Loading() {
    return (
        <div className="grid place-content-center h-full bg-zinc-900 px-4 py-24">
            <BarLoader />
        </div>
    );
};




