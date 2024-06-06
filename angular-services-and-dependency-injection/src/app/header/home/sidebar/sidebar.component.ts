import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  providers : [SubscribeService]//what to provide
})
export class SidebarComponent {
  //how to provide
  constructor(private subService : SubscribeService){
  }
  OnSubscribe(){
    this.subService.onSubscribeClicked('daily');
  }
}
