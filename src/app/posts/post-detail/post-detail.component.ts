import { Component, OnInit } from '@angular/core';
import{Post} from '../post';
import {ActivatedRoute} from '@angular/router'; //Route'ın yakalanması için bu sınıfa ihtiyacımız var.
import{PostService} from '../post.service';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post:Post
  constructor(private route:ActivatedRoute,private postService:PostService) { }

  ngOnInit(): void {
    this.getPost()
  } 

  getPost() {
    const id =this.route.snapshot.paramMap.get('id')
    return this.postService.getPostData(id).subscribe(data=>this.post=data)

  }




}
