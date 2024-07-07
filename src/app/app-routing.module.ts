import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { FormGroupinstanceComponent } from './components/form-groupinstance/form-groupinstance.component';
import { FormBuliderComponent } from './components/form-bulider/form-bulider.component';
import { FormArrayComponent } from './components/form-array/form-array.component';

const routes: Routes = [
  {path:"" , redirectTo:"Reactive" ,pathMatch:'full'},
  {path:"Reactive" ,component:ReactiveFormComponent},
  {path:"Template", component:TemplateFormComponent},
  {path:"instance", component:FormGroupinstanceComponent},
  {path:"form-bulider", component:FormBuliderComponent},
  {path:"form-Array", component:FormArrayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
