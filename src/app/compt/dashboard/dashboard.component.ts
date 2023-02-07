import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudmodaleModule } from 'src/app/Modale/studmodale/studmodale.module';
import { ApiService } from 'src/app/Shared/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public addform!:FormGroup;
public empdata!:any;
public isAdd!:boolean;
public isUpdate!:boolean;

 studModel:StudmodaleModule=new StudmodaleModule();
  constructor(private http:HttpClient,private router:Router,private formbuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.addform=this.formbuilder.group({
      Fname:[''],
      Email:[''],
      Phone:[''],
      Age:['']
    })
    this.getstud();
  }
  Addclick(){
    this.addform.reset();
    this.isAdd=true;
    this.isUpdate=false;
  }

  poststud(){
    this.studModel.Fname=this.addform.value.Fname;
    this.studModel.Email=this.addform.value.Email;
    this.studModel.Phone=this.addform.value.Phone;
    this.studModel.Age=this.addform.value.Age;
    this.api.postStudent(this.studModel).subscribe(res=>{
      alert("Record added Successfully.")
      this.addform.reset();
      let ref=document.getElementById('cancel')
      ref!.click();
    },err=>{
      alert("Something Went wrong..")
    })
    this.getstud();
  }

  //Getdata
  getstud(){
    this.api.getStudent().subscribe(res=>{
      this.empdata=res;
    })
  }
  //Delete Data
  deletestud(row:any){
    this.api.DeleteData(row.id).subscribe(res=>{
      alert("Data Deleted Successfully....");
      this.getstud();
    })
  }
  
  editstud(row:any){
    this.isUpdate=true;
    this.isAdd=false;
    this.studModel.id=row.id
    this.addform.controls['Fname'].setValue(row.Fname);
    this.addform.controls['Email'].setValue(row.Email);
    this.addform.controls['Phone'].setValue(row.Phone);
    this.addform.controls['Age'].setValue(row.Age);
  }

  updatestud(){
    this.studModel.Fname=this.addform.value.Fname;
    this.studModel.Email=this.addform.value.Email;
    this.studModel.Phone=this.addform.value.Phone;
    this.studModel.Age=this.addform.value.Age;

    this.api.updateData(this.studModel.id,this.studModel).subscribe(res=>{
      alert("student data updated successfully...");
      this.addform.reset();
      let lgf=document.getElementById('cancel')
      lgf!.click();
      this.getstud();
    },err=>{
      alert("Somthing Went Wrong");
    })

  }

}
