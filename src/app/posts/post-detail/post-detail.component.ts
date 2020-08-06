import { Component, OnInit } from '@angular/core';
import{Post} from '../post';
import {ActivatedRoute,Router} from '@angular/router'; //Route'ın yakalanması için bu sınıfa ihtiyacımız var.
import{PostService} from '../post.service';
import { AuthService } from 'src/app/core/auth.service';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post:Post
  editing:boolean=false
  constructor(private route:ActivatedRoute,private postService:PostService,private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
    this.getPost()
  } 

  getPost() {
    const id =this.route.snapshot.paramMap.get('id')
    return this.postService.getPostData(id).subscribe(data=>this.post=data)
  }

  delete(){
    const id=this.route.snapshot.paramMap.get('id');
    this.postService.delete(id);
    this.router.navigate(["/blog"])
  }
  updatePost() {
    const formData={
    title:this.post.title,
    content:this.post.content
    };
    const id=this.route.snapshot.paramMap.get("id")
    this.postService.update(id,formData)
    this.editing=false;

  }

}
