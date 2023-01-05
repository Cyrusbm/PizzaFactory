import { ITopping, ToppingKind } from '../itopping'

export class Sausage implements ITopping{
    Name = 'Sausage';
    Kind = ToppingKind.NonVegetable;
    Price = 1;
    Value = 1;
}