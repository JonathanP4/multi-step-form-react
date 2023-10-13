import { useContext, useState } from "react";
import { formContext } from "../../context/FormContextProvider";
import { stepsContext } from "../../context/StepsContextProvider";

export function Form() {
    const step = useContext(stepsContext);
    const validity = useContext(formContext);

    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [phoneTouched, setPhoneTouched] = useState(false);

    return (
        <div className={`${step.index !== 0 ? "hidden" : ""}`}>
            <h1 className="text-marine-blue text-[2rem] font-bold mb-3">
                Personal info
            </h1>
            <p className="text-sm text-cool-gray mb-md">
                Please provide your name, email address, and phone number.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="grid gap-sm">
                <div className="grid">
                    <div className="flex items-center justify-between">
                        <label
                            className="text-marine-blue text-sm mb-1"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <span className="text-red-500 text-sm">
                            {!validity.nameIsValid && nameTouched
                                ? "Invalid input"
                                : ""}
                        </span>
                    </div>
                    <input
                        onBlur={(e) => {
                            validity.isName(e.target.value);
                            setNameTouched(true);
                        }}
                        required
                        className={`p-sm border rounded-md ${
                            !validity.nameIsValid && nameTouched
                                ? "border-red-500"
                                : "border-cool-gray/50"
                        }`}
                        type="text"
                        name="name"
                        autoComplete="name"
                        id="name"
                        placeholder="e.g. Stephen King"
                    />
                </div>
                <div className="grid">
                    <div className="flex items-center justify-between">
                        <label
                            className="text-marine-blue text-sm "
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <span className="text-red-500 text-sm">
                            {!validity.emailIsValid && emailTouched
                                ? "Invalid input"
                                : ""}
                        </span>
                    </div>
                    <input
                        onBlur={(e) => {
                            validity.isEmail(e.target.value);
                            setEmailTouched(true);
                        }}
                        required
                        className={`p-sm border rounded-md ${
                            !validity.emailIsValid && emailTouched
                                ? "border-red-500"
                                : "border-cool-gray/50"
                        }`}
                        type="email"
                        name="email"
                        autoComplete="email"
                        id="email"
                        placeholder="e.g. stephenking@lorem.com"
                    />
                </div>
                <div className="grid">
                    <div className="flex items-center justify-between">
                        <label
                            className="text-marine-blue text-sm "
                            htmlFor="phone"
                        >
                            Phone Number
                        </label>
                        <span className="text-red-500 text-sm">
                            {!validity.phoneIsValid && phoneTouched
                                ? "Invalid input"
                                : ""}
                        </span>
                    </div>
                    <input
                        maxLength={14}
                        onBlur={(e) => {
                            validity.isPhone(e.target.value);
                            setPhoneTouched(true);
                        }}
                        className={`p-sm border rounded-md ${
                            !validity.phoneIsValid && phoneTouched
                                ? "border-red-500"
                                : "border-cool-gray/50"
                        }`}
                        required
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        id="phone"
                        placeholder="e.g. +1 234 567 890"
                    />
                </div>
                <button className="hidden" type="submit"></button>
            </form>
        </div>
    );
}
