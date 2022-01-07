import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from './blog-create/blog-create.model';
import { posts } from './data/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts = posts
  baseUrl: string = environment.baseApi;
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${this.baseUrl}blog/`)
  }

  getLatestPosts() {
    return this.posts.slice(0,3)
  }

  getSinglePost (slug: any){
    return this.http.get(`${this.baseUrl}blog/${slug}`)
  }

  addPost(value: any) {
    return this.http.post(`${this.baseUrl}blog/`, value)
  }
}
