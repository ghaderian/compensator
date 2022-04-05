import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import firebase from 'firebase/compat/app'
import {
  User,
} from '@angular/fire/auth';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAdmin = false;
  admins = ['9cvm405xzqRNt44SrdJUi2N1eJ82'];

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
        console.log(credential.uid);

        if (this.admins.some(s => s === credential.uid)) {
          this.isAdmin = true;
        }
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

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {


  private authService: AuthService; 

  constructor(_authService: AuthService ) {
    this.authService = _authService;
  }
  canActivate() {
    
    return this.authService.isAdmin;
  }
}
