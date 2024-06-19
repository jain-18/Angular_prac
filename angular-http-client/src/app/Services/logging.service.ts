import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class LoggingService{
    http: HttpClient = inject(HttpClient);
    Logerror(data : {statusCode : number , errorMessage : string, datetime : Date}){
        this.http.post('https://angularprac-89950-default-rtdb.firebaseio.com/log.json',data)
        .subscribe();
    }
    fetcherrors(){
        this.http.get('https://angularprac-89950-default-rtdb.firebaseio.com/log.json')
        .subscribe((data)=>{
            console.log(data)
        })
    }
}