import { Injectable } from '@angular/core';
import { Opinion } from './opinion';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {
  opinions: Array<Opinion> =[]

  constructor() { }

  addOpinion(opinion: Opinion) {
    this.opinions.push(opinion)
  }
  
  getOpinions() {
    return this.opinions
  }
}
