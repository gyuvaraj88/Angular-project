import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountModule} from './account/account.module';
import {QuestionsModule} from './questions/questions.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuestionsIndexComponent } from './questions-index/questions-index.component';
import { RegisterComponent } from './register/register.component';
import { QuestionsNewComponent } from './questions-new/questions-new.component';
import { QuestionsViewComponent } from './questions-view/questions-view.component';
import { CategoriesComponent } from './categories/categories.component';

var myroutes:Routes =[
  {path:"home",component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"categories",component:CategoriesComponent},
{path:"questions",component:QuestionsIndexComponent},
{path:"newquestions",component:QuestionsNewComponent},
{path:"viewquestions",component:QuestionsViewComponent}]

var myroutes2= RouterModule.forRoot(myroutes);

@NgModule({
  declarations: [AppComponent, CategoriesComponent],
  imports: [BrowserModule, AccountModule ,QuestionsModule,myroutes2,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
