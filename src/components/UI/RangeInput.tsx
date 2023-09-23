import { useContext, useEffect, useState } from "react";
import { planContext } from "../../context/PlanContextProvider";

interface RangeInputProps {
    sliderClass?: string;
    thumbClass?: string;
}

export function RangeInput({ sliderClass, thumbClass }: RangeInputProps) {
    const plan = useContext(planContext);
    const [state, setState] = useState(false);

    useEffect(() => {
        state ? plan.setPlanType("ANNUALY") : plan.setPlanType("MONTHLY");
    }, [state]);

    return (
        <div
            onClick={() => setState((state) => !state)}
            className={sliderClass}
        >
            <div
                className={`transition-all rounded-full ${thumbClass} ${
                    state ? "translate-x-[92%]" : ""
                } `}
            ></div>
        </div>
    );
}
