import { useContext } from "react";
import Button from "./Button";
import { stepsContext } from "../../context/StepsContextProvider";

export function NextStep() {
    const step = useContext(stepsContext);
    return (
        <div
            className={`${
                step.index > 0 ? "justify-between" : "justify-end"
            } bg-white flex p-sm fixed bottom-0 w-full`}
        >
            {step.index > 0 && (
                <Button forwards={false} className="text-cool-gray">
                    Go Back
                </Button>
            )}

            <Button className="bg-marine-blue text-white py-sm px-[25px] rounded-lg">
                Next Step
            </Button>
        </div>
    );
}
