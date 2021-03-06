import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root',
})
export class RestoService {
  getRestaturantById(id: number) {
    return this.http.get( `${this.allrestourl}/${id}`);
  }
  updateRestaurant(data: any, id: any) {
    return this.http.put(`${this.allrestourl}/${id}`, data);
  }
  allrestourl = 'http://localhost:3000/restaturants';
  constructor(private http: HttpClient) { }

  getAllRestaturants() {
    return this.http.get(this.allrestourl);
  }

  addNewRestaurant(data: any){
    return this.http.post(this.allrestourl, data);
  }

  deleteRestaurant(data: any)
  {
      return this.http.delete(`${this.allrestourl}/${data}`);
  }


}
