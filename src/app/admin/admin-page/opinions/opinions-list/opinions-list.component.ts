import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Opinion } from 'src/app/services/opinion';
import { OpinionResponse, OpinionService } from 'src/app/services/opinion.service';

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
  constructor(private opinionsService: OpinionService) { }

  ngOnInit() {
     this.opinions$ = this.opinionsService.getOpinions()
  }
editOpinion(value){

}
deleteOpinion(id){

}
}
// opinion: string;
// name: string;
// active: boolean;