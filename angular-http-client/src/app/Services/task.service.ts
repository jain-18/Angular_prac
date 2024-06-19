import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Task } from '../Model/task';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  http: HttpClient = inject(HttpClient);

  CreateTask(task: Task) {
    // console.log(data);
    const headerss = new HttpHeaders({ 'my-header': 'hello-world' });
    this.http
      .post<{ name: string }>(
        'https://angularprac-89950-default-rtdb.firebaseio.com/tasks.json',
        task,
        { headers: headerss }
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  DeleteTask(id: string | undefined) {
    this.http
      .delete(
        'https://angularprac-89950-default-rtdb.firebaseio.com/tasks/' +
          id +
          '.json'
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  DeleteAllTaskClicked() {
    this.http
      .delete(
        'https://angularprac-89950-default-rtdb.firebaseio.com/tasks.json'
      )
      .subscribe((res) => {});
  }

  GetAllTasks(){
    return this.http.get<{[key : string] : Task}>('https://angularprac-89950-default-rtdb.firebaseio.com/tasks.json')
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
  }
  UpdateTask(id : string | undefined,data : Task){
    this.http.put('https://angularprac-89950-default-rtdb.firebaseio.com/tasks/'+id+'.json',data)
    .subscribe();
  }
}
