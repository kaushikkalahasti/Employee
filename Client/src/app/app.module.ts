import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { UserService } from "./user-service/user.service";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { AddUserComponent } from "./add-user/add-user.component";


const appRoutes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
