import { Component, OnInit } from '@angular/core';
import { BlogArticleResponse } from 'src/app/services/blog-article';
import { BlogService } from 'src/app/services/blog.service';
import { BlogAddComponent } from '../blog-add/blog-add.component';
import { MatDialog } from '@angular/material/dialog';
import { BlogEditComponent } from '../blog-edit/blog-edit.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
blog:Array<BlogArticleResponse>
Articles$:Observable<Array<BlogArticleResponse>>


displayedColumns:string[]=[

  'title',
  'img',
  'date',
  'actions'
  
]
  constructor(private blogService: BlogService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.blog= this.blogService.getBlog()
    this.Articles$ = this.blogService.getArticles()
  }
  addDialog(){
    this.dialog.open(BlogAddComponent)
  }

  editArticle(element) {


    this.dialog.open(BlogEditComponent, {
      data: element
    })
  }

  delete(id){
    this.blogService.deleteArticles(id)
    
  }
}

// id: number,
// title: string,
// para: string,
// article:string,
// date: string,
// img: string