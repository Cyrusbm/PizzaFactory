import { IPizza, PizzaKind } from "../ipizza";

export class LargePizza implements IPizza 
{
    Name = "Large Pizza";
    Kind = PizzaKind.Large;
    Price = 8;
}
