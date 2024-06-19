import { Component, OnInit, Output, inject } from '@angular/core';
import { Task } from '../Model/task';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subscription, map } from 'rxjs';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  showCreateTaskForm: boolean = false;
  http: HttpClient = inject(HttpClient);
  allTasks: Task[] = [];
  taskService: TaskService = inject(TaskService);
  currentTaskId: string = '';
  currentTask : Task | null =null; 
  showTaskDetails : boolean = false;
  errorMessage : string | null = null;

  editMode: boolean = false;

  selectedTask: Task;

  errorSub : Subscription ;

  isLoading: boolean = false;
  ngOnInit() {
    this.fetchAllTasks();
    this.errorSub = this.taskService.errorSubject.subscribe({next :(httpError)=>{
      this.setErrorMessage(httpError);
    }});
  }

  ngOnDestroy(){
    this.errorSub.unsubscribe;
  }

  OpenCreateTaskForm() {
    this.showCreateTaskForm = true;
    this.editMode = false;
    this.selectedTask = {
      title: '',
      desc: '',
      assignedTo: '',
      createdAt: '',
      status: '',
      priority: '',
    };
  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  CreateTaskOrUpdateTask(data: Task) {
    if (!this.editMode) {
      this.taskService.CreateTask(data);
    } else {
      this.taskService.UpdateTask(this.currentTaskId, data);
    }
  }

  // {
  //   key : {},
  //   key : {}
  // }

  private fetchAllTasks() {
    this.isLoading = true;
    this.taskService.GetAllTasks().subscribe({next:(tasks) => {
      this.allTasks = tasks;
      // console.log(tasks);
      this.isLoading = false;
    },error : (error)=>{
      this.setErrorMessage(error);
      // this.errorMessage = error.message;
      this.isLoading = false;
    }})
  }

  private setErrorMessage(err : HttpErrorResponse){
    console.log(err);
    if(err.error.error === 'Permission denied'){
      this.errorMessage = 'You do not have permission to access this resource';
    }else{
      this.errorMessage = err.message;
    }
    setTimeout(()=>{
      this.errorMessage = null;
    },3000);
  }

  FetchAllTaskClicked() {
    this.fetchAllTasks();
  }

  DeleteTask(id: string | undefined) {
    this.taskService.DeleteTask(id);
  }

  DeleteAllTaskClicked() {
    this.taskService.DeleteAllTaskClicked();
  }

  OnEditTaskClicked(id: string | undefined) {
    this.currentTaskId = id;
    this.showCreateTaskForm = true;
    this.editMode = true;

    this.selectedTask = this.allTasks.find((task) => {
      return task.id === id;
    });
  }

  showCurrentTaskDetails(id : string){
    this.showTaskDetails = true;
    this.taskService.getTaskDetails(id).subscribe({ next : (data : Task)=>{
    this.currentTask = data;
    return this.currentTask;
    }})
  }

  CloseTaskDetails(){
    this.showTaskDetails = false;
  }
}
