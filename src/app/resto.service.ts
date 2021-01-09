import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root',
})
export class RestoService {
  allrestourl = 'http://localhost:3000/restaturants';
  constructor(private http: HttpClient) { }

  getAllRestaturants() {
    return this.http.get(this.allrestourl);
  }
}
