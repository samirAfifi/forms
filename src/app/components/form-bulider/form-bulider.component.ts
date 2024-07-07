import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-bulider',
  templateUrl: './form-bulider.component.html',
  styleUrls: ['./form-bulider.component.css']
})
export class FormBuliderComponent implements OnInit {

  constructor(private _FormBuilder:FormBuilder   ) { }
 myForm:FormGroup
 newForm: FormGroup;
  ngOnInit(): void {
    this.myForm = this._FormBuilder.group({
     
             username: ['', [Validators.required]],
             email: '',
             address:this._FormBuilder.group({
               street:'',
               city:'',
              state:'',
               zip:'',
               
        
      })
      
    })
    
    
  
}



  onSubmit(myForm:FormGroup) {
    if (this.myForm.valid) {
      console.log('Form data:', this.myForm.value);
      // Send data to backend or perform other actions
    } else {
      console.log('Form is invalid!');
    }
  }

}
