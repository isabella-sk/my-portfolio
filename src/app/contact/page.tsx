import { ProfessionalConnect } from "@/src/components/shared/get-in-touch";

export default function DemoOne() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <main className="w-full max-w-7xl flex flex-col items-center py-32 px-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-center">
                    <span className="text-gray-700 bg-clip-text dark:text-white">
                        contactez-<span className="text-purple-700 dark:text-purple-400">moi</span>.
                    </span>
                </h1>
                <p className="text-zinc-600 text-center dark:text-zinc-400 leading-relaxed text-lg">
                    N'hésitez pas à me contacter ou à consulter mes projets et mon LinkedIn.
                </p>
                <ProfessionalConnect />
            </main>
        </div>
    );
}