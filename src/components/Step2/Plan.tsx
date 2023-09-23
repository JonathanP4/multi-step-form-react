import { useContext, useState } from "react";
import { stepsContext } from "../../context/StepsContextProvider";
import { PlanType } from "./PlanType";
import { planContext } from "../../context/PlanContextProvider";

type Plans = "ARCADE" | "ADVANCED" | "PRO";

export function Plan() {
    const step = useContext(stepsContext);
    const plan = useContext(planContext);

    const [plans, setPlan] = useState<Plans>("ARCADE");

    return (
        <div className={`${step.index !== 1 ? "hidden" : ""}`}>
            <h1 className="text-marine-blue text-[2rem] font-bold mb-3">
                Select your plan
            </h1>
            <p className="text-sm text-cool-gray mb-md">
                You have the option of monthly or yearly billing.
            </p>
            <div className="grid gap-sm">
                <div
                    onClick={() => setPlan("ARCADE")}
                    className={`p-sm flex items-center border border-cool-gray/50 rounded gap-[0.625rem] transition-all ease-linear cursor-pointer ${
                        plans === "ARCADE"
                            ? "bg-purplish-blue/5 border-purplish-blue"
                            : "hover:border-purplish-blue/70"
                    }`}
                >
                    <img
                        src="/assets/images/icon-arcade.svg"
                        alt="arcade plan"
                    />
                    <span className="text-sm">Arcade</span>
                    <span className="text-xs text-cool-gray">
                        {plan.planType === "MONTHLY" ? "$9/mo" : "$90/yr"}
                    </span>
                    {plan.planType === "ANNUALY" && (
                        <span className="text-[10px]">2 Months free</span>
                    )}
                </div>

                <div
                    onClick={() => setPlan("ADVANCED")}
                    className={`p-sm flex items-center border border-cool-gray/50 rounded gap-[0.625rem] transition-all ease-linear cursor-pointer ${
                        plans === "ADVANCED"
                            ? "bg-purplish-blue/5 border-purplish-blue"
                            : "hover:border-purplish-blue/70"
                    }`}
                >
                    <img
                        src="/assets/images/icon-advanced.svg"
                        alt="arcade plan"
                    />
                    <span className="text-sm">Advanced</span>
                    <span className="text-xs text-cool-gray">
                        {plan.planType === "MONTHLY" ? "$12/mo" : "$120/yr"}
                    </span>
                    {plan.planType === "ANNUALY" && (
                        <span className="text-[10px]">2 Months free</span>
                    )}
                </div>

                <div
                    onClick={() => setPlan("PRO")}
                    className={`p-sm flex items-center border border-cool-gray/50 rounded gap-[0.625rem] transition-all ease-linear cursor-pointer ${
                        plans === "PRO"
                            ? "bg-purplish-blue/5 border-purplish-blue"
                            : "hover:border-purplish-blue/70"
                    }`}
                >
                    <img src="/assets/images/icon-pro.svg" alt="arcade plan" />
                    <span className="text-sm">Pro</span>
                    <span className="text-xs text-cool-gray">
                        {plan.planType === "MONTHLY" ? "$15/mo" : "$150/yr"}
                    </span>
                    {plan.planType === "ANNUALY" && (
                        <span className="text-[10px]">2 Months free</span>
                    )}
                </div>
            </div>
            <PlanType />
        </div>
    );
}
