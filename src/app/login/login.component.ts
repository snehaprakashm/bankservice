import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  data="Happy Banking With Us"
  data2="Enter account number"
    

  login(){
    alert("login clicked")
  }
  acnoChange(event:any){
    console.log(event.target.value);
    
  }
  passChange(event:any){
    console.log(event.target.value);
    
  }


}
