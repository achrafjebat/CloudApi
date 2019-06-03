import { Component, OnInit } from '@angular/core';
import { OwnService,Imodel } from './own.service';

@Component({
  selector: 'app-ownapi',
  templateUrl: './ownapi.component.html',
  styleUrls: ['./ownapi.component.css']
})
export class OwnapiComponent implements OnInit {

  model$: {};
  idmodel$;

  constructor(private OwnSrv : OwnService) { }

searchingid(modelid: number){
  return this.OwnSrv.Searchid(modelid).subscribe(result => this.idmodel$ = result);
 
}

  ngOnInit() {
    return this.OwnSrv.getdata().subscribe(result => this.model$ = result);
  }

}
