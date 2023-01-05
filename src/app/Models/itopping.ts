export interface ITopping {
    Name : string,
    Kind : ToppingKind,
    Price : number,
    Value : number
}

export enum ToppingKind {
    Vegetable = 'Vegetable',
    NonVegetable = 'NonVegetable'
}