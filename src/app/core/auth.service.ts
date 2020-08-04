import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState:any=null //user objesini tutaağız işimizi create yaparken hangi kullanıcıınn create yaptığını firebase'den getirecek.
  constructor(public afAuth:AngularFireAuth) { 
    this.afAuth.authState.subscribe(data=>this.authState=data) //burada authstateden hangi öğreniyoruz.
  }

  get authenticated():boolean {
    return this.authState!==null //null değilse kullanıcı varsa 
  }
  get currentUserId():string {
    return this.authenticated?this.authState.uid:null 
  }

  login() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }


  logout(){
    this.afAuth.signOut()
  }
}
