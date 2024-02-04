import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Opinion } from 'src/app/services/opinion';
import { OpinionResponse, OpinionService } from 'src/app/services/opinion.service';
import { OpinionsEditComponent } from '../opinions-edit/opinions-edit.component';

@Component({
  selector: 'app-opinions-list',
  templateUrl: './opinions-list.component.html',
  styleUrls: ['./opinions-list.component.scss']
})
export class OpinionsListComponent implements OnInit {
  opinions$:Observable<Array<OpinionResponse>>
  displayedColumns: string[] = [

    'name',
    'opinion',
    'active',
    'actions'

  ]
  constructor(private opinionsService: OpinionService, private dialog: MatDialog) { }

  ngOnInit() {
     this.opinions$ = this.opinionsService.getOpinions()
  }
editOpinion(element){
  this.dialog.open(OpinionsEditComponent, {
    data: element
  })
}
deleteOpinion(id){
  this.opinionsService.deleteOpinion(id).subscribe(()=>{
    this.opinions$ = this.opinionsService.getOpinions()
  })

}
}
// opinion: string;
// name: string;
// active: boolean;