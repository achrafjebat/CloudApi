import { Injectable } from '@angular/core';
import { of as observableOf, from } from "rxjs";
import { andObservables } from '@angular/router/src/utils/collection';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import {map} from 'rxjs/operators';
import{ auth} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    uid = this.afAuth.authState.pipe(
              map(authSate => {
                if(!authSate){
                  return null;
                }
                else{
                  return authSate.uid;
                }
              })
             );
    isAdmin = observableOf(true);
     constructor(private afAuth: AngularFireAuth) { }
     login(){
       this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
     }
     logout(){
       this.afAuth.auth.signOut();
     }
}
