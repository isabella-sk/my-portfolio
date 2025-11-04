import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { Link } from "lucide-react";
import Image from "next/image";

function Experiences() {
    return (
        <Tabs defaultValue="tab-1" orientation="vertical" className="flex w-full gap-2">
            <TabsList className="flex-col gap-1 rounded-none bg-transparent px-1 py-0 text-foreground">
                <TabsTrigger
                    value="tab-1"
                    className="relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
                >
                    2025 - 2024
                </TabsTrigger>

                <TabsTrigger
                    value="tab-2"
                    className="relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
                >
                    2023
                </TabsTrigger>
                <TabsTrigger
                    value="tab-3"
                    className="relative w-full justify-start after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
                >
                    Years
                </TabsTrigger>
            </TabsList>
            <div className="grow rounded-lg border border-border text-start">
                <TabsContent value="tab-1">
                    <div className="p-4 text-sm text-foreground">
                        <h3 className="text-lg font-semibold mb-2">Développeuse web junior <a href="https://skazy.nc/" className="font-bold text-purple-800">@Skazy</a></h3>
                        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                            <li>
                                Maintenance de sites web (WordPress, Drupal, Joomla)
                            </li>
                            <li>
                                Maintenance évolutive et corrective
                            </li>
                            <li>
                                Inclusion of at least one special character, e.g., ! @ # ?
                            </li>
                        </ul>
                    </div>
                </TabsContent>
                <TabsContent value="tab-2">
                    <div className="p-4 text-sm text-foreground">
                        <h3 className="text-lg font-semibold mb-2">Stagiaire <a href="https://skazy.nc/" className="font-bold text-purple-800">@Skazy</a></h3>
                        <ul>
                            <li>
                                <p className="px-4 py-1.5 text-muted-foreground">
                                    Gestion de contenu, maintenance et intégration web.
                                </p>
                            </li>
                            <li>
                                <p className="px-4 py-1.5 text-muted-foreground">
                                    Réalisation de pages web statiques et responsives (HTML, CSS, PUG, Bootstrap, UIKit).
                                </p>
                            </li>
                            <li>
                                <p className="px-4 py-1.5 text-muted-foreground">
                                    Participation un projet de refonte du site de la Mairie de Mont-Dore (iintégration sur Drupal).
                                </p>
                            </li>
                        </ul>
                    </div>
                </TabsContent>
                <TabsContent value="tab-3">
                    <p className="px-4 py-1.5 text-xs text-muted-foreground">Content for Tab 3</p>
                </TabsContent>
            </div>
        </Tabs>
    );
}

export { Experiences };
