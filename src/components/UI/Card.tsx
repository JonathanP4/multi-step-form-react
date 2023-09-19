import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
    return (
        <div className="rounded-xl mx-4 p-md shadow-lg bg-white -mt-[73px] z-10 relative">
            {children}
        </div>
    );
}
