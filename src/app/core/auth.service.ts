import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import firebase from 'firebase/compat/app'
import {
  User,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // userData: Observable<firebase.User | null>;
  // auth: Auth;

  currentUser: User | null = null ;
  private authStatusSub = new BehaviorSubject(this.currentUser);
  currentAuthStatus = this.authStatusSub.asObservable();
  

  constructor(public fireAuth: AngularFireAuth){
    this.authStatusListener();
  }


  authStatusListener() {
      this.fireAuth.onAuthStateChanged((credential)=>{
      if(credential){
        console.log(credential);
        //this.authStatusSub.next(credential);
        console.log('User is logged in');
      }
      else{
        this.authStatusSub.next(null);
        console.log('User is logged out');
      }
    })
  }


  signOut(){
    return this.fireAuth.signOut();
  }


  signInWithGoogle() {


      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/plus.login');
      provider.addScope('profile');
      provider.addScope('email');
      firebase.auth().signInWithRedirect(provider);

      this.fireAuth.signInWithRedirect(provider)

  }
}
