import { Component } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  {

  CategoriesList:Category[]=[new Category(1,"Java","Yuva"),
  new Category(2,".Net","Raj"),
  new Category(3,"Python","Ajay"),
  new Category(4,"Angular","David")];

}
