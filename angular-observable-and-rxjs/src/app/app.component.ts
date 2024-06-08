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
    setTimeout(() => {observer.next(2)},2000)
    setTimeout(() => {observer.error(new Error('something went wrong . Please try again'))},3000)
    setTimeout(() => {observer.next(3)},3000)
    setTimeout(() => {observer.next(4)},4000)
    setTimeout(() => {observer.next(5)},5000)
    // setTimeout(() => {observer.complete()},6000)
  })


  GetAsyncData(){
      //observer
      // next,error,complete
  //   this.myObservable.subscribe((val:any)=>{
  //     this.data.push(val);
  //   },
  // (erro)=>{
  //   alert(erro.message)
  // },
  // ()=>{
  //   alert('All the data is streamed')
  // });
    this.myObservable.subscribe({
      next : (val:any)=> {
        this.data.push(val);
      },
      error(err){
        alert(err.message);
      },
      complete(){
        alert('All the data stream')
      }
    })

  }
}
