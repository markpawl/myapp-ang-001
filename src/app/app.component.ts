import { Component } from '@angular/core';
import { ConfigService, Config, nullConfig } from './config.service';

@Component({
  selector: 'app-root',
  template: ` 
  <h1>myapp-ang-001</h1>
  <p>{{config.productsURL}}</p>
  <p>{{config.inventoryURL}}</p> 
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: Config = nullConfig;
  constructor( private configSrv:ConfigService){
    configSrv.getConfig().subscribe(
      (data) => this.config = data
    );
  }
}
