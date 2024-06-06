import { Component, inject } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  constructor(private subService : SubscribeService){
  }
  OnSubscribe(){
    this.subService.onSubscribeClicked('yearly');
  }
}
