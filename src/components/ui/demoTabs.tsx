import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";

function Experiences() {
    return (
        <Tabs
            defaultValue="tab-1"
            orientation="vertical"
            className="flex w-full gap-2 flex-col md:flex-row"
        >
            <TabsList className="flex-row md:flex-col gap-1 rounded-none bg-transparent px-1 py-0 text-foreground">
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
                        <h3 className="text-lg font-semibold mb-2">
                            Développeuse web junior{" "}
                            <a href="https://skazy.nc/" className="font-bold text-purple-800 dark:text-purple-400">
                                @Skazy
                            </a>
                        </h3>
                        <ul className="max-w-md space-y-1 text-gray-700 list-disc list-inside dark:text-gray-300">
                            <li>Maintenance de sites web (WordPress, Drupal, Joomla)</li>
                            <li>Maintenance évolutive et corrective</li>
                            <li>Intégration web et optimisation front-end</li>
                        </ul>
                    </div>
                </TabsContent>

                <TabsContent value="tab-2">
                    <div className="p-4 text-sm text-foreground">
                        <h3 className="text-lg font-semibold mb-2">
                            Stagiaire{" "}
                            <a href="https://skazy.nc/" className="font-bold text-purple-800 dark:text-purple-400">
                                @Skazy
                            </a>
                        </h3>
                        <ul className="space-y-1 text-gray-700 list-disc list-inside dark:text-gray-300">
                            <li>Gestion de contenu, maintenance et intégration web</li>
                            <li>Création de pages responsives (HTML, CSS, PUG, Bootstrap, UIKit)</li>
                            <li>Participation à la refonte du site de la mairie du Mont-Dore</li>
                        </ul>
                    </div>
                </TabsContent>

                <TabsContent value="tab-3">
                    <div className="p-4 text-sm text-foreground">
                        <h3 className="text-lg font-semibold mb-2">Vendeuse</h3>
                        <ul className="space-y-1 text-gray-700 list-disc list-inside dark:text-gray-300">
                            <li>Relation client et vente</li>
                            <li>Mise en rayon / gestion des stocks</li>
                            <li>Organisation et merchandising</li>
                        </ul>
                    </div>
                </TabsContent>
            </div>
        </Tabs>
    );
}

export { Experiences };
