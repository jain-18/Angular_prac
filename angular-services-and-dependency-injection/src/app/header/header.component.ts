import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers : [SubscribeService]//what to provide
})
export class HeaderComponent {
  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  constructor(private subService : SubscribeService){
  }
  OnSubscribe(){
    this.subService.onSubscribeClicked('monthly');
  }
}
