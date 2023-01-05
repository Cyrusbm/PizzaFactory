import { IOffer } from "../ioffer";
import { LargePizza } from "../Pizzas/large-pizza";

export class Offer3 implements IOffer{
    Name = '1 Large Pizza with 4 Toppings = %50';
    Pizzas = [new LargePizza];
    ToppingsValue =  4;
    DiscountPrice = 0;
    DiscountPercentage = 0.5;
}