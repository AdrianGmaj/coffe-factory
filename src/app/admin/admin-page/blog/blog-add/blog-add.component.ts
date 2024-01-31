import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss']
})
export class BlogAddComponent implements OnInit {
  blogAddForm = new FormGroup({

    title: new FormControl('',
      [Validators.required]),
    img: new FormControl('',
      [Validators.required]),
    para: new FormControl('',
      [Validators.required]),
    date: new FormControl('',
      [Validators.required]),
    article: new FormControl('',
      [Validators.required]),
 


  })
  constructor( private blogService:BlogService,
    private dialogRef: DialogRef) { }

  ngOnInit() {
  }

  addArticle(value){
    this.blogService.addArticles(value).subscribe(response=>{
      this.dialogRef.close()
  }
)}}
// id: number,
// title: string,
// para: string,
// article:string,
// date: string,
// img: string