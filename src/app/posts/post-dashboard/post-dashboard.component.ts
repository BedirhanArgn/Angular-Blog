import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage'
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
title:string
image:string=null
content:string   
ButtonText:string="Create Post"
uploadPercent:Observable<number> //progress bar için 
downloadUrl:Observable<string>
constructor(private auth:AuthService,private postService:PostService,private storage:AngularFireStorage) {}
  ngOnInit(): void {
  }
  
  createPost() {
    const data={
      author:this.auth.authState.displayName || this.auth.authState.email,
      authorId:this.auth.currentUserId,
      content:this.content,
      image:this.image,
      published:new Date(),
      title:this.title
    };
    console.log(this.image)
    this.postService.create(data);
    this.title=''  //gonderdikten sonra boş olarak görünsün o alanlar
    this.content=''
    this.image=''
    this.ButtonText='Created Post' //Gönderdikten sonra button text bu olsun. 
    setTimeout(()=>this.ButtonText="Create Post",3000) 
  }

  uploadImage(event) {
    console.log(event);
    const file=event.target.files[0]
    //const id = Math.random().toString(36).substring(2);
    const path='post/${file.name}'
    if(file.type.split('/')[0]!=='image'){ //eğer yüklediğin soyanını type'ı image değil ise 
      return alert('Only image Files')
    } 
    else {
      const task = this.storage.upload(path, file);
      const ref = this.storage.ref(path);
      this.uploadPercent = task.percentageChanges(); //bar'ın yüzdesini ilerletiyor.
      console.log('Image uploaded!');
      task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadUrl = ref.getDownloadURL()
          this.downloadUrl.subscribe(url => (this.image = url));
        })
      ).subscribe();   
    }
  }
}
