import { useContext } from "react";
import { stepsContext } from "../../context/StepsContextProvider";

export function Finish() {
    const context = useContext(stepsContext);
    return (
        <div className={`${context.index !== 3 ? "hidden" : ""}`}>
            <h1 className="text-marine-blue text-[2rem] font-bold mb-3">
                Finishing up
            </h1>
            <p className="text-sm text-cool-gray mb-md">
                Double-check everything looks OK before confirming.
            </p>
            <div className="grid gap-sm">
                <div className="p-sm flex items-center border border-cool-gray/50 rounded gap-[0.625rem] transition-all ease-linear cursor-pointer hover:border-purplish-blue/70">
                    <img
                        src="/assets/images/icon-arcade.svg"
                        alt="arcade plan"
                    />
                    <span className="text-sm">Arcade</span>
                    <span className="text-xs text-cool-gray">$9/mo</span>
                </div>

                <div className="p-sm flex items-center border border-cool-gray/50 rounded gap-[0.625rem] transition-all ease-linear cursor-pointer hover:border-purplish-blue/70">
                    <img
                        src="/assets/images/icon-advanced.svg"
                        alt="arcade plan"
                    />
                    <span className="text-sm">Advanced</span>
                    <span className="text-xs text-cool-gray">$12/mo</span>
                </div>

                <div className="p-sm flex items-center border border-cool-gray/50 rounded gap-[0.625rem] cursor-pointer transition-all ease-linear hover:border-purplish-blue/70">
                    <img src="/assets/images/icon-pro.svg" alt="arcade plan" />
                    <span className="text-sm">Pro</span>
                    <span className="text-xs text-cool-gray">$15/mo</span>
                </div>
            </div>
        </div>
    );
}
