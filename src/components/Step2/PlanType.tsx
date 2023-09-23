import { useContext } from "react";
import { RangeInput } from "../UI/RangeInput";
import { planContext } from "../../context/PlanContextProvider";

export function PlanType() {
    const plan = useContext(planContext);

    return (
        <div className="flex justify-center gap-5 py-sm bg-purplish-blue/5">
            <span
                className={`text-[13px] font-medium ${
                    plan.planType === "MONTHLY"
                        ? "text-marine-blue"
                        : "text-cool-gray"
                }`}
            >
                Monthly
            </span>
            <RangeInput
                sliderClass="cursor-pointer flex p-[3px] bg-marine-blue rounded-full w-[2.19rem]"
                thumbClass="bg-white aspect-square w-sm"
            />
            <span
                className={`text-[13px] font-medium ${
                    plan.planType === "ANNUALY"
                        ? "text-marine-blue"
                        : "text-cool-gray"
                }`}
            >
                Annualy
            </span>
        </div>
    );
}
