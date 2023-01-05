import { IPizza, PizzaKind } from "../ipizza";

export class MediumPizza implements IPizza 
{
    Name = "Medium Pizza";
    Kind = PizzaKind.Medium;
    Price = 7;
}
