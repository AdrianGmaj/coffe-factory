import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogArticleResponse } from 'src/app/services/blog-article';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
blogArticles:Array<BlogArticleResponse>
blogArticles$:Observable<Array<BlogArticleResponse>>
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogArticles = this.blogService.getBlog();
    this.blogArticles$ = this.blogService.getArticles()
  }

}
