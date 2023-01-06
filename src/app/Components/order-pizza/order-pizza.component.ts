import { Component } from '@angular/core';
import { Order } from 'src/app/Models/order';
import { IPizza, PizzaKind } from 'src/app/Models/ipizza';
import { IOffer } from 'src/app/Models/ioffer';
import { PizzaService } from 'src/app/Services/pizza.service';
import { map, Observable } from 'rxjs';
import { ITopping, ToppingKind } from 'src/app/Models/itopping';
import { ToppingService } from 'src/app/Services/topping.service';
import { OfferService } from 'src/app/Services/offer.service';


@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent {

  
  offers! : Observable<IOffer[]>;
  pizzas? : Observable<IPizza[]>;
  vegToppings? : Observable<ITopping[]>;
  nonVegToppings? : Observable<ITopping[]>;
  order! : Order;

  constructor(
    private _pizzaService : PizzaService,
    private _toppingService : ToppingService,
    private _offersService : OfferService
    ){}

  ngOnInit(){
    
    this.pizzas = this._pizzaService.getPizzas();
    this.vegToppings = this._toppingService.getToppings().pipe(map(data=>data.filter(x=>x.Kind==ToppingKind.Vegetable)));
    this.nonVegToppings = this._toppingService.getToppings().pipe(map(data=>data.filter(x=>x.Kind==ToppingKind.NonVegetable)));
    this.offers = this._offersService.getOffers();

    this.order = new Order(this.offers);
    
  }

  addPizza(pizza : IPizza){
    this.order.Pizzas.push(pizza);
  }



  addTopping(topping : ITopping){
    this.order.Toppings.push(topping);
  }

}
