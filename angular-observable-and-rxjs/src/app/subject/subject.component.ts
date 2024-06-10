import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent{
  ngOnInit(){
    // let obs  = new Observable((observer)=> {
      // observer.next(Math.random())
    // })

    // const subject = new Subject();
    // // subject.next(Math.random());

    const subject = new BehaviorSubject<number>(100);

    //Subscriber 1
    subject.subscribe((data)=> {
      console.log("1 "+ data)
    })
    //subcriber 2
    subject.subscribe((data)=> {
      console.log("2 "+data)
    })

    subject.next(2020);

    //subscribe 3
    subject.subscribe((data)=> {
      console.log("3 "+data)
    })

    subject.next(2023);

    //AJAX
    // const subject = new Subject();
    // const data = ajax('https://randomuser.me/api/')

    // subject.subscribe((response)=>console.log(response))
    // subject.subscribe((response)=>console.log(response))
    // subject.subscribe((response)=>console.log(response))

    // data.subscribe(subject);


  }

}
