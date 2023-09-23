import { useContext } from "react";
import { stepsContext } from "../../context/StepsContextProvider";

export function Form() {
    const context = useContext(stepsContext);
    return (
        <div className={`${context.index !== 0 ? "hidden" : ""}`}>
            <h1 className="text-marine-blue text-[2rem] font-bold mb-3">
                Personal info
            </h1>
            <p className="text-sm text-cool-gray mb-md">
                Please provide your name, email address, and phone number.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="grid gap-sm">
                <div className="grid">
                    <label
                        className="text-marine-blue text-sm mb-1"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="p-sm border border-cool-gray/50 rounded-md"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="e.g. Stephen King"
                    />
                </div>
                <div className="grid">
                    <label
                        className="text-marine-blue text-sm "
                        htmlFor="email"
                    >
                        Email Address
                    </label>
                    <input
                        className="p-sm border border-cool-gray/50 rounded-md"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="e.g. stephenking@lorem.com"
                    />
                </div>
                <div className="grid">
                    <label
                        className="text-marine-blue text-sm "
                        htmlFor="phone"
                    >
                        Phone Number
                    </label>
                    <input
                        className="p-sm border border-cool-gray/50 rounded-md"
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="e.g. +1 234 567 890"
                    />
                </div>
                <button className="hidden" type="submit"></button>
            </form>
        </div>
    );
}
