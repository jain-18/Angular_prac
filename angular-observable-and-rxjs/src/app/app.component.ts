import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-observables';

  data: any[] = [];

  //1. Create an observable

  //observalble
  myObservable = new  Observable((observer) => {
    setTimeout(() => {observer.next(1)},1000)
    setTimeout(() => {observer.next(2)},3000)
    setTimeout(() => {observer.next(3)},5000)
    setTimeout(() => {observer.next(4)},7000)
    setTimeout(() => {observer.next(5)},9000)
  })


  GetAsyncData(){
      //observer
      // next,eeror,complete
    this.myObservable.subscribe((val:any)=>{
      this.data.push(val);
    });
  }
}
