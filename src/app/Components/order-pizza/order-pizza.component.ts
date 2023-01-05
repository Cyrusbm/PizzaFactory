import { Component } from '@angular/core';
import { ExtraLargePizza } from 'src/app/Models/Pizzas/extra-large-pizza';
import { Order } from 'src/app/Models/order';
import { IPizza, PizzaKind } from 'src/app/Models/ipizza';
import { LargePizza } from 'src/app/Models/Pizzas/large-pizza';
import { MediumPizza } from 'src/app/Models/Pizzas/medium-pizza';
import { SmallPizza } from 'src/app/Models/Pizzas/small-pizza';
import { BarbecueChicken } from 'src/app/Models/Toppings/BarbecueChicken';
import { BellPepers } from 'src/app/Models/Toppings/BellPepers';
import { Mushrooms } from 'src/app/Models/Toppings/Mushrooms';
import { Onions } from 'src/app/Models/Toppings/Onions';
import { Pepperoni } from 'src/app/Models/Toppings/Pepperoni';
import { PineApple } from 'src/app/Models/Toppings/PineApple';
import { Sausage } from 'src/app/Models/Toppings/Sausage';
import { Tomatoes } from 'src/app/Models/Toppings/Tomatoes';
import { IOffer } from 'src/app/Models/ioffer';
import { Offer1 } from 'src/app/Models/Offers/Offer1';
import { Offer2 } from 'src/app/Models/Offers/Offer2';
import { Offer3 } from 'src/app/Models/Offers/Offer3';

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent {

  offers : IOffer[] = [new Offer3, new Offer2, new Offer1];
  order = new Order(this.offers);

  addSmallPizza(){
    this.order.Pizzas.push(new SmallPizza);
  }

  addMediumPizza(){
    this.order.Pizzas.push(new MediumPizza);
  }

  addLargePizza(){
    this.order.Pizzas.push(new LargePizza);
  }

  addExtraLargePizza(){
    this.order.Pizzas.push(new ExtraLargePizza);
  }

  addTomatoes(){
    this.order.Toppings.push(new Tomatoes);
  }

  addOnions(){
    this.order.Toppings.push(new Onions);
  }

  addBellPepper(){
    this.order.Toppings.push(new BellPepers);
  }

  addMushrooms(){
    this.order.Toppings.push(new Mushrooms);
  }

  addPineapple(){
    this.order.Toppings.push(new PineApple);
  }

  addSausage(){
    this.order.Toppings.push(new Sausage);
  }

  addPepperoni(){
    this.order.Toppings.push(new Pepperoni);
  }

  addBarbecueChicken(){
    this.order.Toppings.push(new BarbecueChicken);
  }
}
