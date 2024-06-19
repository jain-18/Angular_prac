import { Component, OnInit, Output, inject } from '@angular/core';
import { Task } from '../Model/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  showCreateTaskForm: boolean = false;
  http : HttpClient = inject(HttpClient);
  allTasks : Task[] = [];
  taskService : TaskService = inject(TaskService);
  currentTaskId : string = '';

  editMode : boolean = false;

  selectedTask: Task;
  ngOnInit(){
    this.fetchAllTasks();
  }

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
    this.editMode=false;
    this.selectedTask = {title : '',desc: '' , assignedTo : '',createdAt : '',status : '',priority : ''};
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  CreateTaskOrUpdateTask(data : Task){
    if(!this.editMode){
      this.taskService.CreateTask(data);
    }
    else{
      this.taskService.UpdateTask(this.currentTaskId,data);
    }
  }

  // {
  //   key : {},
  //   key : {}
  // }

  private fetchAllTasks(){
    this.taskService.GetAllTasks().subscribe((tasks)=>{
      this.allTasks = tasks;
      console.log(tasks);
    })
  }

  FetchAllTaskClicked(){
    this.fetchAllTasks();
  }

  DeleteTask(id : string | undefined){
   this.taskService.DeleteTask(id);
  }

  DeleteAllTaskClicked(){
  this.taskService.DeleteAllTaskClicked();
  }

  OnEditTaskClicked(id : string | undefined){
    this.currentTaskId = id;
    this.showCreateTaskForm = true;
    this.editMode = true;

    this.selectedTask = this.allTasks.find((task)=>{
      return task.id === id
    })
  }
}
