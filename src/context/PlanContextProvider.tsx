import { ReactNode, createContext, useState } from "react";

type Plans = "MONTHLY" | "ANNUALY";

export const planContext = createContext({
    planType: "MONTHLY" as Plans,
    setPlanType: (plan: Plans) => {
        plan;
    },
});

export function PlanContextProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<Plans>("MONTHLY");

    function setPlan(plan: Plans) {
        setState(plan);
    }

    return (
        <planContext.Provider value={{ planType: state, setPlanType: setPlan }}>
            {children}
        </planContext.Provider>
    );
}
