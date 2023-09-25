import { useContext } from "react";
import { stepsContext } from "../../context/StepsContextProvider";
import { PlanBilling } from "./PlanBilling";
import { planContext } from "../../context/PlanContextProvider";

export function Plan() {
    const step = useContext(stepsContext);
    const { plan, setPlan } = useContext(planContext);

    function planHandler(addon: Plan) {
        setPlan({ type: addon });
    }

    return (
        <div className={`${step.index !== 1 ? "hidden" : ""}`}>
            <h1 className="text-marine-blue text-[2rem] font-bold mb-3">
                Select your plan
            </h1>
            <p className="text-sm text-cool-gray mb-md">
                You have the option of monthly or yearly billing.
            </p>
            <div className="grid gap-sm md:flex">
                <div
                    onClick={() => planHandler("ARCADE")}
                    className={`p-sm flex flex-1 items-center border border-cool-gray/50 rounded gap-2 transition-all ease-linear cursor-pointer md:grid md:gap-10 ${
                        plan.type === "ARCADE"
                            ? "bg-purplish-blue/5 border-purplish-blue"
                            : "hover:border-purplish-blue/70"
                    }`}
                >
                    <img
                        src="/assets/images/icon-arcade.svg"
                        alt="arcade plan"
                    />
                    <div className="flex items-center gap-2 md:grid">
                        <span className="text-sm">Arcade</span>
                        <span className="text-xs text-cool-gray">
                            {plan.billing === "MONTHLY" ? "$9/mo" : "$90/yr"}
                        </span>
                        {plan.billing === "ANNUALY" && (
                            <span className="text-[10px]">2 Months free</span>
                        )}
                    </div>
                </div>

                <div
                    onClick={() => planHandler("ADVANCED")}
                    className={`p-sm flex flex-1 items-center border border-cool-gray/50 rounded gap-2 transition-all ease-linear cursor-pointer md:grid md:gap-10 ${
                        plan.type === "ADVANCED"
                            ? "bg-purplish-blue/5 border-purplish-blue"
                            : "hover:border-purplish-blue/70"
                    }`}
                >
                    <img
                        src="/assets/images/icon-advanced.svg"
                        alt="arcade plan"
                    />
                    <div className="flex items-center gap-2 md:grid">
                        <span className="text-sm">Advanced</span>
                        <span className="text-xs text-cool-gray">
                            {plan.billing === "MONTHLY" ? "$12/mo" : "$120/yr"}
                        </span>
                        {plan.billing === "ANNUALY" && (
                            <span className="text-[10px]">2 Months free</span>
                        )}
                    </div>
                </div>

                <div
                    onClick={() => planHandler("PRO")}
                    className={`p-sm flex flex-1 items-center border border-cool-gray/50 rounded gap-2 transition-all ease-linear cursor-pointer md:grid md:gap-10 ${
                        plan.type === "PRO"
                            ? "bg-purplish-blue/5 border-purplish-blue"
                            : "hover:border-purplish-blue/70"
                    }`}
                >
                    <img src="/assets/images/icon-pro.svg" alt="arcade plan" />
                    <div className="flex items-center gap-2 md:grid">
                        <span className="text-sm">Pro</span>
                        <span className="text-xs text-cool-gray">
                            {plan.billing === "MONTHLY" ? "$15/mo" : "$150/yr"}
                        </span>
                        {plan.billing === "ANNUALY" && (
                            <span className="text-[10px]">2 Months free</span>
                        )}
                    </div>
                </div>
            </div>
            <PlanBilling />
        </div>
    );
}
