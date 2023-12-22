import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { BlogArticle } from '../services/blog-article';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {
articleId:string
article:Array<BlogArticle>
  constructor(private route:ActivatedRoute,
  private blogService:BlogService) { }

  ngOnInit() {
    this.articleId = this.route.snapshot.paramMap.get('id')
    this.article = this.blogService.getBlog().filter((article)=> article.id === parseInt(this.articleId))
  }

}
