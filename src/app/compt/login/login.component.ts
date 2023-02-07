import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public loginform!:FormGroup;
  constructor( private router:Router,private http:HttpClient,private formbuild:FormBuilder) { }

  ngOnInit(): void {
    this.loginform=this.formbuild.group({
      Email:[''],
      Password:['']
    })
  }
  login(){
    return this.http.get<any>("http://localhost:3000/register").subscribe(res=>{
         const user =res.find((a:any)=>{
        return a.Email===this.loginform.value.Email && a.Password===this.loginform.value.Password;
         });
         if(user){
           alert("Login Successfully..");
           this.loginform.reset();
           this.router.navigate(['/dashboard'])

         }
         else{
           alert('Login or Password not valid')
         }
    })
  }

}
