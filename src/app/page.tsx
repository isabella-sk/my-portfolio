import Image from "next/image";
import React from "react";
import { Projets } from "@/src/components/ui/projects";
import { Experiences } from "../components/ui/demoTabs";

export default function Home() {
  return (
    <div className="flex min-h-screen font-sans justify-center">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center py-32 px-16 sm:items-start space-y-8">
        <div className="flex flex-col">
          <div className="flex items-center mb-8 gap-5">
            <Image
              src="/butterfly-icon.png"
              alt="Butterfly"
              width={120}
              height={100}
              priority
            />
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Hello, je m'appelle Isabella !
            </h1>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg text-justify max-w-full mx-28">
            👋 <strong>Bienvenue sur mon portfolio !</strong><br />
            Je viens du Pacifique, en Nouvelle-Calédonie.
            Après avoir obtenu mon BTS SIO option SLAM, j’ai poursuivi mes études en Bachelor Développeur FullStack à l’école Coda à Orléans.<br />
            Passionnée par le développement web, j’aime autant créer des interfaces modernes que découvrir la logique du back-end.
            Curieuse et motivée, j’apprends souvent en autodidacte et je m’intéresse de plus en plus à la cybersécurité.<br />
            Je suis actuellement à la recherche d’une <strong>alternance pour 2025/2026</strong> (1 semaine école / 3 semaines entreprise) afin de renforcer mes compétences et participer à des projets concrets et inspirants.
          </p>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight">Projet</h2>
        <Projets />
        <h2 className="text-2xl font-semibold tracking-tight">Expériences</h2>
        <Experiences />
      </main>
    </div>
  );
}
