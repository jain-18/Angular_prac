import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  OnSubscribe(){
    let SubService = new SubscribeService();
    SubService.onSubscribeClicked('daily');
  }
}
