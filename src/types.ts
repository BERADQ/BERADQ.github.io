export type aTarget = "_blank" | "_self" | "_parent" | "_top";
export type Override<P, S> = Omit<P, keyof S> & S;
