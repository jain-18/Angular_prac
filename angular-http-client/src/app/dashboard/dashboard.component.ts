import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../Model/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  showCreateTaskForm: boolean = false;
  http : HttpClient = inject(HttpClient);
  allTasks : Task[] = [];

  ngOnInit(){
    this.fetchAllTasks();
  }

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
      this.fetchAllTasks();
    });
  }

  // {
  //   key : {},
  //   key : {}
  // }

  private fetchAllTasks(){
    this.http.get<{[key : string] : Task}>('https://angularprac-89950-default-rtdb.firebaseio.com/tasks.json')
    .pipe(map((response)=>{
      //transform data to array
      let tasks = [];
      for(let key in response){
        if(response.hasOwnProperty(key)){
          tasks.push({id : key , ...response[key]})
        }
      }
      return tasks;
    }))
    .subscribe((tasks)=>{
      this.allTasks = tasks;
      console.log(tasks);
    })
  }

  FetchAllTaskClicked(){
    this.fetchAllTasks();
  }

  DeleteTask(id : string | undefined){
    this.http.delete('https://angularprac-89950-default-rtdb.firebaseio.com/tasks/'+id+'.json')
    .subscribe((response)=>{
      this.fetchAllTasks();
      console.log(response);
    });
  }

  DeleteAllTaskClicked(){
    this.http.delete('https://angularprac-89950-default-rtdb.firebaseio.com/tasks.json')
    .subscribe((res)=>{
      this.fetchAllTasks();
    })
  }
}
