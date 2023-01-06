import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPizza } from '../Models/ipizza';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private _httpClient: HttpClient) { }


  getPizzas() {
    return this._httpClient.get<IPizza[]>("assets/Data/Pizzas.json");
  }
}
