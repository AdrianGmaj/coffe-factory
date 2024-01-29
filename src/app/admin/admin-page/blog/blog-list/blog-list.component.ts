import { Component, OnInit } from '@angular/core';
import { BlogArticle } from 'src/app/services/blog-article';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
blog:Array<BlogArticle>

displayedColumns:string[]=[

  'title',
  'img',
  'date',
  'actions'
  
]
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blog= this.blogService.getBlog()
  }

}

// id: number,
// title: string,
// para: string,
// article:string,
// date: string,
// img: string