import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Task } from '../Model/task';
import { Subject, catchError, map, throwError } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  http: HttpClient = inject(HttpClient);
  loggingService : LoggingService = inject(LoggingService)
  errorSubject = new Subject<HttpErrorResponse>();

  CreateTask(task: Task) {
    // console.log(data);
    const headerss = new HttpHeaders({ 'my-header': 'hello-world' });
    this.http
      .post<{ name: string }>(
        'https://angularprac-89950-default-rtdb.firebaseio.com/tasks.json',
        task,
        { headers: headerss }
      ).pipe(catchError((err)=>{
        //write the logic to log error
        const errorObj = {statusCode : err.status,errorMessage : err.message,datetime : new Date()}
        this.loggingService.Logerror(errorObj);
        return throwError(()=> err)
  
      }))
      .subscribe({error : (err)=> {
          this.errorSubject.next(err);
      }})
  }

  DeleteTask(id: string | undefined) {
    this.http
      .delete(
        'https://angularprac-89950-default-rtdb.firebaseio.com/tasks/' +
          id +
          '.json'
      ).pipe( catchError((err)=>{
        //write the logic to log error
        const errorObj = {statusCode : err.status,errorMessage : err.message,datetime : new Date()}
        this.loggingService.Logerror(errorObj);
        return throwError(()=> err)
  
      }))
      .subscribe({error : (err)=> {
        this.errorSubject.next(err);
    }})
  }

  DeleteAllTaskClicked() {
    this.http
      .delete(
        'https://angularprac-89950-default-rtdb.firebaseio.com/tasks.json'
      ).pipe(catchError((err)=>{
        //write the logic to log error
        const errorObj = {statusCode : err.status,errorMessage : err.message,datetime : new Date()}
        this.loggingService.Logerror(errorObj);
        return throwError(()=> err)
  
      }))
      .subscribe({error : (err)=> {
        this.errorSubject.next(err);
    }})
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
    }), catchError((err)=>{
      //write the logic to log error
      const errorObj = {statusCode : err.status,errorMessage : err.message,datetime : new Date()}
      this.loggingService.Logerror(errorObj);
      return throwError(()=> err)

    }))
  }



  UpdateTask(id : string | undefined,data : Task){
    this.http.put('https://angularprac-89950-default-rtdb.firebaseio.com/tasks/'+id+'.json',data)
    .pipe(catchError((err)=>{
      //write the logic to log error
      const errorObj = {statusCode : err.status,errorMessage : err.message,datetime : new Date()}
      this.loggingService.Logerror(errorObj);
      return throwError(()=> err)

    }))
    .subscribe({error : (err)=> {
      this.errorSubject.next(err);
  }})
  }

  getTaskDetails(id : string | undefined){
    return this.http.get('https://angularprac-89950-default-rtdb.firebaseio.com/tasks/' +id+'.json')
    .pipe(map((response)=>{
      console.log(response)
      let task = {};
      task = {...response,id : id}
      return task;
    }))
  }
}
