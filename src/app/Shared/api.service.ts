import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

   }
//Posting Data on server
   postStudent(data:any){
     return this.http.post<any>("http://localhost:3000/StudData",data).pipe(map((res:any)=>{
       return res;
     }))
   }
   //Getting Data from the Server
   getStudent(){
     return this.http.get<any>("http://localhost:3000/StudData").pipe(map((res:any)=>{
       return res;
     }))
   }
   //Deleting Data
   DeleteData(id:number){
     return this.http.delete("http://localhost:3000/StudData/"+id).pipe(map((res:any)=>{
       return res;
     }))
   }

   //Update Data
   updateData(id:number,data:any){
     return this.http.put<any>("http://localhost:3000/StudData/"+id,data).pipe(map((res:any)=>{
       return res;
     }))
   } 
   
   
}

