import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateTaskComponent } from './dashboard/create-task/create-task.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { TaskDetailsComponent } from './dashboard/task-details/task-details.component';
import { AuthInterceptorService } from './Services/auth-interceptor.service';
import { LoggingService } from './Services/logging.service';
import { LoggingInterceptorService } from './Services/logging-Interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CreateTaskComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS ,useClass : AuthInterceptorService, multi : true},
    {provide : HTTP_INTERCEPTORS , useClass : LoggingInterceptorService , multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
