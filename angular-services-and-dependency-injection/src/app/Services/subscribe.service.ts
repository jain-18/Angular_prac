import { Injectable } from "@angular/core";

@Injectable()
export class SubscribeService{

    onSubscribeClicked(type : string){
        alert('Thank you for subscribing '+type+' Subscription. You can access the services now.')
    }

}