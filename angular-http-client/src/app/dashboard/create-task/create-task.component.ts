import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../Model/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  @Input()  isEditMode : boolean = false;

  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  EmitTaskdata : EventEmitter<Task> = new EventEmitter<Task>();

  @Input() selectedTask : Task;

  @ViewChild('taskForm')
  taskForm!: NgForm;

  ngAfterViewInit(){
    setTimeout(()=>{
      console.log(this.taskForm.value);
      this.taskForm.form.patchValue(this.selectedTask);
    },0)
  }

  OnCloseForm(){
    this.CloseForm.emit(false);
  }
  OnFormSubmitted(form : NgForm){
    this.EmitTaskdata.emit(form.value)
    this.CloseForm.emit(false);
    // console.log(form.value);
  }
}
