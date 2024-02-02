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

  deleteOpinion(id):Observable<OpinionResponse>{
    return this.http.delete<OpinionResponse>(`/api/opinions/${id}`)
  }

  editProduct(id: number, value: Opinion) {
    return this.http.patch<OpinionResponse>(`/api/opinions/${id}`, value)
  }
}


export interface OpinionResponse {
  id:number;
  opinion: string;
  name: string;
  active: boolean;
  stars:string;
}
