import { IOffer } from "./ioffer";
import { IPizza, PizzaKind } from "./ipizza";
import { ITopping } from "./itopping";

export class Order {
    Pizzas: IPizza[] = [];
    Toppings: ITopping[] = [];

    get Price(): number {
        return this.Pizzas.map(p => p.Price).reduce((a, b) => a + b, 0) + this.Toppings.map(t => t.Price).reduce((a, b) => a + b, 0);
    }

    get PriceAfterDiscount(): number{
        
        if (this.Offer == null)
            return this.Price;
        else{
            if (this.Offer.DiscountPrice == 0)
                return this.Price * this.Offer.DiscountPercentage;
            else
                return this.Price - this.Offer.DiscountPrice;
        }
    }

    get Offer(){
        for (let i=0; i< this._availableOffers.length; i++)
        {
            if (this.Pizzas.filter(p=>p.Kind == PizzaKind.Small).length >= this._availableOffers[i].Pizzas.filter(p=>p.Kind == PizzaKind.Small).length)
                if (this.Pizzas.filter(p=>p.Kind == PizzaKind.Medium).length >= this._availableOffers[i].Pizzas.filter(p=>p.Kind == PizzaKind.Medium).length)
                    if (this.Pizzas.filter(p=>p.Kind == PizzaKind.Large).length >= this._availableOffers[i].Pizzas.filter(p=>p.Kind == PizzaKind.Large).length)
                        if (this.Pizzas.filter(p=>p.Kind == PizzaKind.ExtraLarge).length >= this._availableOffers[i].Pizzas.filter(p=>p.Kind == PizzaKind.ExtraLarge).length)
                            if (this.Toppings.map(t=>t.Value).reduce((a,b)=>a+b,0) >= this._availableOffers[i].ToppingsValue)
                                return this._availableOffers[i];
        }

        return null;
    }
    
    private _availableOffers: IOffer[] = [];
    constructor(availableOffers: IOffer[]) {
        this._availableOffers = availableOffers;
    }
}
