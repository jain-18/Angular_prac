import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared.module";

@NgModule({
    declarations:[
        DashboardComponent,
        CreateTaskComponent,
        TaskDetailsComponent,
    ],
    exports:[
        DashboardComponent,
        CreateTaskComponent,
        TaskDetailsComponent,
        SharedModule
    ],
    imports:[
        CommonModule,
        SharedModule
        
    ]
})
export class DashBoardModule{

}