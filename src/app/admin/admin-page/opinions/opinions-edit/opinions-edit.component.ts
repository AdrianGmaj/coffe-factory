import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OpinionResponse, OpinionService } from 'src/app/services/opinion.service';


@Component({
  selector: 'app-opinions-edit',
  templateUrl: './opinions-edit.component.html',
  styleUrls: ['./opinions-edit.component.scss']
})
export class OpinionsEditComponent implements OnInit {

  opinionEditForm = new FormGroup({

    name: new FormControl(this.data.name,
      [Validators.required]),
    opinion: new FormControl(this.data.opinion,
      [Validators.required]),
    active: new FormControl(this.data.active,
      [Validators.required]),

 


  })

  constructor(private dialogRef: MatDialogRef<OpinionResponse>,
    @Inject(MAT_DIALOG_DATA) public data: OpinionResponse,
    private opinionService: OpinionService) { }

  ngOnInit() {
  }
close(){
  this.dialogRef.close()
}

editOpinion(id,value){
this.opinionService.editProduct(id, value).subscribe(()=>{
  this.dialogRef.close()
})

}
}
