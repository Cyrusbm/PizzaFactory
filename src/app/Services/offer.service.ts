import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOffer } from '../Models/ioffer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private _httpClient : HttpClient) { }

  getOffers(){
    return this._httpClient.get<IOffer[]>("assets/Data/Offers.json");
  }
}
