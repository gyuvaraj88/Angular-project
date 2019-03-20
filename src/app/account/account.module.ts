import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import {CategoriesComponent} from '../categories/categories.component';

@NgModule({
 
  declarations: [HomeComponent, LoginComponent,RegisterComponent ],
  exports:[HomeComponent,LoginComponent,RegisterComponent],
  imports:[FormsModule,CommonModule]
})
export class AccountModule { }
