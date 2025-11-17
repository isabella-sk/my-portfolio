import Image from "next/image";
import { Projets } from "@/src/components/ui/projects";
import { Experiences } from "../components/ui/demoTabs";
import { ProfessionalConnect } from "@/src/components/shared/contacts";

export default function Home() {
  return (
    <div className="flex min-h-screen font-sans justify-center">
      <main className="min-h-screen w-full max-w-7xl flex-col items-center py-32 px-16 sm:items-start space-y-20">
        <div className="flex flex-col md:flex-row items-center md:items-end w-full gap-10 md:gap-16">
          <div className="flex-shrink-0">
            <Image
              src="/portrait-isabella.png"
              alt="Isabella"
              width={400}
              height={400}
              priority
              className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-6 items-center md:items-start text-center md:text-left">
            <Image
              src="/butterfly-icon.png"
              alt="Butterfly"
              width={120}
              height={120}
              className="w-16 h-16 md:w-28 md:h-28"
              priority
            />

            <h1 className="text-4xl sm:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
              <span className="text-gray-700 dark:text-white">
                Hello, je m'appelle <span className="text-purple-700 dark:text-purple-400">Isabella</span> !
              </span>
            </h1>

            <p className="text-zinc-600 dark:text-white leading-relaxed text-lg max-w-md md:max-w-2xl">
              👋 <strong>Bienvenue sur mon portfolio !</strong><br />
              Développeuse FullStack passionnée, originaire de Nouvelle-Calédonie et basée à Orléans. Après un BTS SIO option SLAM, j’ai choisi de me spécialiser dans le développement web et la création de solutions complètes, du front-end au back-end.
            </p>
          </div>
        </div>

        <h1 className="text-5xl md:text-4xl font-bold mb-6 tracking-tight">
          <span className=" text-gray-700 bg-clip-text dark:text-white">
            mes <span className="text-purple-700 dark:text-purple-400">projets</span>.
          </span>
        </h1>
        <Projets limit={4} />
        <h1 className="text-5xl md:text-4xl font-bold mb-6 tracking-tight">
          <span className=" text-gray-700 bg-clip-text dark:text-white">
            mes <span className="text-purple-700 dark:text-purple-400">expériences</span>.
          </span>
        </h1>
        <Experiences />
        <h1 className="text-5xl md:text-4xl font-bold mb-6 tracking-tight text-center">
          <span className="text-gray-700 bg-clip-text dark:text-white">
            contactez-<span className="text-purple-700 dark:text-purple-400">moi</span>.
          </span>
        </h1>
        <p className="text-zinc-600 text-center dark:text-zinc-300 leading-relaxed text-lg mb-4">
          N'hésitez pas à me contacter ou à consulter mes projets et mon LinkedIn.
        </p>
        <ProfessionalConnect />
      </main>
    </div>
  );
}
