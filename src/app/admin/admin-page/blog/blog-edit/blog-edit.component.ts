import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BlogArticleResponse } from 'src/app/services/blog-article';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {
  blogAddForm = new FormGroup({

    title: new FormControl(this.data.title,
      [Validators.required]),
    img: new FormControl(this.data.img,
      [Validators.required]),
    para: new FormControl(this.data.para,
      [Validators.required]),
    date: new FormControl(this.data.date,
      [Validators.required]),
    article: new FormControl(this.data.article,
      [Validators.required]),
 


  })
  constructor(private dialogRef: MatDialogRef<BlogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BlogArticleResponse,
    private blogService:BlogService) { }

  ngOnInit() {
  }
editArticle(id, value){
this.blogService.editArticles(id, value).subscribe((response)=>{
this.dialogRef.close
})
}
}
