import { IOffer } from "../ioffer";
import { MediumPizza } from "../Pizzas/medium-pizza";

export class Offer1 implements IOffer{
    Name = '1 Medium Pizza with 2 Toppings = $5';
    Pizzas = [new MediumPizza];
    ToppingsValue =  2;
    DiscountPrice = 5;
    DiscountPercentage = 0;
}