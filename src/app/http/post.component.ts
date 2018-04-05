import { IPost } from './post.model';
import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-post',
  templateUrl: `./post.component.html`,
  providers: [PostService]
})
export class PostComponent implements OnInit {
  posts: IPost[];
  postsAny: Observable<any>;
  constructor(private postService: PostService) {}
  
  ngOnInit() {
    this.getPostsAny();
  }
  
  getPostsFromJsonFile() {
  this.postService.getPostsFromJsonFile().subscribe(res => console.log(res));
  }
  
  getPostsAny() {
    this.postService.getPostsAny().subscribe(posts => this.postsAny=posts);
  }
  
  getPosts() {
    this.postService.getPosts()
      .subscribe(posts => {this.posts=posts; console.log(this.posts.length);});
  }
}
