import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { OpinionResponse } from 'src/app/services/opinion.service';

@Component({
  selector: 'app-carousell',
  templateUrl: './carousell.component.html',
  styleUrls: ['./carousell.component.scss']
})
export class CarousellComponent implements OnInit {
  @Input()
  opinions:Observable< Array<OpinionResponse>>
  constructor() { }

  ngOnInit() {
  }

}
