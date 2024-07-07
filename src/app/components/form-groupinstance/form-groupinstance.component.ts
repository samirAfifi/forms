import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-groupinstance',
  templateUrl: './form-groupinstance.component.html',
  styleUrls: ['./form-groupinstance.component.css']
})
export class FormGroupinstanceComponent {

  constructor() { }

  login= new FormGroup({
    userName: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required]),
    phone: new FormControl("", [Validators.required]),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),

  })
  submitLogin(login:FormGroup){
    console.log(this.login.value)
  }


  // updateProfile() {
  //   this.login.patchValue({
     
  //     address: {
  //       street: '123 Drew Street',
  //     },
  //   });
  // }

}
