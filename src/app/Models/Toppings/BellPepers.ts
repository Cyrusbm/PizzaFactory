import { ITopping, ToppingKind } from '../itopping'

export class BellPepers implements ITopping{
    Name = 'Bell Pepers';
    Kind = ToppingKind.Vegetable;
    Price = 1;
    Value = 1;
}