import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import {Post} from './post';
import {map}  from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
//Hold data form post 
export class PostService {
  postCollection:AngularFirestoreCollection<Post>
  postDoc:AngularFirestoreDocument<Post> //id'si olanın detailini getirmek için kullanılıyor.
  constructor(private afs:AngularFirestore) {
    this.postCollection=this.afs.collection('posts',ref=> //burası firestore'a bağlantı kuruyor.posts ordada belirttiğimiz isim 
    ref.orderBy('published','desc')) 
  }


  getPosts() {
    return this.postCollection.snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data=a.payload.doc.data() as Post 
        const id=a.payload.doc.id
        return {id,...data}
      })
    }))
  }

  getPostData(id:string){
//
//this.postDoc=this.afs.doc<Post>('posts/${id}')
//return this.postDoc.valueChanges()
   /*
    return this.afs.collection('blogapp').doc(id).ref.get()
     .then((doc) => {
      console.log(doc.data())
       return doc.data();   // here...
     });*/
    // return this.afs.collection('blogapp').doc<Post>(id).valueChanges()

this.postDoc=this.afs.collection<Post>('posts').doc<Post>(id)
return this.postDoc.valueChanges()

/*
    return this.afs
    .collection<Post>('posts')
    .doc(id)
    .ref
    .get()
    .then((doc) => {
        if (doc.exists) {
            console.log(doc.data());
            return doc.data();
        } else {
            return console.log('Doc does not exits');
        }
     })
     .catch((err) => {
        console.error(err);
     });
  }
*/
  }
}
