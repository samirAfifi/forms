import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  constructor(private FormBuilder:FormBuilder) { }

  skills: FormGroup;
  form: FormArray
  ngOnInit(): void {
    this.skills = this.FormBuilder.group({
      formArry:this.FormBuilder.array([
        this.FormBuilder.control('',[Validators.required])
      ])   })
      
  }

  get formArry(): FormArray
{
  return this.skills.get('formArry') as FormArray;

  }
  addSkill() {
    this.formArry.push(this.FormBuilder.control(''));
  }
  removeSkill(index: number) {
    this.formArry.removeAt(index);
  }

}
