import { useContext } from "react";
import { stepsContext } from "../../context/StepsContextProvider";
import { planContext } from "../../context/PlanContextProvider";

export function Finish() {
    const { index, goTo } = useContext(stepsContext);
    const { plan } = useContext(planContext);

    const multiplier = plan.billing === "MONTHLY" ? 1 : 10;
    const total = (plan.planPrice + plan.addonPrice) * multiplier;

    function addonHanlder(addon: Addons) {
        switch (addon) {
            case "ONLINE":
                return { name: "Online service", price: 1 };
            case "STORAGE":
                return { name: "Larger Storage", price: 2 };
            case "PROFILE":
                return { name: "Custom Profile", price: 2 };
        }
    }

    function planHandler() {
        switch (plan.type) {
            case "ARCADE":
                return { name: "Arcade", price: 9 };
            case "ADVANCED":
                return { name: "Advanced", price: 12 };
            case "PRO":
                return { name: "Pro", price: 15 };
        }
    }

    return (
        <div className={`${index !== 3 ? "hidden" : ""}`}>
            <h1 className="text-marine-blue text-[2rem] font-bold mb-3">
                Finishing up
            </h1>
            <p className="text-sm text-cool-gray mb-md">
                Double-check everything looks OK before confirming.
            </p>
            <div className="grid gap-sm p-5 bg-purplish-blue/5 rounded-md">
                <div className="flex justify-between">
                    <div>
                        <h2 className="capitalize text-marine-blue font-medium">
                            {planHandler().name}
                            <span>
                                {plan.billing === "MONTHLY"
                                    ? "(Monthly)"
                                    : "(Annualy)"}
                            </span>
                        </h2>
                        <span
                            onClick={() => goTo(1)}
                            className="text-xs text-cool-gray underline cursor-pointer"
                        >
                            Change
                        </span>
                    </div>
                    <span className="font-bold text-marine-blue plan-price">
                        {plan.billing === "MONTHLY"
                            ? `$${planHandler().price}/mo`
                            : `$${planHandler().price * 10}/yr`}
                    </span>
                </div>
                {plan.addons.length > 0 && (
                    <div className="border-t-[1px] border-t-light-gray space-y-5 pt-5">
                        {plan.addons.map((el) => (
                            <div
                                key={el}
                                className="text-xs flex justify-between"
                            >
                                <span className="text-cool-gray">
                                    {addonHanlder(el).name}
                                </span>
                                <span className="text-marine-blue addon-price">
                                    {plan.billing === "MONTHLY"
                                        ? `+$${addonHanlder(el).price}/mo`
                                        : `+$${addonHanlder(el).price * 10}/yr`}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex justify-between p-5">
                <h2 className="text-cool-gray text-xs">
                    Total{" "}
                    {plan.billing === "MONTHLY" ? "(per month)" : "(per year)"}:
                </h2>
                <span className="text-purplish-blue font-medium">{`$${total}/${
                    plan.billing === "MONTHLY" ? "mo" : "yr"
                }`}</span>
            </div>
        </div>
    );
}
