import { Component } from '@angular/core';
import { Observable, filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-observables';

  data: any[] = [];
  array1 = [1,3,5,7,0];
  array2 = ['A','B','C','D'];

  //1. Create an observable

  //observalble
  // myObservable = new  Observable((observer) => {
  //   setTimeout(() => {observer.next(1)},1000)
  //   setTimeout(() => {observer.next(2)},2000)
  //   setTimeout(() => {observer.error(new Error('something went wrong . Please try again'))},3000)
  //   setTimeout(() => {observer.next(3)},3000)
  //   setTimeout(() => {observer.next(4)},4000)
  //   setTimeout(() => {observer.next(5)},5000)
  //   // setTimeout(() => {observer.complete()},6000)
  // })

  // of operator
  // myObservable = of(this.array1,this.array2,20,30,true);


  promiseData = new Promise((resolve,reject)=>{
    resolve([10,20,30,40,50]);
  })

  // from operator
  // myobservable = from(this.array1);

  //myObservable - 2,4,6,8,10
  //result - 10, 20,30,40,50
  myobservable = from([2,4,6,8,10,12]).pipe(map((val)=>{
    return val * 5;
  }),filter((val)=>{
    return val % 4 === 0;
  }));

  //transform data
  // transformedObs = this.myobservable.pipe(map((val)=> {
  //   return val * 5;
  // }),filter((val,i)=>{
  //   return val % 4 === 0;
  // }))

  //this will filter the number divisibilty by four
  // filterObs = this.transformedObs.pipe(filter((val)=> {
  //   return val % 4 === 0;
  // }))

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
    this.myobservable.subscribe({
      next : (val:any)=> {
        this.data.push(val)
        console.log(this.data);
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
