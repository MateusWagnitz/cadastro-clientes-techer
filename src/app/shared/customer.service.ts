import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private firebase: AngularFireDatabase) { }

  customerList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    cpf: new FormControl(''),
    birthdate: new FormControl('')
  });

  getCustomers(){
    this.customerList = this.firebase.list('customers');
    return this.customerList.snapshotChanges();
  }

  insertCustomer(customer){
    this.customerList.push({
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      cpf: customer.cpf,
      birthdate: customer.birthdate,
      
    })
  }

  populateForm(customer){
    this.form.setValue(customer);
  }

  updateCustomer(customer){
    this.customerList.update(customer.$key,
      {
        fullName: customer.fullName,
        email: customer.email,
        mobile: customer.mobile,
        cpf: customer.cpf,
        birthdate: customer.birthdate
      });
  }

  deleteCustomer($key: string){
    this.customerList.remove($key);
  }
}
