import { useContext } from "react";
import { stepsContext } from "../../context/StepsContextProvider";

export default function Pagination() {
    const { index } = useContext(stepsContext);
    return (
        <ul className="flex gap-sm text-white select-none">
            <li
                className={`border border-white aspect-square w-md grid place-content-center rounded-full ${
                    index === 0 ? "bg-light-blue text-marine-blue" : ""
                }`}
            >
                1
            </li>
            <li
                className={`border border-white aspect-square w-md grid place-content-center rounded-full ${
                    index === 1 ? "bg-light-blue text-marine-blue" : ""
                }`}
            >
                2
            </li>
            <li
                className={`border border-white aspect-square w-md grid place-content-center rounded-full ${
                    index === 2 ? "bg-light-blue text-marine-blue" : ""
                }`}
            >
                3
            </li>
            <li
                className={`border border-white aspect-square w-md grid place-content-center rounded-full ${
                    index === 3 ? "bg-light-blue text-marine-blue" : ""
                }`}
            >
                4
            </li>
        </ul>
    );
}
