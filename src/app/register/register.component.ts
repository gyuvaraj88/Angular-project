import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {


  email:string;
  personname:string;
  password:string;
  mobile:number;
  dateofbirth:number;
  monthofbirth:number;
  yearofbirth:number;
  gender:string;
  receivenewsletter:boolean;
  country:string;
  amount:number;
  isSuccessfullyRegistered:boolean=false;
  shouldDisplayMessage:boolean=false;
  onRegisterClick()
   {
    try{
    var s="Email:"+this.email +",Personname:" + this.personname+
    ",Password:"+this.password +",Mobile:"+ this.mobile +",DateofBirth"+
    this.dateofbirth +",MonthofBirth:" +this.monthofbirth +",YearofBirth"+
    this.yearofbirth + ",Gender:" +this.gender +",Receive News Letter"+
    this.receivenewsletter + ",Country:"+this.country +",Amount:"+this.amount;
    console.log(s);

    if(localStorage.Users==null || localStorage.Users==undefined)
    {
      localStorage.Users=JSON.stringify([]);
    }
    var u=JSON.parse(localStorage.Users);
    u.push({email:this.email, personname:this.personname,password:this.password,mobile:
    this.mobile, dateofbirth:this.dateofbirth,monthofbirth:this.monthofbirth,
    yearofbirth:this.yearofbirth,receivenewsletter:this.receivenewsletter,
    gender:this.gender,country:this.country,amount:this.amount});
    localStorage.Users=JSON.stringify(u);
    this.isSuccessfullyRegistered=true;
    this.shouldDisplayMessage=true;
    }
catch(err)
{

  this.isSuccessfullyRegistered=false;
  this.shouldDisplayMessage=true;
}
  

}
}