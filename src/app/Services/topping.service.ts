import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITopping } from '../Models/itopping';

@Injectable({
  providedIn: 'root'
})
export class ToppingService {

  constructor(private _httpClient : HttpClient) { }


  getToppings(){
    return this._httpClient.get<ITopping[]>("assets/Data/Toppings.json");
  }
}
