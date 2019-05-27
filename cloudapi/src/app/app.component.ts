import { Component } from '@angular/core';
import { ApiService } from './extern/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  naam: string;
  birthday: string;
  gender: string;
  constructor(private externalSrv : ApiService) {
   this.externalSrv.GetData().subscribe((result) => {
    this.naam = result.name;
   this.birthday = result.birthday;
   this.gender = result.gender;
  });

  
}
}
