import { ReactNode, createContext, useState } from "react";

export const planContext = createContext({
    plan: {
        billing: "MONTHLY" as Billing,
        type: "ARCADE" as Plan,
        addons: ["ONLINE"] as AddonsArray,
        planPrice: 9,
        addonPrice: 1,
    },
    setPlan: (plan: PlanType) => {
        plan;
    },
    setAddons: (addon: Addons) => {
        addon;
    },
});

export function PlanContextProvider({ children }: { children: ReactNode }) {
    const [billing, setBilling] = useState<Billing>("MONTHLY");
    const [planType, setPlanType] = useState<Plan>("ARCADE");
    const [addon, setAddon] = useState<AddonsArray>(["ONLINE"]);
    const [planPrice, setPlanPrice] = useState(9);
    const [addonPrice, setAddonPrice] = useState(1);

    function setPlan(plan: PlanType) {
        if (plan.billing) {
            setBilling(plan.billing);
        }

        if (plan.type) {
            const planMap = {
                ARCADE: 9,
                ADVANCED: 12,
                PRO: 15,
            };
            setPlanType(plan.type);
            setPlanPrice(planMap[plan.type]);
        }
    }

    function setAddons(a: Addons) {
        const priceMap = {
            ONLINE: 1,
            PROFILE: 2,
            STORAGE: 2,
        };

        if (addon.includes(a)) {
            const updatedAddons = addon.filter((addon) => a !== addon);
            setAddon(updatedAddons);
            setAddonPrice(plan.addonPrice - priceMap[a]);
        } else {
            setAddon((addons) => [...addons, a]);
            setAddonPrice(plan.addonPrice + priceMap[a]);
        }
    }

    const plan = {
        billing,
        type: planType,
        addons: addon,
        planPrice,
        addonPrice,
    };

    return (
        <planContext.Provider value={{ plan, setPlan, setAddons }}>
            {children}
        </planContext.Provider>
    );
}
