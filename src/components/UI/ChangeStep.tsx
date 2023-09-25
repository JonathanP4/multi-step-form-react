import { useContext } from "react";
import Button from "./Button";
import { stepsContext } from "../../context/StepsContextProvider";

export function ChangeStep({ className }: { className?: string }) {
    const step = useContext(stepsContext);
    return (
        <div className={`${className || ""}`}>
            <Button
                forwards={false}
                className={`${
                    step.index > 0 ? "" : "invisible"
                } text-cool-gray`}
            >
                Go Back
            </Button>

            <Button
                className={`${
                    step.index < 3 ? "bg-marine-blue" : "bg-purplish-blue"
                } text-white py-sm px-[25px] rounded-lg`}
            >
                {step.index < 3 ? "Next Step" : "Confirm"}
            </Button>
        </div>
    );
}
