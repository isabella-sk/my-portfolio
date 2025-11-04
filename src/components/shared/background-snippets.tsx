"use client";
import { useTheme } from "@/src/components/shared/theme-provider";

export const BackgroundRadial = () => {
    const { theme } = useTheme();

    return theme === "dark" ? (
        <div className="fixed inset-0 -z-10 h-full w-full bg-[#0a0a0a] bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]">
            <div className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#0a0a0a_40%,#191970_100%)]"></div>
        </div>
    ) : (
        <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]">
            <div className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        </div>
    );
};
