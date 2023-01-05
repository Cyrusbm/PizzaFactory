import { IPizza, PizzaKind } from "../ipizza";

export class ExtraLargePizza implements IPizza {
    Name = "Extra Large Pizza";
    Kind = PizzaKind.ExtraLarge;
    Price = 9;
}
