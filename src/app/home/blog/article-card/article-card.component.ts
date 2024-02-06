import { Component, Input, OnInit } from '@angular/core';
import { BlogArticleResponse } from 'src/app/services/blog-article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
@Input()
article:BlogArticleResponse
  constructor() { }

  ngOnInit() {
  }

}
