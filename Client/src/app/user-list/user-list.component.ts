import { Component } from "@angular/core";
import { UserService } from "../user-service/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users;

  constructor(private userService: UserService) {
    userService.getUsers()
      .subscribe(
        users => this.users = users,
        error => console.log(error)
      );
  }
}
