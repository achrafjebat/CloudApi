import { Component, OnInit } from '@angular/core';
import { ApiService, Ishow, Ishows } from './api.service';


@Component({
  selector: 'app-extern',
  templateUrl: './extern.component.html',
  styleUrls: ['./extern.component.css']
})
export class ExternComponent implements OnInit {

  shows$: {};
  show$: {};
  idshow$;
  page$ = 0;

  constructor(private externalSrv : ApiService) { }
  searchingshow(showname: string){
    return this.externalSrv.SearchShow(showname).subscribe(result => this.shows$ = result);
   
  }
  searchingid(showid: number){
    return this.externalSrv.Searchid(showid).subscribe(result => this.idshow$ = result);
   
  }
  showingall(){
    this.page$ = 0;
    return this.externalSrv.Showpage(0).subscribe(result => this.show$ = result);
  }
  pluspage(){
    this.page$ +=1;
    return this.externalSrv.Showpage(this.page$).subscribe(result => this.show$ = result);
  }
  minuspage(){
    if(this.page$ > 0){
    this.page$ -=1;
    return this.externalSrv.Showpage(this.page$).subscribe(result => this.show$ = result);
     }
     else
     {
       
     }
  }
  ngOnInit() {
  }

}
