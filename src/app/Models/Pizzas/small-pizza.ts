import { IPizza, PizzaKind } from "../ipizza";

export class SmallPizza implements IPizza
{
    Name = "Small Pizza";
    Kind = PizzaKind.Small;
    Price = 5;
}
