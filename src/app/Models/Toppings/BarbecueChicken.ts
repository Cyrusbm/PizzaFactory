import { ITopping, ToppingKind } from '../itopping'

export class BarbecueChicken implements ITopping{
    Name = 'Barbecue Chicken';
    Kind = ToppingKind.NonVegetable;
    Price = 3;
    Value = 2;
}