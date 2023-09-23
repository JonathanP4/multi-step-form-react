import { ReactNode, useContext } from "react";
import { stepsContext } from "../../context/StepsContextProvider";

interface ButtonProps {
    children: ReactNode;
    className?: string;
    forwards?: boolean;
    type?: "button" | "reset" | "submit";
}

export default function Button({
    children,
    className,
    type,
    forwards = true,
}: ButtonProps) {
    const step = useContext(stepsContext);

    function setIndex() {
        if (forwards) {
            step.goNext();
        } else {
            step.goBack();
        }
    }

    return (
        <>
            <button
                onClick={setIndex}
                type={type || "button"}
                className={className}
            >
                {children}
            </button>
        </>
    );
}
