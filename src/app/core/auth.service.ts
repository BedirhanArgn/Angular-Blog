import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth:AngularFireAuth) { }


  login() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }


  logout(){
    this.afAuth.signOut()
  }
}
