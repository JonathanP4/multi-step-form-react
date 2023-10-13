import { useContext } from "react";
import { stepsContext } from "../../context/StepsContextProvider";

export default function Pagination() {
    const { index } = useContext(stepsContext);
    return (
        <ul className="uppercase flex gap-sm text-white select-none lg:grid">
            <li className="flex items-center gap-4">
                <div
                    className={`border border-white h-md w-md grid place-content-center rounded-full ${
                        index === 0 ? "bg-light-blue text-marine-blue" : ""
                    }`}
                >
                    1
                </div>
                <div className="hidden lg:grid">
                    <span className="text-xs text-pastel-blue">Step 1</span>
                    <p className="text-sm font-medium">Your Info</p>
                </div>
            </li>
            <li className="flex items-center gap-4">
                <div
                    className={`border border-white h-md w-md grid place-content-center rounded-full ${
                        index === 1 ? "bg-light-blue text-marine-blue" : ""
                    }`}
                >
                    2
                </div>
                <div className="hidden lg:grid">
                    <span className="text-xs text-pastel-blue">Step 2</span>
                    <p className="text-sm font-medium">Select Plan</p>
                </div>
            </li>
            <li className="flex items-center gap-4">
                <div
                    className={`border border-white h-md w-md grid place-content-center rounded-full ${
                        index === 2 ? "bg-light-blue text-marine-blue" : ""
                    }`}
                >
                    3
                </div>
                <div className="hidden lg:grid">
                    <span className="text-xs text-pastel-blue">Step 3</span>
                    <p className="text-sm font-medium">Addons</p>
                </div>
            </li>
            <li className="flex items-center gap-4">
                <div
                    className={`border border-white h-md w-md grid place-content-center rounded-full ${
                        index === 3 ? "bg-light-blue text-marine-blue" : ""
                    }`}
                >
                    4
                </div>
                <div className="hidden lg:grid">
                    <span className="text-xs text-pastel-blue">Step 4</span>
                    <p className="text-sm font-medium">Summary</p>
                </div>
            </li>
        </ul>
    );
}
