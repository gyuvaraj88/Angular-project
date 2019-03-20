export class Category {

    CategoryId:number;
    CategoryName:string;
    AddBy:string;

    constructor(CategoryId:number,
        CategoryName:string,
        AddBy:string)
    {
      this.CategoryId=CategoryId;
      this.CategoryName=CategoryName;
      this.AddBy=AddBy;
    }
}
