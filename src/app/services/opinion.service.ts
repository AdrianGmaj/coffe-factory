import { Injectable } from '@angular/core';
import { Opinion } from './opinion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpinionService {
  opinions: Array<Opinion> =[]

  constructor(private http: HttpClient) { }



  addOpinion(opinion: Opinion):Observable<Opinion>{
return this.http.post<Opinion>('/api/opinions', opinion)
  }
  

  getOpinions():Observable<Array<OpinionResponse>>{
    return this.http.get<Array<OpinionResponse>>('/api/opinions')
  }

}


export interface OpinionResponse {
  opinion: string;
  name: string;
  active: boolean;
}
