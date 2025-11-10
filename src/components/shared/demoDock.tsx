'use client';

import {
    HomeIcon,
    Mail,
    Sun,
    Moon,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from "@/src/components/shared/dock";
import Link from "next/link";
import { useTheme } from "@/src/components/shared/theme-provider";
import { IconCode, IconBriefcase } from '@tabler/icons-react';

const data = [
    {
        title: 'Accueil',
        icon: <HomeIcon className="text-neutral-600 dark:text-neutral-300" />,
        href: '/',
    },
    {
        title: 'Projets',
        icon: <IconCode className="text-neutral-600 dark:text-neutral-300" />,
        href: '/projets',
    },
    {
        title: 'Contact',
        icon: <Mail className="text-neutral-600 dark:text-neutral-300" />,
        href: '/contact',
    },
];

export function ApplyDock() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
            <Dock className="items-end pb-3">
                {data.map((item, idx) => (
                    <DockItem
                        key={idx}
                        className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
                    >
                        <DockLabel>{item.title}</DockLabel>
                        <DockIcon>
                            <Link href={item.href} aria-label={item.title} className="flex items-center justify-center w-full h-full">
                                {item.icon}
                            </Link>
                        </DockIcon>
                    </DockItem>
                ))}

                {/* Bouton de thème avec icônes Lucide */}
                <DockItem className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800">
                    <DockLabel>Thème</DockLabel>
                    <DockIcon>
                        <button
                            onClick={toggleTheme}
                            className="flex items-center justify-center w-full h-full relative"
                            aria-label="Changer le thème"
                        >
                            {theme === "light" ? (
                                <Moon className="h-6 w-6 text-neutral-700 transition-transform duration-300 hover:scale-110" />
                            ) : (
                                <Sun className="h-6 w-6 text-yellow-400 transition-transform duration-300 hover:scale-110" />
                            )}
                        </button>
                    </DockIcon>
                </DockItem>
            </Dock>
        </div>
    );
}
