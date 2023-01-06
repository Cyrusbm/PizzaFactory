export interface IPizza {
    Name: string,
    Kind : PizzaKind,
    Price : number
}

export enum PizzaKind{
    Small,
    Medium,
    Large,
    ExtraLarge
}

