import { IPizza } from "./ipizza";

export interface IOffer {
    Name : string,
    Pizzas : IPizza[],
    ToppingsValue : number,
    DiscountPrice: number,
    DiscountPercentage : number
}
