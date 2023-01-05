import { ITopping, ToppingKind } from '../itopping'

export class PineApple implements ITopping{
    Name = 'PineApple';
    Kind = ToppingKind.Vegetable;
    Price = 0.75;
    Value = 1;
}