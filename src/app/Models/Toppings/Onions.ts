import { ITopping, ToppingKind } from '../itopping'

export class Onions implements ITopping{
    Name = 'Onions';
    Kind = ToppingKind.Vegetable;
    Price = 0.5;
    Value = 1;
}