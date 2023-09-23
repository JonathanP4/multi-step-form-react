import { ReactNode, useState } from "react";
import { createContext } from "react";

export const stepsContext = createContext({
    index: 0,
    goNext: () => {},
    goBack: () => {},
    goTo: (num: number) => {
        num;
    },
});

export function StepsContextProvider({ children }: { children: ReactNode }) {
    const [index, setIndex] = useState(0);

    function goTo(num: number) {
        if (num >= 0 && num <= 3) setIndex(num);
    }

    function goNext() {
        if (index < 3) setIndex((index) => index + 1);
    }

    function goBack() {
        if (index > 0) setIndex((index) => index - 1);
    }

    return (
        <stepsContext.Provider value={{ index, goNext, goBack, goTo }}>
            {children}
        </stepsContext.Provider>
    );
}
