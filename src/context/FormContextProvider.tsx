import { ReactNode, createContext, useState } from "react";

export const formContext = createContext({
    nameIsValid: false,
    emailIsValid: false,
    phoneIsValid: false,
    formIsValid: false,
    isName: (name: string) => {
        name;
    },
    isEmail: (email: string) => {
        email;
    },
    isPhone: (phone: string) => {
        phone;
    },
});

export function FormContextProvider({ children }: { children: ReactNode }) {
    const [nameIsValid, setNameIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [phoneIsValid, setPhoneIsValid] = useState(false);

    function isName(name: string) {
        if (name.trim().length < 1) {
            setNameIsValid(false);
            return;
        }

        const includesNum = new RegExp(/\d+/g);
        setNameIsValid(!includesNum.test(name));
    }
    function isEmail(email: string) {
        if (email.trim().length === 0) {
            setEmailIsValid(false);
            return;
        }

        const emailRegex = new RegExp(/\w+@\w+\.\w+/gi);
        setEmailIsValid(emailRegex.test(email));
    }
    function isPhone(phone: string) {
        if (phone.trim().length === 0) {
            setPhoneIsValid(false);
            return;
        }

        const phoneRegex = new RegExp(/^\d{10}$/g);

        setPhoneIsValid(phoneRegex.test(phone.replace(/[+|\s|-]/g, "")));
    }

    const formIsValid = [nameIsValid, emailIsValid, phoneIsValid].every(
        (el) => el === true
    );

    const formValidation = {
        nameIsValid,
        emailIsValid,
        phoneIsValid,
        formIsValid,
        isName,
        isEmail,
        isPhone,
    };

    return (
        <formContext.Provider value={formValidation}>
            {children}
        </formContext.Provider>
    );
}
