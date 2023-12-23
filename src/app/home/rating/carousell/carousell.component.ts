import { Component, Input, OnInit } from '@angular/core';
import { Opinion } from 'src/app/services/opinion';

@Component({
  selector: 'app-carousell',
  templateUrl: './carousell.component.html',
  styleUrls: ['./carousell.component.scss']
})
export class CarousellComponent implements OnInit {
  @Input()
  opinions: Array<Opinion>
  constructor() { }

  ngOnInit() {
  }

}
