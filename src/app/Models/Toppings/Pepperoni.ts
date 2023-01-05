import { ITopping, ToppingKind } from '../itopping'

export class Pepperoni implements ITopping{
    Name = 'Pepperoni';
    Kind = ToppingKind.NonVegetable;
    Price = 2;
    Value = 2;
}