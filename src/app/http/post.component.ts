import { IPost } from './post.model';
import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: `./post.component.html`,
  providers: [PostService]
})
export class PostComponent implements OnInit {
  posts: IPost[];
  constructor(private postService: PostService) {}
  
  ngOnInit() {
    this.getPostsFromJsonFile();
  }
  
  getPostsFromJsonFile() {
  this.postService.getPostsFromJsonFile().subscribe(res => console.log(res));
  }
  
  getPosts() {
    this.postService.getPosts()
      .subscribe(posts => {this.posts=posts; console.log(this.posts.length);});
  }
}
