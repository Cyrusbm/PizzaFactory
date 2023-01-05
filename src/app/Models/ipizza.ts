export interface IPizza {
    Name: string,
    Kind : PizzaKind,
    Price : number
}

export enum PizzaKind{
    Small = 'Small',
    Medium = 'Medium',
    Large = 'Large',
    ExtraLarge = 'ExtraLarge'
}

