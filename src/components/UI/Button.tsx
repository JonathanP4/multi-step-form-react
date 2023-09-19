import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    className?: string;
    type?: "button" | "reset" | "submit";
}

export default function Button({ children, className, type }: ButtonProps) {
    return (
        <button type={type || "button"} className={className}>
            {children}
        </button>
    );
}
