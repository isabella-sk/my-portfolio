"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  IconDatabase,
  IconCarGarage,
  IconArticle,
  IconUser,
  IconBrandGithub,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { useState } from "react";

export function Projets({ limit }: { limit?: number }) {
  const features = [
    {
      title: "Portfolio",
      description: "Concevoir mon portfolio avec React.",
      icon: <IconUser />,
      techs: ["React", "Tailwind", "TypeScript"],
      image: "/mockup-portfolio.png",
      github: "https://github.com/isabella-sk/my-portfolio",
      slug: "portfolio",
    },
    {
      title: "Blog",
      description: "Projet à réaliser en classe avec Symfony v.7",
      icon: <IconArticle />,
      techs: ["Symfony"],
      image: "/mockup-mytechblog.png",
      github: "https://github.com/isabella-sk/mytechblog",
      slug: "blog",
    },
    {
      title: "Site garage",
      description:
        "Site de présentation pour un garage, avec gestion des véhicules et des services.",
      icon: <IconCarGarage />,
      techs: ["PHP", "MySQL", "Bootstrap", "Symfony"],
      image: "/mockup-garage.png",
      github: "https://github.com/isabella-sk/projetGarage",
      slug: "garage",
    },
    {
      title: "Projet Data Science",
      description:
        "Projet Data Science à CODA : préparation des données, analyse exploratoire, visualisation et création de modèles prédictifs.",
      icon: <IconDatabase />,
      techs: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly"],
      image: "/mockup-code.png",
      github: "https://github.com/isabella-sk",
      slug: "projet-4",
    },
    {
      title: "Projet 5",
      description: "Un projet supplémentaire",
      icon: <IconDatabase />,
      techs: ["PHP", "MySQL", "Bootstrap"],
      image: "/mockup-code.png",
      github: "https://github.com/isabella-sk",
      slug: "projet-5",
    },
    {
      title: "Projet 6",
      description:
        "Site de présentation pour un garage, avec gestion des véhicules et des services.",
      icon: <IconArticle />,
      techs: ["PHP", "MySQL", "Bootstrap"],
      image: "/mockup-code.png",
      github: "https://github.com/isabella-sk",
      slug: "projet-6",
    },
  ];

  const initialCount = limit ?? features.length;
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const toggleVisible = () => {
    if (!limit) return;
    setVisibleCount(visibleCount === limit ? features.length : limit);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {features.slice(0, visibleCount).map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>

      {limit && features.length > limit && (
        <div className="flex justify-center mt-6">
          <button
            onClick={toggleVisible}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition cursor-pointer"
          >
            {visibleCount === limit ? "Afficher plus" : "Afficher moins"}
          </button>
        </div>
      )}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  techs,
  image,
  index,
  github,
  slug,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  techs?: string[];
  image?: string;
  index: number;
  github?: string;
  slug?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col h-full lg:border-l pb-5 relative group/feature dark:border-neutral-800 rounded-2xl shadow-md bg-white dark:bg-neutral-900 overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {image && (
        <div className="w-full h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover/feature:scale-105"
          />
        </div>
      )}

      <div className="flex flex-col flex-grow pt-5">
        <div className="mb-4 pl-6 text-purple-600 dark:text-purple-400">
          {icon}
        </div>

        <div className="text-lg font-bold mb-2 relative z-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-purple-400 group-hover/feature:bg-purple-600 transition-all duration-200 origin-center" />
          <span className="pl-6 group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
            {title}
          </span>
        </div>

        <p className="text-sm px-6 text-neutral-600 dark:text-neutral-300 mb-3">
          {description}
        </p>

        {techs && techs.length > 0 && (
          <div className="flex flex-wrap gap-2 px-6 mb-4">
            {techs.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium rounded-full bg-purple-600 text-white dark:bg-[#c88eef] dark:text-black"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-2 mt-auto pt-4 pl-6">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex p-2 gap-1.5 items-center text-xs font-medium rounded-full text-white bg-gray-800 border dark:hover:bg-white dark:hover:border-white dark:text-white dark:hover:text-black"
            >
              <IconBrandGithub size={16} />
            </a>
          )}

          {slug && (
            <Link
              href={`/projets/${slug}`}
              className="flex px-4 py-2 gap-1.5 items-center text-xs font-bold rounded-full text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-400 dark:hover:text-black transition"
            >
              Voir le projet
              <IconArrowUpRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
