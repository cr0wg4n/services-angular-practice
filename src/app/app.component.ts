import { Component } from '@angular/core';
import { DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:String="";
  age:number;
 users:string[]=["lucas","zoraya","ramona"];

 constructor(private dataService:DataService){
  this.dataService.getData().subscribe(data =>{
    this.posts=data;
  });
 }
 deleteUser(user){
   for(let i=0;i<this.users.length;i++){
    if(this.users[i]==user){
      this.users.splice(i,1);
    }
   }

 }
 addUser(user){
   this.users.push(user.value);
   user.value ='';
   return false;
 }
 posts = [];
}
