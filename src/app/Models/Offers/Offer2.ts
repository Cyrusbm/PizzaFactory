import { IOffer } from "../ioffer";
import { IPizza } from "../ipizza";
import { MediumPizza } from "../Pizzas/medium-pizza";

export class Offer2 implements IOffer{
    Name = '2 Medium Pizza with 4 Toppings each = $9';
    Pizzas = [new MediumPizza, new MediumPizza];
    ToppingsValue =  8;
    DiscountPrice = 9;
    DiscountPercentage = 0;
}