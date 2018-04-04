import { IPost } from './post.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  posts: IPost[];
  configJsonFile = 'app/resource/config.json'
  url = 'https://jsonplaceholder.typicode.com/posts';
  postJsonFile = 'app/resource/posts.json';
  
  constructor(private http: Http) {}
  
  getPostsFromJsonFile() {
    return this.http.request(this.postJsonFile);
  }
  
  getPosts(): Observable<IPost[]> {
    return this.http.get(this.url)
        .map(response => {return <IPost[]>response.json(); });
  }
  
  getConfig() {
    return this.http.get(this.configJsonFile);
  }
  
  private handleError(error: Response) {
       return Observable.throw(error.statusText);
   }
}