import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Opinion } from 'src/app/services/opinion';
import { OpinionResponse, OpinionService } from 'src/app/services/opinion.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  opinions: Array<Opinion>
  opinions$:Observable<Array<OpinionResponse>>
  ratingAddForm = new FormGroup({
    opinion: new FormControl('',
      [Validators.required]
    ),
    name: new FormControl('',
      [Validators.required])
  })
  constructor(private opinionService: OpinionService) { }

  ngOnInit() {
  this.opinions$ = this.opinionService.getOpinions()
  }

  opinionAdd(value: Opinion) {
    this.ratingAddForm.value
    console.log(value)
    this.opinionService.addOpinion(value).subscribe((response)=>{
      console.log(response)
    })
    this.opinions$ = this.opinionService.getOpinions()
  }

}
