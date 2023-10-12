import { ReactNode, useContext } from "react";
import { stepsContext } from "../../context/StepsContextProvider";
import { formContext } from "../../context/FormContextProvider";

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
    const validity = useContext(formContext);

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
                disabled={!validity.formIsValid}
                onClick={setIndex}
                type={type || "button"}
                className={`${className} ${
                    !validity.formIsValid ? "opacity-80" : ""
                }`}
            >
                {children}
            </button>
        </>
    );
}
