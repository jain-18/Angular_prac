import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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

    // //Subscriber 1
    // subject.subscribe((data)=> {
    //   console.log(data)
    // })
    // //subcriber 2
    // subject.subscribe((data)=> {
    //   console.log(data)
    // })
    // subject.next(Math.random());

    //AJAX
    const subject = new Subject();
    const data = ajax('https://randomuser.me/api/')

    subject.subscribe((response)=>console.log(response))
    subject.subscribe((response)=>console.log(response))
    subject.subscribe((response)=>console.log(response))

    data.subscribe(subject);


  }

}
