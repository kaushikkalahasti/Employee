import { Component } from "@angular/core";
import { UserService } from "../user-service/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  states = ['IL', 'NY', 'NJ', 'TN', 'FL', 'GA', 'VA'];
  user = {
    firstName: null,
    lastName: null,
    email: null,
    state: null
  };

  constructor(private userService: UserService, private router: Router) {
  }

  addUser() {
    this.userService.addUser(this.user)
      .subscribe(user => {
        console.log(user);
        this.router.navigate(['/users']);
      });
  }
}
