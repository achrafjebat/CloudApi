import { Component,OnInit } from '@angular/core';
import { ApiService, Ishow, Ishows } from './extern/api.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    title ='user-service';
  constructor(public user: UserService) {}

  ngOnInit() {

}
}