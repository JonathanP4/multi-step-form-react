type Billing = "MONTHLY" | "ANNUALY";
type Plan = "ARCADE" | "ADVANCED" | "PRO";
type Addons = "ONLINE" | "STORAGE" | "PROFILE";
type AddonsArray = Addons[];

interface PlanType {
    billing?: Billing;
    type?: Plan;
}
