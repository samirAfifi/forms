import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroupinstanceComponent } from './components/form-groupinstance/form-groupinstance.component';
import { FormBuliderComponent } from './components/form-bulider/form-bulider.component';
import { FormArrayComponent } from './components/form-array/form-array.component';



@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    NavbarComponent,
    FormGroupinstanceComponent,
    FormBuliderComponent,
    FormArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
