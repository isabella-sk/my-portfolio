"use client";

import { cn } from "@/lib/utils";
import {
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconTerminal2,
} from "@tabler/icons-react";
import { useState } from "react";

export function Projets() {
  const [visibleCount, setVisibleCount] = useState(4);

  const features = [
    {
      title: "Portfolio",
      description: "Concevoir mon portfolio avec React.",
      icon: <IconTerminal2 />,
      techs: ["Symfony", "PHP", "MySQL"],
    },
    {
      title: "Blog",
      description: "Projet à réaliser en classe avec techno Symfony v.7",
      icon: <IconEaseInOut />,
      techs: ["Symfony"],
    },
    {
      title: "Site garage",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Projet 4",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Projet 5",
      description: "Un projet supplémentaire",
      icon: <IconCloud />,
    },
    {
      title: "Projet 6",
      description: "Encore un autre projet",
      icon: <IconEaseInOut />,
    },
  ];

  const toggleVisible = () => {
    setVisibleCount(visibleCount === 4 ? features.length : 4);
  };

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {features.slice(0, visibleCount).map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>

      {features.length > 4 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={toggleVisible}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            {visibleCount === 4 ? "Afficher plus" : "Afficher moins"}
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
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  techs?: string[];
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-l py-10 relative group/feature dark:border-neutral-800",
        (index === 0) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800",
        (index === 3) && "lg:border-r dark:border-neutral-800"

      )}
    >
      <div className="mb-4 relative z-10 px-10 text-purple-600 dark:text-purple-800">
        {icon}
      </div>

      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-purple-900 group-hover/feature:bg-purple-600 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>

      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>

      {techs && techs.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2 px-10">
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
    </div>
  );
};
