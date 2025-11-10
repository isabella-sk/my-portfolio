import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";

function Experiences() {
    return (
        <Tabs defaultValue="tab-1" orientation="vertical" className="flex w-full gap-2">
            <TabsList className="flex-col gap-1 rounded-none bg-transparent px-1 py-0 text-foreground">
                <TabsTrigger
                    value="tab-1"
                    className="relative w-full justify-start font-bold transition-colors duration-200
                        after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5
                        hover:bg-accent hover:text-foreground
                        data-[state=active]:text-purple-700
                        data-[state=active]:dark:text-purple-400
                        data-[state=active]:font-bold
                        data-[state=active]:bg-transparent
                        data-[state=active]:shadow-none
                        data-[state=active]:after:bg-primary
                        data-[state=active]:dark:after:bg-purple-400
                        data-[state=active]:hover:bg-accent"
                >
                    2025 - 2024
                </TabsTrigger>
                <TabsTrigger
                    value="tab-2"
                    className="relative w-full justify-start font-bold transition-colors duration-200
                        after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5
                        hover:bg-accent hover:text-foreground
                        data-[state=active]:text-purple-700
                        data-[state=active]:dark:text-purple-400
                        data-[state=active]:font-bold
                        data-[state=active]:bg-transparent
                        data-[state=active]:shadow-none
                        data-[state=active]:after:bg-primary
                        data-[state=active]:dark:after:bg-purple-400
                        data-[state=active]:hover:bg-accent"
                >
                    2023
                </TabsTrigger>
                <TabsTrigger
                    value="tab-3"
                    className="relative w-full justify-start font-bold transition-colors duration-200
                        after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5
                        hover:bg-accent hover:text-foreground
                        data-[state=active]:text-purple-700
                        data-[state=active]:dark:text-purple-400
                        data-[state=active]:font-bold
                        data-[state=active]:bg-transparent
                        data-[state=active]:shadow-none
                        data-[state=active]:after:bg-primary
                        data-[state=active]:dark:after:bg-purple-400
                        data-[state=active]:hover:bg-accent"
                >
                    Years
                </TabsTrigger>
            </TabsList>
            <div className="grow rounded-lg border border-gray-500 text-start dark:border-white">
                <TabsContent value="tab-1">
                    <div className="p-4 text-sm text-foreground">
                        <h3 className="text-lg font-semibold mb-2">Développeuse web junior, <a href="https://skazy.nc/" className="font-bold text-purple-800 dark:text-purple-400">@Skazy</a></h3>
                        <ul className="max-w-md space-y-1 text-gray-700 list-disc list-inside dark:text-gray-300">
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
                        <h3 className="text-lg font-semibold mb-2">Stagiaire, <a href="https://skazy.nc/" className="font-bold text-purple-800 dark:text-purple-400">@Skazy</a></h3>
                        <ul className="space-y-1 text-gray-700 list-disc list-inside dark:text-gray-300">
                            <li>
                                Gestion de contenu, maintenance et intégration web.
                            </li>
                            <li>
                                Réalisation de pages web statiques et responsives (HTML, CSS, PUG, Bootstrap, UIKit)
                            </li>
                            <li>
                                Participation un projet de refonte du site de la Mairie de Mont-Dore (iintégration sur Drupal).
                            </li>
                        </ul>
                    </div>
                </TabsContent>
                <TabsContent value="tab-3">
                    <div className="p-4 text-sm text-foreground">
                        <h3 className="text-lg font-semibold mb-2">Vendeuse, <a href="https://skazy.nc/" className="font-bold text-purple-800 dark:text-purple-400">@Skazy</a></h3>
                        <ul className="space-y-1 text-gray-700 list-disc list-inside dark:text-gray-300">
                            <li>
                                Gestion de contenu, maintenance et intégration web.
                            </li>
                            <li>
                                Réalisation de pages web statiques et responsives (HTML, CSS, PUG, Bootstrap, UIKit)
                            </li>
                            <li>
                                Participation un projet de refonte du site de la Mairie de Mont-Dore (iintégration sur Drupal).
                            </li>
                        </ul>
                    </div>
                </TabsContent>
            </div>
        </Tabs>
    );
}

export { Experiences };
