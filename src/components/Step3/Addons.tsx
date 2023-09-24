import { useContext } from "react";
import { stepsContext } from "../../context/StepsContextProvider";
import { planContext } from "../../context/PlanContextProvider";

export function Addons() {
    const context = useContext(stepsContext);
    const { plan, setAddons } = useContext(planContext);

    function addonHandler(addon: Addons) {
        setAddons(addon);
    }

    return (
        <div className={`${context.index !== 2 ? "hidden" : ""}`}>
            <h1 className="text-marine-blue text-[2rem] font-bold mb-3">
                Pick add-ons
            </h1>
            <p className="text-sm text-cool-gray mb-md">
                Add-ons help enhance your gaming experience.
            </p>
            <div className="grid gap-sm leading-none">
                <div
                    onClick={() => addonHandler("ONLINE")}
                    className={`flex items-center gap-5 p-sm border border-cool-gray/50 rounded transition-all ease-linear cursor-pointer ${
                        plan.addons.includes("ONLINE")
                            ? "bg-purplish-blue/5 border-purplish-blue"
                            : "hover:border-purplish-blue/70"
                    }`}
                >
                    <input
                        readOnly
                        checked={plan.addons.includes("ONLINE")}
                        type="checkbox"
                        name="online_service"
                    />
                    <div>
                        <p className="text-sm">Online service</p>
                        <span className="text-xs text-cool-gray">
                            Access to multiplayer games
                        </span>
                    </div>
                    <span className="text-sm text-purplish-blue">
                        {plan.billing === "MONTHLY" ? "+$1/mo" : "+$10/yr"}
                    </span>
                </div>

                <div
                    onClick={() => addonHandler("STORAGE")}
                    className={`flex items-center gap-5 p-sm border border-cool-gray/50 rounded transition-all ease-linear cursor-pointer ${
                        plan.addons.includes("STORAGE")
                            ? "bg-purplish-blue/5 border-purplish-blue"
                            : "hover:border-purplish-blue/70"
                    }`}
                >
                    <input
                        readOnly
                        checked={plan.addons.includes("STORAGE")}
                        type="checkbox"
                        name="larger_storage"
                    />
                    <div>
                        <p className="text-sm">Larger storage</p>
                        <span className="text-xs text-cool-gray">
                            Extra 1TB of cloud save
                        </span>
                    </div>
                    <span className="text-sm text-purplish-blue">
                        {plan.billing === "MONTHLY" ? "+$2/mo" : "+$20/yr"}
                    </span>
                </div>

                <div
                    onClick={() => addonHandler("PROFILE")}
                    className={`flex items-center gap-5 p-sm border border-cool-gray/50 rounded transition-all ease-linear cursor-pointer ${
                        plan.addons.includes("PROFILE")
                            ? "bg-purplish-blue/5 border-purplish-blue"
                            : "hover:border-purplish-blue/70"
                    }`}
                >
                    <input
                        readOnly
                        checked={plan.addons.includes("PROFILE")}
                        type="checkbox"
                        name="custom_profile"
                    />
                    <div>
                        <p className="text-sm">Customizable Profile</p>
                        <span className="text-xs text-cool-gray">
                            Custom theme on your profile
                        </span>
                    </div>
                    <span className="text-sm text-purplish-blue">
                        {plan.billing === "MONTHLY" ? "+$2/mo" : "+$20/yr"}
                    </span>
                </div>
            </div>
        </div>
    );
}
