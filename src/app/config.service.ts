import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Config {
  "productsURL": string;
  "inventoryURL": string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }
  public getConfig() { return this.http.get<Config>('/assets/config.json');}
}
