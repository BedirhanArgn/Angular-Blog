import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Post} from './post'
@Injectable({
  providedIn: 'root'
})
//Hold data form post 
export class PostService {
  postCollection:AngularFirestoreCollection<Post>

  constructor(private afs:AngularFirestore) {
    this.postCollection=this.afs.collection('posts',ref=> //burası firestore'a bağlantı kuruyor.posts ordada belirttiğimiz isim 
    ref.orderBy('published','desc')) 
  }
}
