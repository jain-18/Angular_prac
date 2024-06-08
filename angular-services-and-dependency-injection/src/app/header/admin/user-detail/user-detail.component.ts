import { Component, inject } from '@angular/core';
import { User } from '../../../Models/User';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent {

  selectorUser : User | undefined;
  userService = inject(UserService)

  ngOnInit(){
    this.userService.OnUserDetailsClicked.subscribe((data : User) => {
      this.selectorUser = data;
    })
  }

}
