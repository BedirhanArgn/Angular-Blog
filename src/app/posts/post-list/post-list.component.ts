import { Component, OnInit } from '@angular/core';
import{Observable} from 'rxjs'
import { Post } from '../post';
import { PostService } from '../post.service';
import { AuthService } from 'src/app/core/auth.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
posts:Observable<Post[]>
  constructor(private postService:PostService,public auth:AuthService) { }
  

  ngOnInit(): void {
    this.posts =this.postService.getPosts() 
  }

  delete(id:string) {
    console.log(id)
    this.postService.delete(id)
  }



}
