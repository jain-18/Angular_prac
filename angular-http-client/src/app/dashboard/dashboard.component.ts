import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../Model/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  showCreateTaskForm: boolean = false;
  http : HttpClient = inject(HttpClient);

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  CreateTask(data : Task){
    // console.log(data);
    const headerss = new HttpHeaders({'my-header':'hello-world'})
    this.http.post<{name : string}>('https://angularprac-89950-default-rtdb.firebaseio.com/tasks.json', data ,{ headers : headerss}).
    subscribe((response)=>{
      console.log(response);
    });
  }
}
