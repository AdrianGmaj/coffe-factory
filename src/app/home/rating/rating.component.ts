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
  opinions$: Observable<Array<OpinionResponse>>
  ratingAddForm = new FormGroup({
    opinion: new FormControl('',
      [Validators.required]
    ),
    name: new FormControl('',
      [Validators.required]
    ),
    stars: new FormControl('')
  });

  constructor(private opinionService: OpinionService) { }

  ngOnInit() {
    this.opinions$ = this.opinionService.getOpinions()
  }

  opinionAdd(value: Opinion) {
    this.ratingAddForm.value
    console.log(value)
    this.opinionService.addOpinion(value).subscribe((response) => {
      console.log(response)

      this.opinions$ = this.opinionService.getOpinions()
    })
  }
  gfg(n) {
    this.remove();

    let stars = document.getElementsByClassName("star");
    let cls: string;

    for (let i = 0; i < n; i++) {
      if (n == 1) cls = "one";
      else if (n == 2) cls = "two";
      else if (n == 3) cls = "three";
      else if (n == 4) cls = "four";
      else if (n == 5) cls = "five";
      stars[i].className = "star " + cls;
    }

    let result = "★Rating  " + n + "/5";

    this.ratingAddForm.controls.stars.setValue(result);

    console.log(result);

    return result;
  }
  remove() {
    let i = 0;
    let stars = document.getElementsByClassName("star");
    while (i < 5) {
      stars[i].className = "star";
      i++;
    }
  }
}
