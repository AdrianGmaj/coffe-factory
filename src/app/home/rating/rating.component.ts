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

   stars = 
    document.getElementsByClassName("star"); 
    output = 
    document.getElementById("output");
    cls:string
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
  gfg(n) {
    this.remove();
    for (let i = 0; i < n; i++) {
        if (n == 1)  this.cls = "one";
        else if (n == 2) this.cls = "two";
        else if (n == 3) this.cls = "three";
        else if (n == 4) this.cls = "four";
        else if (n == 5) this.cls = "five";
        this.stars[i].className = "star " + this.cls;
    }
    this.output.innerText = "Rating  " + n + "/5";
    return "stars  " + n + "/5"
}
remove() {
  let i = 0;
  while (i < 5) {
      this.stars[i].className = "star";
      i++;
  }
}
}
