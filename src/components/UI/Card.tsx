import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { ChangeStep } from "./ChangeStep";

export function Card({ children }: { children: ReactNode }) {
    return (
        <div className="rounded-xl mx-4 p-md shadow-lg bg-white -mt-[73px] z-10 relative lg:mt-0 lg:flex lg:min-h-[600px] lg:p-4 lg:w-[900px]">
            <Sidebar className="p-8 rounded-lg w-[274px] hidden lg:block" />
            <div className="lg:flex lg:flex-col lg:justify-between lg:pt-8 lg:pb-4 lg:px-20 flex-1">
                {children}
                <ChangeStep className="hidden lg:flex justify-between" />
            </div>
        </div>
    );
}
