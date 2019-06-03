import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { ApiService } from './extern/api.service';
import { OwnService } from './ownapi/own.service';
import { ExternComponent } from './extern/extern.component';
import { OwnapiComponent } from './ownapi/ownapi.component';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { NavigatieComponent } from './navigatie/navigatie.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    ExternComponent,
    NavigatieComponent,
    OwnapiComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(
      {   apiKey: "AIzaSyCmINPUivTChUc0mqtI6hLh3b7KYkF3qFA",
      authDomain: "cloudapi-4d255.firebaseapp.com",
      databaseURL: "https://cloudapi-4d255.firebaseio.com",
      projectId: "cloudapi-4d255",
      storageBucket: "",
      messagingSenderId: "22584063992",
      appId: "1:22584063992:web:280a48e69c0d4484"}
   
    ),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    ToolbarModule,
    ButtonModule,
    RouterModule.forRoot([
      {path: 'deel1', component: ExternComponent},
      {path: 'deel2', component: OwnapiComponent}
    ])
  ],
  providers: [ApiService,OwnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
