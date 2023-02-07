import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 public signupform!:FormGroup
  constructor(  private router:Router,private http:HttpClient,private formbuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.signupform=this.formbuilder.group({ 
     FName:[''],
     Phone:[''],
     Email:[''],
     Password:['']


     }
    
    )
  }
  signup(){
     return this.http.post<any>("http://localhost:3000/register",this.signupform.value).subscribe(res=>{
        alert('Signup Successfully....');
        this.signupform.reset();
        this.router.navigate(['/login']);
        


     })
  }

}
