import { Component, OnInit } from '@angular/core';
import { BlogArticle } from 'src/app/services/blog-article';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
blogArticles:Array<BlogArticle>
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogArticles = this.blogService.getBlog()
  }

}
