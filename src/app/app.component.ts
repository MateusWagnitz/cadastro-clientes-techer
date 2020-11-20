import { Component } from '@angular/core';

import {CustomerService} from './shared/customer.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private customerService: CustomerService) { }
}
