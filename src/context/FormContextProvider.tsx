import { createContext } from "react";

const formContext = createContext({
    nameIsValid: false,
    emailIsValid: false,
    phoneIsValid: false,
});

export function FormContextProvider() {
    return <div>FormContextProvider</div>;
}
