import { ITopping, ToppingKind } from '../itopping'

export class Mushrooms implements ITopping{
    Name = 'Mushrooms';
    Kind = ToppingKind.Vegetable;
    Price = 1.2;
    Value = 1;
}