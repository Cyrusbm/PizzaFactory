import { ITopping, ToppingKind } from "../itopping";

export class Tomatoes implements ITopping{
    Name = 'Tomatoes';
    Kind = ToppingKind.Vegetable;
    Price = 1;
    Value = 1;
}