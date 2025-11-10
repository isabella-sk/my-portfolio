import { Projets } from "@/src/components/ui/projects";

export default function Projects() {
    return (
        <div className="flex min-h-screen font-sans justify-center">
            <main className="min-h-screen w-full max-w-7xl flex-col items-center py-32 px-16 sm:items-start space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-center">
                    <span className="text-gray-700 bg-clip-text dark:text-white">
                        mes <span className="text-purple-700 dark:text-purple-400">projets</span>.
                    </span>
                </h1>
                <p className="text-zinc-600 text-center dark:text-zinc-400 leading-relaxed text-lg">
                    Retrouvez tous mes projets !
                </p>
                <Projets />
            </main>
        </div>
    );
}